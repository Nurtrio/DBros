import { useState, useCallback } from 'react';

const cities: Record<string, string[]> = {
  la: [
    'Los Angeles','Burbank','Hollywood','Beverly Hills','Culver City','Venice',
    'Marina Del Rey','El Segundo','Manhattan Beach','Redondo Beach','Torrance',
    'Carson','Pasadena','Altadena','Glendale','Alhambra','Sierra Madre',
    'Monrovia','Glendora','Santa Monica','Monterey Park','Long Beach',
    'Lakewood','Bellflower','Norwalk','Whittier','Gardena','San Pedro',
    'El Monte','Temple City','Pomona','Covina',
  ],
  ie: [
    'Riverside','Jurupa Valley','Rancho Cucamonga','Norco','Chino',
    'Corona','Mira Loma',
  ],
  oc: [
    'Orange','Santa Ana','Tustin','Costa Mesa','Newport Beach',
    'Huntington Beach','Fountain Valley','Westminster','Garden Grove',
    'Anaheim','Fullerton','Brea','Villa Park','La Habra','Placentia',
    'Yorba Linda','Anaheim Hills',
  ],
};

const tabs = [
  { key: 'all', label: 'All Areas' },
  { key: 'la', label: 'Los Angeles County' },
  { key: 'ie', label: 'Inland Empire' },
  { key: 'oc', label: 'Orange County' },
];

const regionLabels: Record<string, string> = {
  all: 'Southern California',
  la: 'Los Angeles County',
  ie: 'Inland Empire',
  oc: 'Orange County',
};

export default function ServiceAreas() {
  const [region, setRegion] = useState('all');

  const getCities = useCallback(() => {
    if (region === 'all') return [...cities.la, ...cities.ie, ...cities.oc];
    return cities[region] || [];
  }, [region]);

  const list = getCities();

  return (
    <section id="areas" className="py-[100px] max-md:py-[72px] bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #b3beff, transparent)' }} />

      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e6eaff] text-[#0026b0] rounded-full text-xs font-semibold tracking-[0.8px] uppercase mb-4">
            <span className="w-1.5 h-1.5 bg-[#0031e2] rounded-full" />
            Coverage
          </div>
          <h2 className="section-heading text-[clamp(32px,4.5vw,52px)] text-ink mb-4">
            We Service <span className="text-[#0031e2]">Your City</span>
          </h2>
          <p className="text-[17px] text-slate leading-[1.7] max-w-[520px] mx-auto">
            Covering all of Southern California — from LA to Orange County to the Inland Empire.
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-10 flex-wrap reveal">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setRegion(tab.key)}
              className={`px-6 py-2.5 rounded-full border-[1.5px] text-sm font-semibold cursor-pointer transition-all ${
                region === tab.key
                  ? 'bg-[#0031e2] text-white border-transparent'
                  : 'bg-white text-charcoal border-mist hover:border-[#b3beff] hover:bg-[#e6eaff] hover:text-[#0026b0]'
              }`}
              style={region === tab.key ? { boxShadow: '0 2px 12px rgba(0,49,226,0.25)' } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5 justify-center max-w-[900px] mx-auto min-h-[120px]">
          {list.map((city, i) => (
            <div
              key={`${region}-${city}`}
              className="chip-animate inline-flex items-center gap-1.5 px-[18px] py-2 bg-white border border-mist rounded-full text-[13px] font-medium text-charcoal cursor-default transition-all hover:bg-[#e6eaff] hover:border-[#b3beff] hover:text-[#0026b0] hover:-translate-y-0.5 whitespace-nowrap"
              style={{
                animationDelay: `${i * 25}ms`,
                boxShadow: 'none',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,49,226,0.1)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <span className="w-[5px] h-[5px] bg-[#0031e2] rounded-full" />
              {city}
            </div>
          ))}
        </div>

        <div className="text-center mt-10 text-[15px] text-slate reveal">
          Delivering to <strong className="text-[#0031e2] font-bold">{list.length}</strong> cities across {regionLabels[region]}
        </div>
      </div>
    </section>
  );
}
