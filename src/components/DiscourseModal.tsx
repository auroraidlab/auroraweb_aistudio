import { useEffect } from "react";
import { DiscourseArticle } from "../data/content";

interface DiscourseModalProps {
  article: DiscourseArticle | null;
  onClose: () => void;
}

export function DiscourseModal({ article, onClose }: DiscourseModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (article) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-stone-900/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#FBF9F5] text-stone-900 overflow-y-auto border border-stone-300 shadow-2xl p-6 sm:p-12 lg:p-16"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Minimal Action Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200 mb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 font-mono">
            <span>{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.categoryKr}</span>
          </div>
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-widest text-stone-600 hover:text-stone-950 px-3 py-1 border border-stone-300 hover:border-stone-800 transition-colors cursor-pointer"
          >
            Close [ESC]
          </button>
        </div>

        {/* Essay Heading */}
        <div className="mb-10 text-center max-w-xl mx-auto">
          <span className="text-xs font-mono text-stone-500 mb-2 block tracking-wider">
            {article.date} · {article.readTime}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-stone-900 mb-3 text-balance">
            {article.title}
          </h2>
          <p className="text-base text-stone-600 font-editorial italic">
            {article.subtitle}
          </p>
        </div>

        {/* Pull Quote Callout (No thick left border, wide elegant hairline framing) */}
        <div className="my-10 py-6 border-y border-stone-300/80 text-center max-w-xl mx-auto">
          <blockquote className="text-lg sm:text-xl font-display italic text-stone-800 leading-relaxed">
            "{article.keyQuote}"
          </blockquote>
          <span className="block mt-2 text-xs font-mono text-stone-500 uppercase tracking-widest">
            — AURORA SENSE ORDER NOTES
          </span>
        </div>

        {/* Essay Body with Drop-Cap on Opening */}
        <div className="max-w-2xl mx-auto space-y-6 text-stone-800 font-editorial text-base sm:text-lg leading-[1.85]">
          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-stone-900"
                  : ""
              }
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Colophon Note */}
        <div className="mt-14 pt-8 border-t border-stone-200 text-center">
          <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
            Written by Aurora ID Lab Research & Practice
          </p>
        </div>
      </div>
    </div>
  );
}
