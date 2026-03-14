import { Check, Zap, Heart, DollarSign } from 'lucide-react';

const values = [
  { icon: Check, label: 'Sanitized & Spotless Units' },
  { icon: Zap, label: 'Fast, Reliable Delivery' },
  { icon: Heart, label: 'Customer Satisfaction First' },
  { icon: DollarSign, label: 'Competitive, Honest Pricing' },
];

export default function About() {
  return (
    <section id="about" className="py-[100px] max-md:py-[72px] bg-white">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5 grid grid-cols-1 lg:grid-cols-2 gap-20 max-lg:gap-10 items-center">
        <div className="reveal">
          <div className="bg-[#e6eaff] rounded-[20px] p-12 relative overflow-hidden">
            <div
              className="absolute rounded-full"
              style={{
                top: '-50%', right: '-30%', width: 300, height: 300,
                background: 'radial-gradient(circle, rgba(0,49,226,0.08), transparent 70%)',
              }}
            />
            <span className="text-[64px] block mb-5 relative z-[1]">&#128104;&#8205;&#128102;&#8205;&#128102;</span>
            <div className="font-fraunces text-2xl font-semibold mb-1 relative z-[1]">Family Owned</div>
            <div className="text-sm text-slate leading-[1.6] relative z-[1]">Built on trust, driven by service.</div>
            <div className="flex flex-col gap-3 mt-5 relative z-[1]">
              {values.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3 px-4 bg-white rounded-[10px]" style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
                  <div className="w-8 h-8 bg-white/60 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-[#0031e2]" />
                  </div>
                  <span className="text-sm font-medium text-charcoal">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e6eaff] text-[#0026b0] rounded-full text-xs font-semibold tracking-[0.8px] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#0031e2] rounded-full" />
            About Us
          </div>
          <h2 className="section-heading text-[clamp(32px,4.5vw,52px)] text-ink mb-4">
            Our Goal at<br /><span className="text-[#0031e2]">D Bros Portables</span>
          </h2>
          <p className="text-[17px] text-slate leading-[1.7] max-w-[520px] mb-6">
            Our goal is to make every customer happy with great service, sanitized units, and top-tier cleaning. D Bros Portables is a family-owned business that delivers the highest quality portable restroom equipment with impeccable service.
          </p>
          <p className="text-[17px] text-slate leading-[1.7] max-w-[520px]">
            We make the best effort to give you the greatest experience with our cleanest and most advanced portable restroom facilities available. At the end of the day, there's only one thing we're after —
          </p>
          <div className="font-fraunces text-xl font-semibold text-[#0031e2] italic mt-6 pl-5 border-l-[3px] border-[#b3beff]">
            Your Complete Satisfaction.
          </div>
        </div>
      </div>
    </section>
  );
}
