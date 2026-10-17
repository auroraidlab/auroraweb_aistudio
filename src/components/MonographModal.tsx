import { useEffect } from "react";
import { MONOGRAPH_DATA } from "../data/content";
import { ArchitecturalCanvas } from "./ArchitecturalCanvas";

interface MonographModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MonographModal({ isOpen, onClose }: MonographModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-stone-900/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#FBF9F5] text-stone-900 overflow-y-auto border border-stone-300 shadow-2xl p-6 sm:p-10 lg:p-14"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Row with Close */}
        <div className="flex items-center justify-between pb-6 border-b border-stone-200 mb-8">
          <div className="text-xs uppercase tracking-widest text-stone-500 font-mono">
            AURORA MONOGRAPH ARCHIVE · VOL. 01
          </div>
          <button
            onClick={onClose}
            className="text-xs uppercase tracking-widest text-stone-600 hover:text-stone-950 px-3 py-1 border border-stone-300 hover:border-stone-800 transition-colors cursor-pointer"
          >
            Close [ESC]
          </button>
        </div>

        {/* Project Header */}
        <div className="mb-10">
          <span className="text-xs tracking-widest uppercase text-stone-500 font-mono block mb-2">
            Case Study · {MONOGRAPH_DATA.year}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-stone-900 mb-3">
            {MONOGRAPH_DATA.title}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-editorial mb-6">
            {MONOGRAPH_DATA.subtitle}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-stone-200 text-xs font-mono text-stone-600">
            <div>
              <span className="block text-stone-400 text-[10px] uppercase">Location</span>
              {MONOGRAPH_DATA.location}
            </div>
            <div>
              <span className="block text-stone-400 text-[10px] uppercase">Typology</span>
              {MONOGRAPH_DATA.typology}
            </div>
            <div>
              <span className="block text-stone-400 text-[10px] uppercase">Role</span>
              {MONOGRAPH_DATA.role}
            </div>
            <div>
              <span className="block text-stone-400 text-[10px] uppercase">Year</span>
              {MONOGRAPH_DATA.year}
            </div>
          </div>
        </div>

        {/* Visual Dual Study */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div>
            <ArchitecturalCanvas
              type="bailey-space"
              className="aspect-[4/3] w-full"
              caption="7.2M AXIAL LIGHT SKETCH"
            />
            <p className="mt-2 text-xs text-stone-500 font-mono">
              Fig. 1 — Axial daylight alignment & reading niche
            </p>
          </div>
          <div>
            <ArchitecturalCanvas
              type="material-detail"
              className="aspect-[4/3] w-full"
              caption="8MM SHADOW RECESS DETAIL"
            />
            <p className="mt-2 text-xs text-stone-500 font-mono">
              Fig. 2 — Material interface: limestone, bronze, oak
            </p>
          </div>
        </div>

        {/* Narrative Analysis */}
        <div className="space-y-8 mb-12 text-stone-800 leading-relaxed font-normal">
          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-stone-900 mb-2 font-sans-clean">
              The Premise (공간의 과제)
            </h3>
            <p className="text-sm sm:text-base text-stone-700 font-editorial leading-loose">
              {MONOGRAPH_DATA.premise}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-stone-900 mb-2 font-sans-clean">
              The Order (이유 있는 설계)
            </h3>
            <p className="text-sm sm:text-base text-stone-700 font-editorial leading-loose">
              {MONOGRAPH_DATA.order}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase text-stone-900 mb-2 font-sans-clean">
              The Atmosphere (경험의 실체)
            </h3>
            <p className="text-sm sm:text-base text-stone-700 font-editorial leading-loose">
              {MONOGRAPH_DATA.atmosphere}
            </p>
          </div>
        </div>

        {/* 3 Core Principles */}
        <div className="border-t border-stone-200 pt-8 mb-12">
          <h3 className="text-xs font-mono uppercase tracking-widest text-stone-500 mb-6">
            Detailed Spatial Principles
          </h3>
          <div className="space-y-6">
            {MONOGRAPH_DATA.principles.map((principle) => (
              <div key={principle.index} className="flex gap-4 items-start">
                <span className="text-xs font-mono text-stone-400 pt-0.5">{principle.index}</span>
                <div>
                  <h4 className="text-sm font-medium text-stone-900 mb-1">{principle.name}</h4>
                  <p className="text-xs sm:text-sm text-stone-600 mb-1">{principle.description}</p>
                  <p className="text-xs text-stone-500 italic font-editorial">{principle.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Curatorial Notes */}
        <div className="bg-[#F3EFE9] border border-stone-300/80 p-6">
          <h4 className="text-xs uppercase tracking-widest font-mono text-stone-700 mb-3">
            Curatorial Field Notes
          </h4>
          <ul className="space-y-2 text-xs text-stone-600 font-editorial leading-relaxed list-disc list-inside">
            {MONOGRAPH_DATA.notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
