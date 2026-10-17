export function Footer() {
  return (
    <footer className="bg-[#1C1A17] text-[#EDE8DF] py-16 lg:py-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 pb-12 border-b border-stone-800/80">
          {/* Brand Colophon */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xl font-display font-medium text-stone-100 tracking-wide block">
              AURORA SENSE ORDER
            </span>
            <p className="text-xs font-mono tracking-widest uppercase text-stone-400">
              Aurora ID Lab Archive & Practice
            </p>
            <p className="text-xs text-stone-400 font-editorial leading-relaxed max-w-sm pt-2">
              우리는 보이지 않는 감각의 질서를 설계합니다.
              형태는 이유를 따르고, 감각은 고요한 질서를 이룹니다.
            </p>
          </div>

          {/* Practice Pillars Navigation */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-3">
              Practice
            </span>
            <ul className="space-y-2 text-xs font-editorial text-stone-400">
              <li>
                <a href="#monograph" className="hover:text-stone-100 transition-colors">
                  Raemian One Bailey Monograph
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-stone-100 transition-colors">
                  Spatial Consulting & Branding
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-stone-100 transition-colors">
                  Discourse & Lecture
                </a>
              </li>
              <li>
                <a href="#practice" className="hover:text-stone-100 transition-colors">
                  Writing & Curation
                </a>
              </li>
            </ul>
          </div>

          {/* Inquiries & Colophon */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 block mb-3">
              Atelier & Contact
            </span>
            <div className="text-xs font-mono text-stone-400 space-y-1.5">
              <p>Inquiries: hello@auroraidlab.com</p>
              <p>Seoul, Republic of Korea</p>
              <p className="text-stone-400 pt-2 font-editorial">
                "모든 디자인에는 마땅한 이유가 있어야 한다."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-400">
          <div>
            © {new Date().getFullYear()} AURORA ID LAB. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-6">
            <span>SENSE ORDER ARCHIVE</span>
            <span aria-hidden="true">·</span>
            <span>SEOUL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
