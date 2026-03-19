import { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Loader2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError('');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get('fullName') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      unitType: formData.get('unitType') as string,
      city: formData.get('city') as string,
      eventDate: formData.get('eventDate') as string,
      duration: formData.get('duration') as string,
      details: formData.get('details') as string,
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) throw new Error('Failed to send');

      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError('Something went wrong. Please call us at 323-371-6675 or try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="py-[100px] max-md:py-[72px] bg-snow">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[60px] items-start">
        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e6eaff] text-[#0026b0] rounded-full text-xs font-semibold tracking-[0.8px] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#0031e2] rounded-full" />
            Get in Touch
          </div>
          <h2 className="section-heading text-[clamp(32px,4.5vw,52px)] text-ink mb-4">
            Let's Plan Your <span className="text-[#0031e2]">Rental</span>
          </h2>
          <p className="text-[17px] text-slate leading-[1.7] max-w-[520px]">
            When contacting us, please include the type of portable toilet you need, the city, date, and how long the restrooms will be needed for your event.
          </p>

          <div className="flex flex-col gap-4 mt-8">
            <a href="tel:3233716675" className="flex items-center gap-4 p-5 bg-white rounded-2xl transition-all hover:shadow-md hover:translate-x-1 no-underline" style={{ border: '1px solid rgba(0,0,0,0.05)' }}>
              <div className="w-12 h-12 bg-[#e6eaff] rounded-xl flex items-center justify-center shrink-0">
                <Phone size={20} className="text-[#0031e2]" />
              </div>
              <div>
                <div className="text-xs text-slate font-medium uppercase tracking-[0.5px]">Phone</div>
                <div className="text-base font-semibold text-ink">323-371-6675</div>
              </div>
            </a>
            <a href="mailto:dbrosportables@gmail.com" className="flex items-center gap-4 p-5 bg-white rounded-2xl transition-all hover:shadow-md hover:translate-x-1 no-underline" style={{ border: '1px solid rgba(0,0,0,0.05)' }}>
              <div className="w-12 h-12 bg-[#e6eaff] rounded-xl flex items-center justify-center shrink-0">
                <Mail size={20} className="text-[#0031e2]" />
              </div>
              <div>
                <div className="text-xs text-slate font-medium uppercase tracking-[0.5px]">Email</div>
                <div className="text-base font-semibold text-ink">dbrosportables@gmail.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl transition-all hover:shadow-md hover:translate-x-1" style={{ border: '1px solid rgba(0,0,0,0.05)' }}>
              <div className="w-12 h-12 bg-[#e6eaff] rounded-xl flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-[#0031e2]" />
              </div>
              <div>
                <div className="text-xs text-slate font-medium uppercase tracking-[0.5px]">Service Area</div>
                <div className="text-base font-semibold text-ink">LA, OC &amp; Inland Empire</div>
              </div>
            </div>
          </div>

          <div className="mt-5 p-4 px-5 bg-[#e6eaff] rounded-[10px] text-[13px] text-[#0026b0] leading-[1.6]">
            <strong>Tip:</strong> Include the type of unit, city, event date, and rental duration in your message for the fastest quote.
          </div>
        </div>

        <div className="bg-white rounded-[20px] p-10 max-md:p-5 reveal" style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 32px rgba(0,0,0,0.04)' }}>
          <div className="font-fraunces text-2xl font-semibold mb-1">Request a Free Quote</div>
          <div className="text-sm text-slate mb-7">We'll get back to you within the hour.</div>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
              Thank you! We'll get back to you within the hour with your free quote.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-[18px]">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.8px] text-[#0031e2] mb-1.5">Full Name</label>
                <input name="fullName" type="text" placeholder="John Doe" required className="w-full px-4 py-[13px] border-[1.5px] border-mist rounded-[10px] text-sm text-ink bg-snow transition-all focus:outline-none focus:border-[#0031e2] focus:ring-[3px] focus:ring-[#0031e2]/[0.08]" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.8px] text-[#0031e2] mb-1.5">Phone</label>
                <input name="phone" type="tel" placeholder="(323) 000-0000" required className="w-full px-4 py-[13px] border-[1.5px] border-mist rounded-[10px] text-sm text-ink bg-snow transition-all focus:outline-none focus:border-[#0031e2] focus:ring-[3px] focus:ring-[#0031e2]/[0.08]" />
              </div>
            </div>

            <div className="mb-[18px]">
              <label className="block text-xs font-semibold uppercase tracking-[0.8px] text-[#0031e2] mb-1.5">Email</label>
              <input name="email" type="email" placeholder="john@example.com" required className="w-full px-4 py-[13px] border-[1.5px] border-mist rounded-[10px] text-sm text-ink bg-snow transition-all focus:outline-none focus:border-[#0031e2] focus:ring-[3px] focus:ring-[#0031e2]/[0.08]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-[18px]">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.8px] text-[#0031e2] mb-1.5">Type of Unit</label>
                <select name="unitType" required className="calc-select w-full px-4 py-[13px] border-[1.5px] border-mist rounded-[10px] text-sm text-ink bg-snow cursor-pointer transition-all focus:outline-none focus:border-[#0031e2] focus:ring-[3px] focus:ring-[#0031e2]/[0.08]">
                  <option value="">Select type</option>
                  <option>Portable Toilet</option>
                  <option>Handwashing Station</option>
                  <option>Luxury Restroom Trailer</option>
                  <option>Multiple / Combo</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.8px] text-[#0031e2] mb-1.5">City</label>
                <input name="city" type="text" placeholder="e.g. Los Angeles" required className="w-full px-4 py-[13px] border-[1.5px] border-mist rounded-[10px] text-sm text-ink bg-snow transition-all focus:outline-none focus:border-[#0031e2] focus:ring-[3px] focus:ring-[#0031e2]/[0.08]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-[18px]">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.8px] text-[#0031e2] mb-1.5">Event Date</label>
                <input name="eventDate" type="date" required className="w-full px-4 py-[13px] border-[1.5px] border-mist rounded-[10px] text-sm text-ink bg-snow transition-all focus:outline-none focus:border-[#0031e2] focus:ring-[3px] focus:ring-[#0031e2]/[0.08]" />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.8px] text-[#0031e2] mb-1.5">Duration Needed</label>
                <select name="duration" className="calc-select w-full px-4 py-[13px] border-[1.5px] border-mist rounded-[10px] text-sm text-ink bg-snow cursor-pointer transition-all focus:outline-none focus:border-[#0031e2] focus:ring-[3px] focus:ring-[#0031e2]/[0.08]">
                  <option value="">Select duration</option>
                  <option>1 Day</option>
                  <option>Weekend (2-3 Days)</option>
                  <option>1 Week</option>
                  <option>2 Weeks</option>
                  <option>1 Month</option>
                  <option>Ongoing / Monthly</option>
                </select>
              </div>
            </div>

            <div className="mb-[18px]">
              <label className="block text-xs font-semibold uppercase tracking-[0.8px] text-[#0031e2] mb-1.5">Additional Details</label>
              <textarea name="details" placeholder="Tell us about your event, number of guests, special requirements..." className="w-full px-4 py-[13px] border-[1.5px] border-mist rounded-[10px] text-sm text-ink bg-snow transition-all resize-y min-h-[90px] focus:outline-none focus:border-[#0031e2] focus:ring-[3px] focus:ring-[#0031e2]/[0.08]" />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0031e2] text-white rounded-full font-semibold text-[15px] border-none cursor-pointer transition-all hover:-translate-y-0.5 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              style={{ boxShadow: '0 4px 16px rgba(0,49,226,0.25)' }}
            >
              {sending ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Quote Request
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-[3px]" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
