import { useState } from "react";
import { PRACTICE_PILLARS } from "../data/content";

export function PracticeSection() {
  const [selectedPillar, setSelectedPillar] = useState<string>("spatial-consulting");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    category: "Spatial Consulting & Branding",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("성함과 연락처, 프로젝트의 이유를 입력해주세요.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="practice" className="py-24 lg:py-32 bg-[#F6F3EC] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-stone-500 font-mono mb-3">
            <span>Section 04</span>
            <span aria-hidden="true">/</span>
            <span>Practice & Dialogue</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-stone-900 tracking-tight mb-4">
            실천과 협업의 장
          </h2>
          <p className="text-sm sm:text-base text-stone-700 font-editorial leading-relaxed">
            오로라아이디랩은 공간의 이유를 함께 묻고 탐구할 파트너를 기다립니다.
            하이엔드 주거 및 웰니스 공간의 브랜딩, 공간 철학에 관한 강연과 담론,
            그리고 시선의 기록을 담는 에세이 집필까지 세 가지 영역에서 실천합니다.
          </p>
        </div>

        {/* 3 Practice Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {PRACTICE_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              onClick={() => {
                setSelectedPillar(pillar.id);
                setFormData((prev) => ({ ...prev, category: pillar.titleEn }));
              }}
              className={`p-8 border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                selectedPillar === pillar.id
                  ? "bg-[#FBF9F5] border-stone-800 shadow-xs"
                  : "bg-[#EFEAE1]/70 border-stone-200/80 hover:border-stone-400"
              }`}
            >
              <div>
                <span className="text-xs font-mono text-stone-400 block mb-4">
                  PILLAR {pillar.number}
                </span>
                <h3 className="text-lg font-display font-medium text-stone-900 mb-1">
                  {pillar.titleEn}
                </h3>
                <p className="text-xs font-mono text-stone-500 mb-4">{pillar.titleKr}</p>
                <p className="text-xs sm:text-sm text-stone-700 font-editorial leading-relaxed mb-6">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <span className="text-[10px] uppercase font-mono tracking-wider text-stone-500 block mb-2">
                  Scope of Collaboration
                </span>
                <ul className="space-y-1.5 text-xs text-stone-600 font-editorial">
                  {pillar.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-stone-400 font-mono">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Dialogue & Inquiry Form Card */}
        <div className="max-w-3xl mx-auto bg-[#FBF9F5] border border-stone-300 p-8 sm:p-12">
          <div className="mb-8 pb-6 border-b border-stone-200 text-center">
            <span className="text-xs font-mono uppercase tracking-widest text-stone-500 block mb-2">
              Start a Dialogue
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-stone-900 mb-2">
              프로젝트의 이유와 목적을 들려주세요
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-editorial">
              공간에 관한 깊이 있는 대화로 시작하겠습니다.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                Inquiry Received
              </div>
              <h4 className="text-lg font-display font-medium text-stone-900">
                귀하의 사유가 온전히 전달되었습니다.
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 font-editorial max-w-md mx-auto leading-relaxed">
                남겨주신 프로젝트의 목적과 맥락을 깊이 검토한 후, 2영업일 이내에 정중한 답변을 드리겠습니다.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    organization: "",
                    category: "Spatial Consulting & Branding",
                    message: ""
                  });
                }}
                className="mt-6 px-6 py-2.5 text-xs uppercase tracking-widest border border-stone-800 text-stone-800 hover:bg-stone-900 hover:text-stone-50 transition-colors cursor-pointer"
              >
                새로운 문의 작성
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 mb-2">
                    Name / 성함 *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="홍길동"
                    className="w-full bg-white border border-stone-300 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 font-normal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 mb-2">
                    Email / 연락처 *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="client@domain.com"
                    className="w-full bg-white border border-stone-300 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 font-normal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 mb-2">
                    Organization / 소속 또는 브랜드
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="소속 회사 또는 프로젝트명"
                    className="w-full bg-white border border-stone-300 px-4 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 font-normal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 mb-2">
                    Inquiry Pillar / 협업 분야
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-white border border-stone-300 px-4 py-2.5 text-sm text-stone-900 focus:outline-none focus:border-stone-800 font-normal"
                  >
                    <option value="Spatial Consulting & Branding">01. 공간 컨설팅 & 브랜딩</option>
                    <option value="Discourse & Lecture">02. 공간 철학 담론 & 강연</option>
                    <option value="Writing & Curation">03. 에세이 집필 & 큐레이션</option>
                    <option value="Other Project">04. 기타 협업 문의</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-stone-600 mb-2">
                  Project Premise & Purpose / 프로젝트의 이유와 목적 *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="공간의 위치, 대상 사용자, 그리고 이 공간이 존재해야 하는 고유한 이유를 자유롭게 들려주세요."
                  className="w-full bg-white border border-stone-300 px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-800 font-normal leading-relaxed"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-stone-200">
                <a
                  href="mailto:hello@auroraidlab.com"
                  className="text-xs font-mono text-stone-500 hover:text-stone-900 transition-colors"
                >
                  Direct Mail: hello@auroraidlab.com
                </a>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 text-xs uppercase tracking-widest text-stone-50 bg-stone-900 hover:bg-stone-800 transition-colors cursor-pointer"
                >
                  Submit Inquiry (대화 요청)
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
