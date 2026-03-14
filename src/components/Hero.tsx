import { Check, ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(180deg, rgba(230,234,255,0.5) 0%, rgba(255,255,255,0) 50%),
            radial-gradient(ellipse 70% 50% at 75% 20%, rgba(179,190,255,0.3) 0%, transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%, rgba(230,234,255,0.2) 0%, transparent 60%)
          `,
        }}
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full animate-float-slow"
          style={{
            width: 400, height: 400, top: -100, right: -80,
            background: 'linear-gradient(135deg, rgba(0,49,226,0.06), rgba(0,49,226,0.03))',
            border: '1px solid rgba(0,49,226,0.06)',
          }}
        />
        <div
          className="absolute rounded-full animate-float-slow-reverse"
          style={{
            width: 250, height: 250, bottom: '10%', left: -60,
            background: 'linear-gradient(135deg, rgba(0,49,226,0.06), rgba(0,49,226,0.03))',
            border: '1px solid rgba(0,49,226,0.06)',
          }}
        />
        <div
          className="absolute rounded-full animate-float-slow-delayed"
          style={{
            width: 150, height: 150, top: '30%', right: '15%',
            background: 'linear-gradient(135deg, rgba(0,49,226,0.06), rgba(0,49,226,0.03))',
            border: '1px solid rgba(0,49,226,0.06)',
          }}
        />
      </div>

      <div className="relative max-w-[1240px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center w-full">
        <div className="z-[2]">
          <div className="flex flex-wrap gap-2.5 mb-7 animate-fade-in">
            <div className="inline-flex items-center gap-2 py-[7px] pl-2.5 pr-4 bg-white border border-mist rounded-full text-[13px] font-medium text-charcoal"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
            >
              <div className="w-6 h-6 bg-[#0031e2] rounded-full flex items-center justify-center">
                <Check size={12} className="text-white" />
              </div>
              Family Owned &amp; Operated — Serving All of SoCal
            </div>
          </div>

          <h1 className="font-fraunces text-[clamp(40px,5.5vw,64px)] font-bold leading-[1.08] text-ink mb-6 animate-fade-up-1">
            Clean, Reliable<br />
            <span className="text-[#0031e2]">
              Portable<br />Restrooms
            </span>
          </h1>

          <p className="text-lg text-slate leading-[1.7] mb-10 max-w-[460px] font-normal animate-fade-up-2">
            Premium portable toilet, sink, and luxury trailer rentals for events, construction sites, and more across Los Angeles, Orange County, and the Inland Empire.
          </p>

          <div className="flex gap-3.5 items-center flex-wrap animate-fade-up-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0031e2] text-white rounded-full font-semibold text-[15px] no-underline transition-all hover:-translate-y-0.5 group"
              style={{ boxShadow: '0 4px 16px rgba(0,49,226,0.25)' }}
            >
              Get a Free Quote
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-[3px]" />
            </a>
            <a
              href="tel:3233716675"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-white text-ink border-[1.5px] border-mist rounded-full font-semibold text-[15px] no-underline transition-all hover:border-[#b3beff] hover:bg-[#e6eaff] hover:text-[#0026b0]"
            >
              <Phone size={16} />
              323-371-6675
            </a>
          </div>
        </div>

        <div className="relative hidden lg:flex items-center justify-center animate-fade-in-hero">
          <div className="relative w-full max-w-[520px]">
            <div
              className="absolute rounded-full -z-10"
              style={{
                width: 380, height: 380, top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, rgba(0,49,226,0.1) 0%, transparent 70%)',
              }}
            />

            <div
              className="absolute -top-3 -right-3 z-[3] flex items-center gap-2.5 px-[22px] py-3 bg-white rounded-full animate-float-badge"
              style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 24px rgba(0,0,0,0.07)' }}
            >
              <span className="relative w-2.5 h-2.5 bg-green-500 rounded-full">
                <span className="absolute -inset-[3px] rounded-full border-2 border-green-500/20 animate-ring-pulse" />
              </span>
              <span className="text-[13px] font-semibold text-charcoal">Available for Booking</span>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <img
                src="/Dbros_Image.png"
                alt="D Bros Portables worker cleaning a portable restroom on site"
                className="w-full h-[480px] object-cover"
              />
            </div>

            <div
              className="absolute -bottom-4 -left-4 z-[3] flex items-center gap-3 px-5 py-3 bg-white rounded-2xl"
              style={{ border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 8px 24px rgba(0,0,0,0.07)' }}
            >
              <div className="w-10 h-10 bg-[#e6eaff] rounded-xl flex items-center justify-center">
                <Check size={18} className="text-[#0031e2]" />
              </div>
              <div>
                <div className="text-xs text-slate font-medium">Every Unit</div>
                <div className="text-sm font-semibold text-ink">Sanitized &amp; Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
