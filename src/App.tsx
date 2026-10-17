/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { MonographSection } from "./components/MonographSection";
import { MonographModal } from "./components/MonographModal";
import { DiscourseSection } from "./components/DiscourseSection";
import { DiscourseModal } from "./components/DiscourseModal";
import { PracticeSection } from "./components/PracticeSection";
import { Footer } from "./components/Footer";
import { DiscourseArticle } from "./data/content";

export default function App() {
  const [monographModalOpen, setMonographModalOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState<DiscourseArticle | null>(null);

  const handleOpenDialogue = () => {
    const practiceEl = document.getElementById("practice");
    if (practiceEl) {
      practiceEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreMonograph = () => {
    const monographEl = document.getElementById("monograph");
    if (monographEl) {
      monographEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#22201E] flex flex-col selection:bg-[#E5DFD5]">
      {/* Global Navigation Bar */}
      <Navbar onOpenDialogue={handleOpenDialogue} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero (침묵과 선언) */}
        <HeroSection onExploreMonograph={handleExploreMonograph} />

        {/* Section 2: Monograph (철학의 실체화: 래미안 원베일리) */}
        <MonographSection onOpenModal={() => setMonographModalOpen(true)} />

        {/* Section 3: Discourse (사유의 기록) */}
        <DiscourseSection onSelectArticle={(article) => setActiveArticle(article)} />

        {/* Section 4: Practice & Dialogue (협업 창구 및 문의) */}
        <PracticeSection />
      </main>

      {/* Footer & Colophon */}
      <Footer />

      {/* Deep-Read Modals */}
      <MonographModal
        isOpen={monographModalOpen}
        onClose={() => setMonographModalOpen(false)}
      />

      <DiscourseModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </div>
  );
}
