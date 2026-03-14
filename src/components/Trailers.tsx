import { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

const trailerOptions = [
  {
    name: 'Deluxe 2-Stall Restroom Trailer',
    tag: 'Deluxe',
    accent: 'bg-[#0031e2]',
    images: [
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_1630.jpg',
      '/1000002734.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_1641.jpg',
    ],
  },
  {
    name: '2-Stall VIP Solar',
    tag: 'VIP Solar',
    accent: 'from-amber-500 to-amber-600',
    images: [
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_2015.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_1630.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_1641.jpg',
    ],
  },
  {
    name: 'Standard Portable Restrooms',
    tag: 'Standard',
    accent: 'from-slate-500 to-slate-600',
    images: [
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_1270.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_2134.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_7783.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_7786.jpg',
      '/874ff527-9cdf-4fd4-8daf-68f941f942b7-1_all_7846.jpg',
    ],
  },
];

const tagColors: Record<string, { bg: string; text: string; dot: string }> = {
  Deluxe: { bg: 'bg-[#e6eaff]', text: 'text-[#0031e2]', dot: 'bg-[#0031e2]' },
  'VIP Solar': { bg: 'bg-amber-50', text: 'text-amber-700', dot: 'bg-amber-500' },
  Standard: { bg: 'bg-slate-100', text: 'text-slate-600', dot: 'bg-slate-400' },
};

function LazyImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 transition-opacity duration-500 ${
          loaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`${className} transition-all duration-500 ${
          loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
        }`}
      />
    </div>
  );
}

function Lightbox({
  images,
  index,
  title,
  onClose,
}: {
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(index);
  const [imgLoaded, setImgLoaded] = useState(false);

  const prev = useCallback(
    () => {
      setImgLoaded(false);
      setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    },
    [images.length]
  );
  const next = useCallback(
    () => {
      setImgLoaded(false);
      setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
    },
    [images.length]
  );

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
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center animate-[fadeIn_0.2s_ease]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-all duration-200 backdrop-blur-sm group"
        aria-label="Close"
      >
        <X size={18} className="text-white group-hover:scale-110 transition-transform" />
      </button>

      <div
        className="relative z-10 flex flex-col items-center gap-5 w-full max-w-[92vw] max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-white/60 text-[13px] font-medium tracking-wider uppercase">
          {title} &mdash; {current + 1} of {images.length}
        </p>

        <div className="relative flex items-center gap-4 w-full justify-center">
          {images.length > 1 && (
            <button
              onClick={prev}
              className="shrink-0 w-11 h-11 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all duration-200"
              aria-label="Previous"
            >
              <ChevronLeft size={20} className="text-white/80" />
            </button>
          )}

          <div className="relative">
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                imgLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
            >
              <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
            </div>
            <img
              src={images[current]}
              alt={`${title} - ${current + 1}`}
              onLoad={() => setImgLoaded(true)}
              className={`max-h-[72vh] max-w-[72vw] object-contain rounded-2xl transition-all duration-400 ${
                imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97]'
              }`}
              style={{ boxShadow: '0 0 80px rgba(0,0,0,0.4)' }}
            />
          </div>

          {images.length > 1 && (
            <button
              onClick={next}
              className="shrink-0 w-11 h-11 rounded-full bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-all duration-200"
              aria-label="Next"
            >
              <ChevronRight size={20} className="text-white/80" />
            </button>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex gap-2">
            {images.map((img, i) => (
              <button
                key={img + i}
                onClick={() => { setImgLoaded(false); setCurrent(i); }}
                className={`w-14 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                  i === current
                    ? 'ring-2 ring-white ring-offset-2 ring-offset-black/90 scale-105'
                    : 'opacity-40 hover:opacity-70 grayscale hover:grayscale-0'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Trailers() {
  const [lightbox, setLightbox] = useState<{
    trailerIdx: number;
    imgIdx: number;
  } | null>(null);

  return (
    <>
      <section id="trailers" className="py-20 max-md:py-14 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
          <div className="text-center mb-12 reveal">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e6eaff] text-[#0026b0] rounded-full text-xs font-semibold tracking-[0.8px] uppercase mb-4">
              <span className="w-1.5 h-1.5 bg-[#0031e2] rounded-full" />
              Our Fleet
            </div>
            <h2 className="section-heading text-[clamp(28px,4vw,44px)] text-ink mb-3">
              Rentals for <span className="text-[#0031e2]">Every Occasion</span>
            </h2>
            <p className="text-[15px] text-slate-500 leading-[1.6] max-w-[440px] mx-auto">
              From luxury trailers to reliable portables -- click any photo to see it up close.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {trailerOptions.map((trailer, tIdx) => {
              const colors = tagColors[trailer.tag];
              return (
                <div
                  key={trailer.name}
                  className="reveal group/strip rounded-2xl bg-white border border-gray-100/80 overflow-hidden transition-shadow duration-300 hover:shadow-lg"
                  style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.04)' }}
                >
                  <div className="flex items-center gap-3 px-5 pt-4 pb-3 max-md:px-4">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-[10px] font-bold uppercase tracking-[0.8px]`}>
                      <span className={`w-1.5 h-1.5 ${colors.dot} rounded-full`} />
                      {trailer.tag}
                    </span>
                    <h3 className="font-fraunces text-[17px] font-semibold text-gray-800">
                      {trailer.name}
                    </h3>
                    <span className="ml-auto text-[12px] text-gray-400 font-medium max-md:hidden">
                      {trailer.images.length} photos
                    </span>
                  </div>

                  <div className="px-5 pb-4 max-md:px-4 max-md:pb-3">
                    <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-hide">
                      {trailer.images.map((img, iIdx) => (
                        <button
                          key={img + iIdx}
                          onClick={() => setLightbox({ trailerIdx: tIdx, imgIdx: iIdx })}
                          className="shrink-0 relative group/thumb rounded-xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0031e2] focus-visible:ring-offset-2"
                        >
                          <div className="w-[220px] h-[148px] max-md:w-[170px] max-md:h-[115px]">
                            <LazyImage
                              src={img}
                              alt={`${trailer.name} - view ${iIdx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover/thumb:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <span className="w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/thumb:opacity-100 transition-all duration-300 scale-75 group-hover/thumb:scale-100 shadow-lg">
                              <ZoomIn size={15} className="text-gray-700" />
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {lightbox && (
        <Lightbox
          images={trailerOptions[lightbox.trailerIdx].images}
          index={lightbox.imgIdx}
          title={trailerOptions[lightbox.trailerIdx].name}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
