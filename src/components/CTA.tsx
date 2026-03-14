import { ArrowRight, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-[#0031e2] py-[100px] text-center relative overflow-hidden">
      <div
        className="absolute rounded-full"
        style={{ width: 500, height: 500, top: -200, right: -100, background: 'rgba(255,255,255,0.05)' }}
      />
      <div
        className="absolute rounded-full"
        style={{ width: 300, height: 300, bottom: -100, left: -50, background: 'rgba(255,255,255,0.04)' }}
      />

      <div className="max-w-[1240px] mx-auto px-8 relative">
        <h2 className="section-heading text-[clamp(32px,4.5vw,52px)] text-white mb-4 reveal">
          Ready for <span className="text-white/80">Spotless</span><br />Sanitation?
        </h2>
        <p className="text-[17px] text-white/80 leading-[1.7] max-w-[520px] mx-auto mb-10 reveal">
          Get a free, no-obligation quote in minutes. Family-owned service you can trust.
        </p>

        <div className="flex justify-center gap-3.5 flex-wrap reveal">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-white text-[#0031e2] rounded-full font-semibold text-[15px] no-underline transition-all hover:-translate-y-0.5 group"
            style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}
          >
            Get Your Free Quote
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-[3px]" />
          </a>
          <a
            href="tel:3233716675"
            className="inline-flex items-center gap-2.5 px-7 py-4 bg-white/[0.12] text-white border-[1.5px] border-white/25 rounded-full font-semibold text-[15px] no-underline transition-all hover:bg-white/20 hover:border-white/40"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        <div className="mt-8 reveal">
          <a href="tel:3233716675" className="font-fraunces text-[28px] font-semibold text-white no-underline opacity-90 hover:opacity-100 transition-opacity">
            323-371-6675
          </a>
        </div>
      </div>
    </section>
  );
}
