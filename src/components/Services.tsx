import { Check } from 'lucide-react';

const services = [
  {
    name: 'Portable Toilets',
    image: '/Screenshot_2026-02-19_at_6.32.32_AM.png',
    desc: 'Choose from standard restrooms, restrooms with sinks inside, or flusher units that conceal the waste portion of the restroom.',
    features: [
      'Fresh-water flush system',
      'Ventilation system',
      'Weekly servicing included',
    ],
    tag: null,
  },
  {
    name: 'Handwashing Sinks',
    image: '/Screenshot_2026-02-19_at_6.32.48_AM.png',
    desc: 'Free-standing stations with soap, towels, and foot-pump operation for code compliance.',
    features: [
      'Foot-pump or hands-free',
      'Fresh water tank',
      'Soap & towel dispensers',
      'ADA-compliant options',
    ],
    tag: 'Popular',
  },
  {
    name: 'Luxury Trailers',
    image: '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_1630.jpg',
    desc: 'Climate-controlled restroom trailers with flushing toilets, mirrors, and lighting. The VIP experience.',
    features: [
      'Climate controlled',
      'Porcelain flush toilets',
      'Vanity mirrors & lighting',
      'Perfect for weddings',
    ],
    tag: 'Premium',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-[100px] max-md:py-[72px] bg-snow">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
        <div className="text-center mb-[60px] reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e6eaff] text-[#0026b0] rounded-full text-xs font-semibold tracking-[0.8px] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#0031e2] rounded-full" />
            What We Offer
          </div>
          <h2 className="section-heading text-[clamp(32px,4.5vw,52px)] text-ink mb-4">
            Rentals for <span className="text-[#0031e2]">Every Occasion</span>
          </h2>
          <p className="text-[17px] text-slate leading-[1.7] max-w-[520px] mx-auto">
            From standard units to luxury trailers — we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.name}
              className="service-card-bar bg-white rounded-2xl p-0 relative transition-all duration-300 overflow-hidden hover:-translate-y-1 reveal"
              style={{
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.06)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {service.tag && (
                <span className="absolute top-4 right-4 z-10 text-[10px] font-bold uppercase tracking-[0.8px] text-[#0031e2] bg-[#e6eaff] px-2.5 py-1 rounded-full">
                  {service.tag}
                </span>
              )}

              <div className="w-full h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-7 pt-5">
                <div className="font-fraunces text-xl font-semibold mb-2">{service.name}</div>
                <div className="text-sm text-slate leading-[1.65] mb-5">{service.desc}</div>
                <ul className="flex flex-col gap-2">
                  {service.features.map((feat) => (
                    <li key={feat} className="text-[13px] text-charcoal flex items-center gap-2 font-medium">
                      <Check size={14} className="text-[#0031e2] shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
