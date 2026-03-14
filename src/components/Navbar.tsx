import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] transition-all duration-300 ${
        scrolled ? 'nav-scrolled py-3' : 'py-[18px]'
      }`}
      style={{ background: scrolled ? undefined : 'rgba(255,255,255,0)' }}
    >
      <div className="max-w-[1240px] mx-auto px-8 flex items-center justify-between">
        <a href="#" className="no-underline shrink-0">
          <img src="/dbros_new_logo.png" alt="D Bros Portables" className="h-[90px] w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-8 list-none">
          <li><a href="#about" className="text-charcoal no-underline text-sm font-medium hover:text-[#0031e2] transition-colors">About</a></li>
          <li><a href="#services" className="text-charcoal no-underline text-sm font-medium hover:text-[#0031e2] transition-colors">Services</a></li>
          <li><a href="#areas" className="text-charcoal no-underline text-sm font-medium hover:text-[#0031e2] transition-colors">Service Areas</a></li>
          <li><a href="#process" className="text-charcoal no-underline text-sm font-medium hover:text-[#0031e2] transition-colors">How It Works</a></li>
          <li>
            <a href="tel:3233716675" className="flex items-center gap-2 text-[#0031e2] no-underline text-sm font-semibold">
              <Phone size={14} />
              323-371-6675
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-[#0031e2] text-white px-6 py-2.5 rounded-full font-semibold text-sm no-underline transition-all hover:-translate-y-0.5"
              style={{ boxShadow: '0 2px 12px rgba(0,49,226,0.25)' }}
            >
              Get a Quote
            </a>
          </li>
        </ul>

        <button
          className="flex lg:hidden flex-col gap-[5px] bg-transparent border-none p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-white/[0.97] backdrop-blur-xl flex flex-col items-center justify-center gap-6 z-[999] lg:hidden">
          <button
            className="absolute top-5 right-5 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-ink no-underline text-lg font-medium">About</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-ink no-underline text-lg font-medium">Services</a>
          <a href="#areas" onClick={() => setMenuOpen(false)} className="text-ink no-underline text-lg font-medium">Service Areas</a>
          <a href="#process" onClick={() => setMenuOpen(false)} className="text-ink no-underline text-lg font-medium">How It Works</a>
          <a href="tel:3233716675" className="flex items-center gap-2 text-[#0031e2] no-underline text-lg font-semibold">
            <Phone size={16} />
            323-371-6675
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#0031e2] text-white px-8 py-3 rounded-full font-semibold text-base no-underline"
          >
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
}
