import { ArchitecturalCanvas } from "./ArchitecturalCanvas";

interface HeroSectionProps {
  onExploreMonograph: () => void;
}

export function HeroSection({ onExploreMonograph }: HeroSectionProps) {
  return (
    <section id="philosophy" className="pt-36 pb-24 lg:pt-44 lg:pb-32 px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Editorial Header Kicker */}
      <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-stone-500 mb-8 font-sans-clean">
        <span>Aurora ID Lab</span>
        <span aria-hidden="true" className="text-stone-400">·</span>
        <span>Spatial Monograph</span>
        <span aria-hidden="true" className="text-stone-400">·</span>
        <span>Archive & Practice</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Typographic Declaration */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500 font-mono mb-4">
              Form Follows Reason, Senses Build Order.
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-stone-900 leading-[1.28] tracking-tight mb-8 text-balance">
              우리는 눈에 보이지 않는<br />
              감각의 질서를 설계합니다.
            </h1>

            <div className="h-[1px] w-20 bg-stone-300 mb-8" />

            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-editorial max-w-xl mb-6">
              머무는 이의 숨결, 빛의 궤적, 찰나의 침묵까지—<br />
              공간에 놓인 모든 것에는 마땅한 이유가 있어야 하기에.
            </p>

            <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mb-10 font-normal">
              오로라아이디랩은 시각적 과시나 유행하는 마감재를 덧칠하지 않습니다.
              사람의 감각이 공간의 물성과 조우할 때 일어나는 미세한 신경계의 안정을 관찰하고,
              빛과 그림자, 음향의 잔향, 시선의 각도를 엄밀하게 계산하여 일상의 고요를 구축합니다.
            </p>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-stone-200">
            <button
              onClick={onExploreMonograph}
              className="px-6 py-3 text-xs uppercase tracking-widest text-stone-50 bg-stone-900 hover:bg-stone-800 transition-colors cursor-pointer"
            >
              Explore Monograph
            </button>
            <a
              href="#discourse"
              className="text-xs uppercase tracking-widest text-stone-700 hover:text-stone-950 transition-colors py-2"
            >
              Read Discourse →
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Visual Study Plate */}
        <div className="lg:col-span-5">
          <div className="relative group">
            <ArchitecturalCanvas
              type="hero-light"
              className="aspect-[4/3] w-full shadow-xs"
              caption="LIGHT BEAM ANGLE 34° / LIMESTONE GRAIN"
            />
            <div className="mt-3 flex justify-between items-baseline text-xs text-stone-500 font-mono">
              <span>PLATE 01. STUDY OF STILLNESS</span>
              <span>NATURAL LIGHT & SHADOW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
