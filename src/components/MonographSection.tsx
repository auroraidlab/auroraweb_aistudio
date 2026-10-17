import { MONOGRAPH_DATA } from "../data/content";
import { ArchitecturalCanvas } from "./ArchitecturalCanvas";

interface MonographSectionProps {
  onOpenModal: () => void;
}

export function MonographSection({ onOpenModal }: MonographSectionProps) {
  return (
    <section id="monograph" className="py-24 lg:py-32 border-t border-stone-200/80 bg-[#F7F4EE]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-stone-500 font-mono mb-3">
              <span>Section 02</span>
              <span aria-hidden="true">/</span>
              <span>Monograph Case Study</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-stone-900 tracking-tight">
              일상의 침묵을 설계하다
            </h2>
            <p className="text-sm sm:text-base text-stone-600 font-editorial mt-1">
              래미안 원베일리 커뮤니티 공간 · Raemian One Bailey
            </p>
          </div>

          <div className="text-xs text-stone-500 font-mono flex items-center gap-3">
            <span>SEOUL, BANPO</span>
            <span>·</span>
            <span>2023 COMPLETED</span>
          </div>
        </div>

        {/* Asymmetrical 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          {/* Left Column: Architectural Imagery */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative group cursor-pointer" onClick={onOpenModal}>
              <ArchitecturalCanvas
                type="bailey-space"
                className="aspect-[4/3] w-full"
                caption="AXIAL PERSPECTIVE & ACOUSTIC TIMBER"
              />
              <div className="mt-2.5 flex justify-between text-xs text-stone-500 font-mono">
                <span>PLATE 02 — RESIDENTIAL LOUNGE PAVILION</span>
                <span className="hover:text-stone-900 transition-colors">CLICK TO ENLARGE [↗]</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="cursor-pointer" onClick={onOpenModal}>
                <ArchitecturalCanvas
                  type="material-detail"
                  className="aspect-[4/3] w-full"
                  caption="8MM SHADOW GAP"
                />
                <span className="block mt-1 text-[11px] font-mono text-stone-500">
                  FIG. 2.1 — MATERIAL JOINT
                </span>
              </div>
              <div className="bg-[#EFEAE1] border border-stone-300/70 p-4 flex flex-col justify-between">
                <span className="text-[10px] font-mono uppercase text-stone-500">
                  Spatial Parameter
                </span>
                <p className="text-xs font-editorial text-stone-700 leading-relaxed">
                  "공간의 호흡은 두 재료가 만나는 음각 줄눈의 간격에서 결정됩니다."
                </p>
                <span className="text-[10px] font-mono text-stone-500">
                  AURORA ID LAB NOTE
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Analysis */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8">
            <div className="space-y-6">
              <div className="border-b border-stone-200/80 pb-6">
                <span className="text-xs uppercase tracking-widest text-stone-500 font-mono block mb-2">
                  01 / The Premise (공간의 과제)
                </span>
                <p className="text-sm sm:text-base text-stone-700 font-editorial leading-relaxed">
                  {MONOGRAPH_DATA.premise}
                </p>
              </div>

              <div className="border-b border-stone-200/80 pb-6">
                <span className="text-xs uppercase tracking-widest text-stone-500 font-mono block mb-2">
                  02 / The Order (이유 있는 설계)
                </span>
                <p className="text-sm sm:text-base text-stone-700 font-editorial leading-relaxed">
                  {MONOGRAPH_DATA.order}
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-stone-500 font-mono block mb-2">
                  03 / The Atmosphere (경험의 실체)
                </span>
                <p className="text-sm sm:text-base text-stone-700 font-editorial leading-relaxed">
                  {MONOGRAPH_DATA.atmosphere}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest text-stone-900 border border-stone-900 hover:bg-stone-900 hover:text-stone-50 transition-colors cursor-pointer"
              >
                Read Full Monograph Archive (심층 도록 열람)
              </button>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Strip (Adjacency Rigor) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-stone-300/80">
          {MONOGRAPH_DATA.metrics.map((metric, idx) => (
            <div key={idx} className="bg-[#FAF7F2] border border-stone-200/90 p-6">
              <span className="text-[11px] uppercase font-mono tracking-wider text-stone-500 block mb-1">
                {metric.label}
              </span>
              <div className="text-2xl sm:text-3xl font-display font-medium text-stone-900 mb-2 tabular-nums">
                {metric.value}
              </div>
              <p className="text-xs text-stone-600 font-editorial leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
