import { useState, useRef, useEffect } from 'react';
import { Check, X, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'portable',
    label: 'Portable Toilets',
    features: ['Fresh-water flush system', 'Ventilation system', 'Weekly servicing included'],
    images: [
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_1168.jpg',
      '/portable_lineup2.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_2134.jpg',
      '/portable_interior.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_7846.jpg',
      '/1000000274.jpg',
      '/1000003285.jpg',
      '/1000003287.jpg',
      '/1000003288.jpg',
      '/portable-toilet-interior.jpg',
      '/portable-toilet-interior2.jpg',
    ],
  },
  {
    id: 'luxury',
    label: 'Luxury Trailers',
    features: ['Climate controlled', 'Porcelain flush toilets', 'Vanity mirrors & lighting', 'Perfect for weddings'],
    images: [
      '/luxury_interior.jpg',
      '/1000002734.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_2193.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_1412.jpg',
      '/luxury_replace.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_1259.jpg',
      '/1000003302.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_1641.jpg',
    ],
  },
];

function Marquee({ images, label, onClickImage }: { images: string[]; label: string; onClickImage: (idx: number) => void }) {
  const stripRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const offsetRef = useRef(0);
  const rafRef = useRef<number>(0);

  // Triple the images for a seamless loop with no gaps
  const tripled = [...images, ...images, ...images];

  useEffect(() => {
    offsetRef.current = 0;
    const strip = stripRef.current;
    if (!strip) return;

    const speed = 0.5;

    const animate = () => {
      if (!pausedRef.current && strip) {
        offsetRef.current += speed;
        const singleWidth = strip.scrollWidth / 3;
        if (offsetRef.current >= singleWidth) {
          offsetRef.current -= singleWidth;
        }
        strip.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [images]);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div ref={stripRef} className="flex gap-3 will-change-transform" style={{ width: 'max-content' }}>
        {tripled.map((img, i) => (
          <button
            key={`${i}`}
            onClick={() => onClickImage(i % images.length)}
            className="shrink-0 rounded-xl overflow-hidden cursor-pointer group/img focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0031e2]"
          >
            <div className="h-[220px] max-md:h-[170px] relative">
              <img
                src={img}
                alt={`${label} - ${(i % images.length) + 1}`}
                className="h-full w-auto object-contain transition-transform duration-500 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300 rounded-xl" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function Lightbox({ images, index, label, onClose }: { images: string[]; index: number; label: string; onClose: () => void }) {
  const [current, setCurrent] = useState(index);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-all"
      >
        <X size={18} className="text-white" />
      </button>

      <div className="relative z-10 flex items-center gap-4 w-full justify-center" onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <button onClick={prev} className="shrink-0 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center">
            <ChevronLeft size={20} className="text-white/80" />
          </button>
        )}

        <div className="flex flex-col items-center gap-4">
          <p className="text-white/50 text-[13px] font-medium tracking-wider uppercase">
            {label} &mdash; {current + 1} of {images.length}
          </p>
          <img
            src={images[current]}
            alt={`${label} - ${current + 1}`}
            className="max-h-[75vh] max-w-[80vw] object-contain rounded-2xl"
            style={{ boxShadow: '0 0 80px rgba(0,0,0,0.4)' }}
          />
          {images.length > 1 && (
            <div className="flex gap-1.5">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`}
                />
              ))}
            </div>
          )}
        </div>

        {images.length > 1 && (
          <button onClick={next} className="shrink-0 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center">
            <ChevronRight size={20} className="text-white/80" />
          </button>
        )}
      </div>
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(0);
  const [displayed, setDisplayed] = useState(0);
  const [fading, setFading] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const cat = categories[displayed];

  const handleToggle = (i: number) => {
    if (i === active) return;
    setActive(i);
    setFading(true);
    setTimeout(() => {
      setDisplayed(i);
      setTimeout(() => setFading(false), 50);
    }, 300);
  };

  return (
    <>
      <section id="services" className="py-20 max-md:py-14 bg-snow">
        <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
          {/* Header */}
          <div className="text-center mb-10 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e6eaff] text-[#0026b0] rounded-full text-xs font-semibold tracking-[0.8px] uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-[#0031e2] rounded-full" />
              What We Offer
            </div>
            <h2 className="section-heading text-[clamp(32px,4.5vw,52px)] text-ink mb-3">
              Rentals for <span className="text-[#0031e2]">Every Occasion</span>
            </h2>
            <p className="text-[17px] text-slate leading-[1.7] max-w-[520px] mx-auto">
              From standard units to luxury trailers — we've got you covered.
            </p>
          </div>

          {/* Toggle tabs */}
          <div className="flex justify-center mb-6 reveal">
            <div className="inline-flex bg-white rounded-full p-1 border border-gray-100" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              {categories.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => handleToggle(i)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    active === i
                      ? 'bg-[#0031e2] text-white shadow-md'
                      : 'text-gray-500 hover:text-ink'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          {/* Specs — centered, with fade */}
          <div
            className="flex justify-center mb-8 reveal transition-all duration-300"
            style={{ opacity: fading ? 0 : 1, transform: fading ? 'translateY(6px)' : 'translateY(0)' }}
          >
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {cat.features.map((feat) => (
                <li key={feat} className="text-[13px] text-charcoal flex items-center gap-1.5 font-medium">
                  <Check size={13} className="text-[#0031e2] shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Marquee strip — full width, with fade */}
        <div
          className="reveal transition-all duration-300"
          style={{ opacity: fading ? 0 : 1, transform: fading ? 'translateY(8px)' : 'translateY(0)' }}
        >
          <Marquee
            images={cat.images}
            label={cat.label}
            onClickImage={(idx) => setLightbox(idx)}
          />
        </div>
      </section>

      {lightbox !== null && (
        <Lightbox
          images={cat.images}
          index={lightbox}
          label={cat.label}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
