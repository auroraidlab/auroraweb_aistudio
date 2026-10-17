import { useState } from "react";
import { DISCOURSE_ARTICLES, DiscourseArticle } from "../data/content";
import { ArchitecturalCanvas } from "./ArchitecturalCanvas";

interface DiscourseSectionProps {
  onSelectArticle: (article: DiscourseArticle) => void;
}

export function DiscourseSection({ onSelectArticle }: DiscourseSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    { key: "ALL", label: "All Discourse (전체)" },
    { key: "Flânerie", label: "Flânerie (산책자의 기록)" },
    { key: "Spatial Critique", label: "Spatial Critique (공간 비평)" },
    { key: "Nordic Essence", label: "Nordic Essence (북유럽 디자인)" }
  ];

  const filteredArticles =
    selectedCategory === "ALL"
      ? DISCOURSE_ARTICLES
      : DISCOURSE_ARTICLES.filter((item) => item.category === selectedCategory);

  return (
    <section id="discourse" className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-stone-500 font-mono mb-3">
            <span>Section 03</span>
            <span aria-hidden="true">/</span>
            <span>Spatial Discourse</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-stone-900 tracking-tight">
            사유의 기록
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-editorial mt-1">
            산책자와 비평가의 시선으로 응시한 공간과 도시
          </p>
        </div>

        {/* Interactive Filter Control (Segmented buttons - allowed for functional filters) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-200/60 rounded-none border border-stone-300">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-1.5 text-xs font-mono transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat.key
                  ? "bg-[#FBF9F5] text-stone-900 font-medium shadow-xs"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Canvas Accent */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
        <div className="relative group cursor-pointer" onClick={() => onSelectArticle(DISCOURSE_ARTICLES[0])}>
          <ArchitecturalCanvas
            type="silence-light"
            className="aspect-[16/9] w-full"
            caption="THE PHENOMENOLOGY OF VOID & LIGHT"
          />
          <div className="mt-2 flex justify-between text-xs text-stone-500 font-mono">
            <span>FIGURE 3.1 — APERTURE & SHADOW STUDY</span>
            <span className="hover:text-stone-900 transition-colors">READ ESSAY [↗]</span>
          </div>
        </div>

        <div className="relative group cursor-pointer" onClick={() => onSelectArticle(DISCOURSE_ARTICLES[1])}>
          <ArchitecturalCanvas
            type="urban-flanerie"
            className="aspect-[16/9] w-full"
            caption="PEDESTRIAN THRESHOLD & TWILIGHT REFLECTION"
          />
          <div className="mt-2 flex justify-between text-xs text-stone-500 font-mono">
            <span>FIGURE 3.2 — URBAN FLÂNERIE RECORD</span>
            <span className="hover:text-stone-900 transition-colors">READ ESSAY [↗]</span>
          </div>
        </div>
      </div>

      {/* Article List Grid (Pure Unboxed Metadata Discipline) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            onClick={() => onSelectArticle(article)}
            className="group flex flex-col justify-between bg-[#F8F5EF] border border-stone-200/80 p-8 hover:border-stone-400 transition-colors duration-200 cursor-pointer"
          >
            <div>
              {/* Unboxed Metadata Line with typographic separators */}
              <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-4">
                <span>{article.category}</span>
                <span aria-hidden="true">·</span>
                <span>{article.date}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>

              <h3 className="text-xl font-display font-medium text-stone-900 group-hover:text-stone-700 transition-colors mb-2 leading-snug">
                {article.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-stone-500 font-editorial mb-4">
                {article.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-stone-600 font-editorial leading-relaxed line-clamp-3 mb-6">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200/60 flex items-center justify-between text-xs font-mono text-stone-700 group-hover:text-stone-950">
              <span>READ FULL ESSAY</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
