const units = [
  {
    name: '8–4 Stall Restroom Trailer',
    tag: 'Premium',
    tagColor: 'bg-amber-500',
    description: 'Self contained, outside wash station with running water.',
    features: ['Interior Lights', 'Paper Towels', 'Hand Soap', 'Toilet Paper', 'Seat Covers', 'A/C'],
  },
  {
    name: 'Deluxe 2 Stall Porta-Lisa',
    tag: 'Deluxe',
    tagColor: 'bg-[#0031e2]',
    description: 'Self contained, sinks with running water.',
    features: ['Interior Lights', 'Paper Towels', 'Hand Soap', 'Toilet Paper', 'Seat Covers', 'A/C'],
  },
  {
    name: '2 Stall VIP Solar Trailer',
    tag: 'VIP',
    tagColor: 'bg-emerald-500',
    image: '/Screenshot_2026-03-14_at_6.09.31_PM.png',
    description: 'Solar powered trailer — great for events. Self contained, sinks with running water.',
    features: ['Interior Lights', 'Paper Towels', 'Hand Soap', 'Toilet Paper', 'Seat Covers', 'A/C'],
  },
  {
    name: 'Flusher Portable Toilet',
    tag: 'Event Ready',
    tagColor: 'bg-sky-500',
    description: 'Basic flushing porta potty — great for your next event.',
    features: ['Foot Pump Toilet & Sink', 'Toilet Paper', 'Urinal', 'Seat Covers', 'Paper Towels', 'Hand Soap'],
  },
  {
    name: 'Standard Portable Toilet',
    tag: 'Standard',
    tagColor: 'bg-gray-500',
    description: 'Regular porta potty — a standard unit for any job site or event.',
    features: ['Non-Flushing', 'Separate Urinal', 'Toilet Paper', 'Seat Covers', 'Hand Sanitizer'],
  },
  {
    name: 'Double Sided Handwash Sinks',
    tag: 'Add-On',
    tagColor: 'bg-violet-500',
    description: 'Portable handwash sink — mobile sanitation, no hookups needed.',
    features: ['No Power Needed', 'No Water Hookup', 'Soap', 'Paper Towels'],
  },
];

export default function Fleet() {
  return (
    <section className="py-16 max-md:py-10 bg-white">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
        {/* Header */}
        <div className="text-center mb-10 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e6eaff] text-[#0026b0] rounded-full text-xs font-semibold tracking-[0.8px] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#0031e2] rounded-full" />
            Our Fleet
          </div>
          <h2 className="section-heading text-[clamp(32px,4.5vw,52px)] text-ink mb-3">
            Units Built for <span className="text-[#0031e2]">Every Need</span>
          </h2>
          <p className="text-[17px] text-slate leading-[1.7] max-w-[540px] mx-auto">
            From premium multi-stall trailers to standard portables — find the perfect fit for your project or event.
          </p>
        </div>

        {/* 6-column strip */}
        <div className="grid grid-cols-6 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-0 reveal rounded-2xl overflow-hidden border border-gray-100" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
          {units.map((unit, i) => (
            <div
              key={unit.name}
              className={`group relative flex flex-col p-4 hover:bg-[#f5f7ff] transition-colors duration-200 ${
                i < units.length - 1 ? 'border-r border-gray-100 max-lg:[&:nth-child(3)]:border-r-0 max-sm:[&:nth-child(2n)]:border-r-0' : ''
              } max-lg:[&:nth-child(n+4)]:border-t max-lg:border-gray-100 max-sm:[&:nth-child(n+3)]:border-t`}
            >
              {'image' in unit && unit.image && (
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-3 -mt-0.5">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <span className={`self-start px-2 py-0.5 ${unit.tagColor} text-white text-[10px] font-bold tracking-wider uppercase rounded-full mb-2.5`}>
                {unit.tag}
              </span>

              {/* Name */}
              <h3 className="font-fraunces text-[14px] font-semibold text-ink leading-snug mb-1.5">
                {unit.name}
              </h3>

              {/* Description */}
              <p className="text-[12px] text-slate leading-[1.5] mb-3">
                {unit.description}
              </p>

              {/* Features */}
              <div className="mt-auto pt-2.5 border-t border-gray-100/80">
                <div className="flex flex-wrap gap-1">
                  {unit.features.map((feat) => (
                    <span
                      key={feat}
                      className="text-[10px] font-medium text-charcoal bg-gray-50 group-hover:bg-white px-1.5 py-0.5 rounded transition-colors"
                    >
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
