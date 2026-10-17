import { useState, useEffect } from "react";

interface NavbarProps {
  onOpenDialogue: () => void;
}

export function Navbar({ onOpenDialogue }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled
          ? "bg-[#FBF9F5]/90 backdrop-blur-md border-b border-stone-200/80"
          : "bg-transparent border-b border-stone-200/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-lg lg:text-xl font-medium tracking-wide text-stone-900 whitespace-nowrap shrink-0 font-display"
        >
          AURORA SENSE ORDER
        </a>

        {/* Zone 2: 4 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-normal text-stone-600">
          <a
            href="#philosophy"
            className="hover:text-stone-900 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-stone-900 after:transition-all whitespace-nowrap shrink-0"
          >
            Philosophy
          </a>
          <a
            href="#monograph"
            className="hover:text-stone-900 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-stone-900 after:transition-all whitespace-nowrap shrink-0"
          >
            Monograph
          </a>
          <a
            href="#discourse"
            className="hover:text-stone-900 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-stone-900 after:transition-all whitespace-nowrap shrink-0"
          >
            Discourse
          </a>
          <a
            href="#practice"
            className="hover:text-stone-900 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1px] after:bg-stone-900 after:transition-all whitespace-nowrap shrink-0"
          >
            Practice
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenDialogue}
            className="px-5 py-2 text-xs uppercase tracking-widest text-stone-900 border border-stone-800 hover:bg-stone-900 hover:text-stone-50 transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Dialogue
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-stone-700 hover:text-stone-900 p-2"
            aria-label="Toggle Menu"
          >
            <span className="text-xs uppercase tracking-widest font-mono">
              {mobileMenuOpen ? "CLOSE" : "MENU"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF9F5] border-b border-stone-300 px-6 py-6 flex flex-col gap-4 text-sm font-medium text-stone-800">
          <a
            href="#philosophy"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-stone-200"
          >
            Philosophy (철학)
          </a>
          <a
            href="#monograph"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-stone-200"
          >
            Monograph (래미안 원베일리)
          </a>
          <a
            href="#discourse"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-stone-200"
          >
            Discourse (사유의 기록)
          </a>
          <a
            href="#practice"
            onClick={() => setMobileMenuOpen(false)}
            className="py-1 border-b border-stone-200"
          >
            Practice (실천과 협업)
          </a>
        </div>
      )}
    </header>
  );
}
