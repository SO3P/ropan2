import React from 'react';

export const TriasDiagram: React.FC = () => {
  return (
    <div className="my-8 p-6 sm:p-8 rounded-2xl border-2 border-[#8a724d] bg-[#1a1824] shadow-xl text-center">
      <div className="text-sm font-semibold text-[#dfbe7e] tracking-wider mb-2">
        [에델가르트 왕국 권력 구조 삼권분립도]
      </div>
      <h4 className="text-xl sm:text-2xl font-bold text-[#faf5ee] mb-6">
        왕실 · 마탑 · 신성 교황청의 삼권분립
      </h4>

      {/* Triangular SVG Diagram */}
      <div className="max-w-[560px] mx-auto aspect-[1/0.88] relative">
        <svg viewBox="0 0 500 440" className="w-full h-full select-none">
          {/* Outer Triangle Frame */}
          <polygon
            points="250,60 70,370 430,370"
            fill="#231f30"
            stroke="#c5a059"
            strokeWidth="3"
            strokeLinejoin="round"
          />

          {/* Inner Dashed Balance Guides */}
          <line x1="250" y1="60" x2="250" y2="370" stroke="#7d674b" strokeWidth="1.5" strokeDasharray="4,4" />
          <line x1="70" y1="370" x2="340" y2="215" stroke="#7d674b" strokeWidth="1.5" strokeDasharray="4,4" />
          <line x1="430" y1="370" x2="160" y2="215" stroke="#7d674b" strokeWidth="1.5" strokeDasharray="4,4" />

          {/* Central Equilibrium Circle */}
          <circle cx="250" cy="270" r="32" fill="#171520" stroke="#c5a059" strokeWidth="2" />
          <text x="250" y="276" fill="#e8cca4" fontSize="14" fontWeight="bold" fontFamily="'Noto Serif KR', serif" textAnchor="middle">
            삼권 균형
          </text>

          {/* Side Notes */}
          <text x="145" y="195" fill="#c4b5fd" fontSize="12" fontFamily="'Noto Serif KR', serif" textAnchor="middle">
            독립 기관
          </text>
          <text x="355" y="195" fill="#fde047" fontSize="12" fontFamily="'Noto Serif KR', serif" textAnchor="middle">
            백성의 절대적 지지
          </text>

          {/* APEX 1: 왕실 (Top) */}
          <g>
            <circle cx="250" cy="60" r="42" fill="#1b253b" stroke="#60a5fa" strokeWidth="3" />
            <text x="250" y="68" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="'Noto Serif KR', serif" textAnchor="middle">
              왕실
            </text>
          </g>

          {/* APEX 2: 마탑 (Bottom-Left) */}
          <g>
            <circle cx="70" cy="370" r="42" fill="#291c3d" stroke="#c084fc" strokeWidth="3" />
            <text x="70" y="378" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="'Noto Serif KR', serif" textAnchor="middle">
              마탑
            </text>
          </g>

          {/* APEX 3: 신성 교황청 (Bottom-Right) */}
          <g>
            <circle cx="430" cy="370" r="44" fill="#382c19" stroke="#facc15" strokeWidth="3" />
            <text x="430" y="375" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="'Noto Serif KR', serif" textAnchor="middle">
              신성 교황청
            </text>
          </g>
        </svg>
      </div>

      {/* 3 Faction Descriptions in Large, Clear Text */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-left">
        {/* Crown */}
        <div className="p-4 rounded-xl border border-[#60a5fa60] bg-[#151c2e]">
          <div className="text-lg font-bold text-[#93c5fd] mb-1.5 flex items-center gap-1.5">
            <span>👑</span>
            <span>왕실</span>
          </div>
          <p className="text-base text-[#e2e8f0] leading-relaxed">
            • <strong className="text-[#93c5fd]">군사력</strong>과 <strong className="text-[#93c5fd]">행정권</strong>을 장악.
          </p>
        </div>

        {/* Magic Tower */}
        <div className="p-4 rounded-xl border border-[#c084fc60] bg-[#221733]">
          <div className="text-lg font-bold text-[#d8b4fe] mb-1.5 flex items-center gap-1.5">
            <span>🔮</span>
            <span>마탑</span>
          </div>
          <p className="text-base text-[#f3e8ff] leading-relaxed">
            • 압도적인 <strong className="text-[#d8b4fe]">마법 기술력</strong>과 <strong className="text-[#d8b4fe]">정보력</strong> 장악.<br />
            • <span className="text-[#fae8ff] underline underline-offset-4">왕실로부터 독립된 기관</span>.
          </p>
        </div>

        {/* Holy Papacy */}
        <div className="p-4 rounded-xl border border-[#facc1560] bg-[#292214]">
          <div className="text-lg font-bold text-[#fde047] mb-1.5 flex items-center gap-1.5">
            <span>⚖️</span>
            <span>신성 교황청</span>
          </div>
          <p className="text-base text-[#fef9c3] leading-relaxed">
            • <strong className="text-[#fde047]">사법권</strong>과 <strong className="text-[#fde047]">이단 심문권</strong>을 장악.<br />
            • <span className="text-[#fef08a] underline underline-offset-4">백성들의 절대적인 지지</span>를 받음.
          </p>
        </div>
      </div>
    </div>
  );
};
