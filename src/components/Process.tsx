const steps = [
  {
    num: 1,
    title: 'Tell Us Your Needs',
    desc: 'Call or fill out our form with your event type, city, date, and how long you need the restrooms.',
  },
  {
    num: 2,
    title: 'Get Your Quote',
    desc: 'Receive a transparent quote within the hour. No hidden fees, no surprises.',
  },
  {
    num: 3,
    title: 'We Deliver & Setup',
    desc: 'Our crew delivers, positions, and sanitizes every unit on your schedule.',
  },
  {
    num: 4,
    title: 'We Handle Pickup',
    desc: 'After your event, we take care of everything — removal, cleaning, disposal.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-[100px] max-md:py-[72px] bg-white">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e6eaff] text-[#0026b0] rounded-full text-xs font-semibold tracking-[0.8px] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#0031e2] rounded-full" />
            Process
          </div>
          <h2 className="section-heading text-[clamp(32px,4.5vw,52px)] text-ink mb-4">
            Renting is <span className="text-[#0031e2]">Effortless</span>
          </h2>
          <p className="text-[17px] text-slate leading-[1.7] max-w-[520px] mx-auto">
            Four simple steps from booking to a spotless setup at your location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="text-center relative px-3 reveal group">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#b3beff] flex items-center justify-center mx-auto mb-5 font-fraunces text-2xl font-bold text-[#0031e2] transition-all group-hover:bg-[#0031e2] group-hover:text-white group-hover:border-transparent group-hover:scale-[1.08]"
                style={{ boxShadow: 'none' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,49,226,0.25)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {step.num}
              </div>
              <div className="font-fraunces text-lg font-semibold mb-2">{step.title}</div>
              <div className="text-[13px] text-slate leading-[1.6]">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
