import { Check, ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Full-bleed hero image — pushed right to show the worker */}
      <div className="absolute inset-0">
        <img
          src="/Dbros_Hero2.jpg"
          alt="D Bros Portables worker cleaning a portable restroom on site"
          className="w-full h-full object-cover max-md:object-[center_20%] md:object-[10%_20%]"
        />
      </div>

      {/* Desktop: left-to-right white fade overlay */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background: `
            linear-gradient(to right, #ffffff 0%, #ffffff 38%, rgba(255,255,255,0.9) 44%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.55) 56%, rgba(255,255,255,0.35) 62%, rgba(255,255,255,0.15) 70%, rgba(255,255,255,0.05) 78%, transparent 88%),
            linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 15%, transparent 85%, rgba(255,255,255,0.2) 100%)
          `,
        }}
      />

      {/* Mobile: full-cover gradient so image fills background but text stays readable */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background: `
            linear-gradient(to bottom, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.82) 35%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.2) 80%, transparent 100%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative max-w-[1240px] mx-auto px-8 w-full pt-36 pb-20 md:py-20">
        <div className="max-w-[560px]">
          <div className="flex flex-wrap gap-2.5 mb-7 animate-fade-in">
            <div className="inline-flex items-center gap-1.5 md:gap-2 py-1.5 md:py-[7px] pl-2 md:pl-2.5 pr-3 md:pr-4 bg-white/90 backdrop-blur-sm border border-mist rounded-full text-[11px] md:text-[13px] font-medium text-charcoal"
              style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}
            >
              <div className="w-5 h-5 md:w-6 md:h-6 bg-[#0031e2] rounded-full flex items-center justify-center shrink-0">
                <Check size={10} className="text-white md:hidden" />
                <Check size={12} className="text-white hidden md:block" />
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

          {/* Trust badges — inline beneath the description */}
          <div className="flex gap-4 mb-10 animate-fade-up-2 flex-wrap">
            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              <span className="relative flex items-center justify-center w-7 h-7 bg-green-50 rounded-lg">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="absolute w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
              </span>
              <span className="text-[13px] font-semibold text-charcoal">Available for Booking</span>
            </div>

            <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
            >
              <span className="flex items-center justify-center w-7 h-7 bg-[#e6eaff] rounded-lg">
                <Check size={14} className="text-[#0031e2]" />
              </span>
              <span className="text-[13px] font-semibold text-charcoal">Every Unit Sanitized &amp; Certified</span>
            </div>
          </div>

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
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-white/90 backdrop-blur-sm text-ink border-[1.5px] border-mist rounded-full font-semibold text-[15px] no-underline transition-all hover:border-[#b3beff] hover:bg-[#e6eaff] hover:text-[#0026b0]"
            >
              <Phone size={16} />
              323-371-6675
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
