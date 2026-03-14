export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 pt-[60px] pb-8">
      <div className="max-w-[1240px] mx-auto px-8 max-md:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12">
          <div>
            <img src="/dbros_new_logo.png" alt="D Bros Portables" className="h-16 w-auto mb-3 brightness-0 invert" />
            <div className="text-sm leading-[1.7] max-w-[280px]">
              Premium portable sanitation solutions for the greater Los Angeles area, Orange County, and Inland Empire. Family-owned, customer-first.
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[1px] text-white mb-4">Services</div>
            <ul className="list-none">
              <li className="mb-2.5"><a href="#services" className="text-white/60 no-underline text-sm hover:text-[#b3beff] transition-colors">Portable Toilets</a></li>
              <li className="mb-2.5"><a href="#services" className="text-white/60 no-underline text-sm hover:text-[#b3beff] transition-colors">Handwashing Sinks</a></li>
              <li className="mb-2.5"><a href="#services" className="text-white/60 no-underline text-sm hover:text-[#b3beff] transition-colors">Luxury Trailers</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[1px] text-white mb-4">Regions</div>
            <ul className="list-none">
              <li className="mb-2.5 text-white/60 text-sm">Los Angeles County</li>
              <li className="mb-2.5 text-white/60 text-sm">Orange County</li>
              <li className="mb-2.5 text-white/60 text-sm">Inland Empire</li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[1px] text-white mb-4">Contact</div>
            <ul className="list-none">
              <li className="mb-2.5 text-white/60 text-sm">323-371-6675</li>
              <li className="mb-2.5"><a href="mailto:dbrosportables@gmail.com" className="text-white/60 no-underline text-sm hover:text-[#b3beff] transition-colors">dbrosportables@gmail.com</a></li>
              <li className="mb-2.5 text-white/60 text-sm">Southern California</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.08] pt-6 flex justify-between items-center text-xs text-white/40 max-md:flex-col max-md:gap-2 max-md:text-center">
          <span>&copy; 2026 D Bros Portables. All rights reserved.</span>
          <span>Family Owned &amp; Operated</span>
        </div>
      </div>
    </footer>
  );
}
