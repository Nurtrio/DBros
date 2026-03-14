import { useState, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Calculator() {
  const [guests, setGuests] = useState(100);
  const [duration, setDuration] = useState(8);
  const [alcohol, setAlcohol] = useState(false);

  const calcUnits = useCallback(() => {
    let u = Math.ceil(guests / 50);
    if (duration > 4) u = Math.ceil(u * 1.25);
    if (duration > 8) u = Math.ceil(u * 1.5);
    if (duration > 12) u = Math.ceil(u * 1.75);
    if (alcohol) u = Math.ceil(u * 1.2);
    return Math.max(1, u);
  }, [guests, duration, alcohol]);

  return (
    <section className="py-[100px] max-md:py-[72px] bg-snow" id="calculator">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
        <div
          className="bg-white rounded-3xl p-14 max-md:p-6 max-w-[960px] mx-auto reveal"
          style={{
            border: '1px solid rgba(0,0,0,0.06)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.04)',
          }}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e6eaff] text-[#0026b0] rounded-full text-xs font-semibold tracking-[0.8px] uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-[#0031e2] rounded-full" />
              Estimator
            </div>
            <h2 className="section-heading text-[clamp(32px,4.5vw,52px)] text-ink">
              How Many <span className="text-[#0031e2]">Do You Need?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-md:gap-8 items-start">
            <div className="flex flex-col gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.8px] text-[#0031e2] mb-2">
                  Expected Guests
                </label>
                <input
                  type="number"
                  value={guests}
                  min={1}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 0)}
                  className="w-full px-[18px] py-3.5 border-[1.5px] border-mist rounded-[10px] text-[15px] text-ink bg-snow transition-colors focus:outline-none focus:border-[#0031e2] focus:ring-[3px] focus:ring-[#0031e2]/10"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.8px] text-[#0031e2] mb-2">
                  Event Duration
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(parseInt(e.target.value))}
                  className="calc-select w-full px-[18px] py-3.5 border-[1.5px] border-mist rounded-[10px] text-[15px] text-ink bg-snow cursor-pointer transition-colors focus:outline-none focus:border-[#0031e2] focus:ring-[3px] focus:ring-[#0031e2]/10"
                >
                  <option value={4}>Up to 4 hours</option>
                  <option value={8}>4 - 8 hours</option>
                  <option value={12}>8 - 12 hours</option>
                  <option value={24}>Full day (12+ hours)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-[0.8px] text-[#0031e2] mb-2">
                  Alcohol Served?
                </label>
                <select
                  value={alcohol ? 'yes' : 'no'}
                  onChange={(e) => setAlcohol(e.target.value === 'yes')}
                  className="calc-select w-full px-[18px] py-3.5 border-[1.5px] border-mist rounded-[10px] text-[15px] text-ink bg-snow cursor-pointer transition-colors focus:outline-none focus:border-[#0031e2] focus:ring-[3px] focus:ring-[#0031e2]/10"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0031e2] text-white rounded-full font-semibold text-[15px] no-underline transition-all hover:-translate-y-0.5 mt-2 group"
                style={{ boxShadow: '0 4px 16px rgba(0,49,226,0.25)' }}
              >
                Get Exact Quote
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-[3px]" />
              </a>
            </div>

            <div className="bg-[#e6eaff] rounded-[20px] p-10 text-center flex flex-col items-center justify-center min-h-[280px]">
              <div className="font-fraunces text-[80px] font-bold text-[#0031e2] leading-none">
                {calcUnits()}
              </div>
              <div className="text-sm font-semibold text-charcoal uppercase tracking-[0.8px] mt-2 mb-4">
                Recommended Units
              </div>
              <div className="text-[13px] text-slate leading-[1.6] max-w-[260px]">
                Industry-standard estimate. Our team will confirm the exact count for your setup.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
