import React, { useState } from 'react';
import { FATE_ITEMS, FateItem } from '../data/destinyData';
import { getRandomFate } from '../utils/loreLogic';
import { Sparkles, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

export const DestinyView: React.FC = () => {
  const [selectedFate, setSelectedFate] = useState<FateItem | null>(null);
  const [isRevealing, setIsRevealing] = useState<boolean>(false);
  const [filterMode, setFilterMode] = useState<'전체' | '여장남자 예시' | '남장여자 예시'>('전체');
  const [showAllList, setShowAllList] = useState<boolean>(false);

  const handleDrawFate = () => {
    setIsRevealing(true);
    setTimeout(() => {
      const drawn = getRandomFate(FATE_ITEMS, filterMode);
      setSelectedFate(drawn);
      setIsRevealing(false);

      // Smooth scroll to revealed fate card
      const elem = document.getElementById('destiny-result-card');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 400);
  };

  const femaleDisguiseFates = FATE_ITEMS.filter((f) => f.category === '여장남자 예시');
  const maleDisguiseFates = FATE_ITEMS.filter((f) => f.category === '남장여자 예시');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12 text-[#ede7de]">
      {/* Interactive Crystal Ball Section */}
      <section className="p-6 sm:p-10 rounded-2xl border-2 border-[#826a45] bg-[#181623] shadow-2xl text-center space-y-6">
        <div>
          <span className="text-sm font-bold text-[#dfbe7e] tracking-wider uppercase block mb-1">
            CRYSTAL BALL OF FATE
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#faf5ee]">
            노파의 수정구슬
          </h3>
          <p className="text-base sm:text-lg text-[#b8acc2] mt-2">
            수정구슬을 클릭하면 당신이 짊어질 숨겨진 운명이 무작위로 결정됩니다.
          </p>
        </div>

        {/* Category Random Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-1">
          {(['전체', '여장남자 예시', '남장여자 예시'] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setFilterMode(mode)}
              className={`px-4 py-2 rounded-xl text-sm sm:text-base font-bold transition-all cursor-pointer ${
                filterMode === mode
                  ? 'bg-[#3b2f4d] text-[#dfbe7e] border-2 border-[#826a45] shadow-[0_0_12px_rgba(223,190,126,0.2)]'
                  : 'bg-[#15131d] text-[#a599ad] border border-[#3b3348] hover:text-[#dfbe7e]'
              }`}
            >
              {mode === '전체' ? '전체 운명 랜덤' : mode}
            </button>
          ))}
        </div>

        {/* Crystal Ball Artwork Container (Clickable Button) */}
        <div className="relative max-w-[480px] mx-auto my-4 group">
          <button
            type="button"
            onClick={handleDrawFate}
            aria-label="수정구슬을 클릭하여 운명 정하기"
            className={`w-full rounded-2xl overflow-hidden border-2 border-[#c5a05980] group-hover:border-[#fae092] transition-all duration-300 shadow-[0_0_30px_rgba(147,87,255,0.25)] group-hover:shadow-[0_0_45px_rgba(250,224,146,0.4)] cursor-pointer relative bg-[#0c0a13] block text-left focus:outline-none focus:ring-2 focus:ring-[#fae092] ${
              isRevealing ? 'scale-95 animate-pulse' : 'hover:scale-[1.01]'
            }`}
          >
            <img
              src="/src/assets/images/witch_crystal_ball_1792572342268.jpg"
              alt="수정구슬에 노파 손이 양손으로 있는 그림"
              referrerPolicy="no-referrer"
              className="w-full aspect-square object-cover pointer-events-none"
            />

            {/* Glowing Callout Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col items-center justify-end p-6 pointer-events-none">
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1e172eee] border border-[#fae092] text-[#fae092] text-base sm:text-lg font-bold shadow-2xl group-hover:bg-[#2b2142] transition-all">
                <Sparkles className="w-5 h-5 text-[#fae092] animate-spin" style={{ animationDuration: '4s' }} />
                <span>수정구슬을 클릭하여 운명 정하기</span>
              </div>
            </div>
          </button>
        </div>

        {/* 3. Revealed Fate Result Card */}
        {selectedFate && (
          <div
            id="destiny-result-card"
            className="p-6 sm:p-8 rounded-2xl border-2 border-[#dfbe7e] bg-gradient-to-b from-[#251e33] to-[#14121d] shadow-[0_0_35px_rgba(223,190,126,0.3)] text-left animate-fadeIn space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#4d3f60] pb-3">
              <span className="text-sm sm:text-base font-bold px-3 py-1 rounded-lg border border-[#c5a05980] bg-[#171422] text-[#dfbe7e]">
                당신에게 주어진 운명 ({selectedFate.category})
              </span>
              <button
                onClick={handleDrawFate}
                className="flex items-center gap-1.5 text-sm font-semibold text-[#dfbe7e] hover:underline cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>다시 뽑기</span>
              </button>
            </div>

            <div className="text-xl sm:text-2xl font-bold text-[#faf5ee] leading-relaxed font-serif p-2">
              "{selectedFate.text}"
            </div>
          </div>
        )}
      </section>

      {/* 4. Complete List of Fate Examples Accordion */}
      <section className="p-6 sm:p-8 rounded-2xl border border-[#c5a05940] bg-[#1a1725]">
        <button
          onClick={() => setShowAllList(!showAllList)}
          className="w-full flex items-center justify-between text-left text-xl font-bold text-[#faf5ee] hover:text-[#dfbe7e] transition-colors cursor-pointer"
        >
          <span>운명 예시 전체 목록 열람 ({FATE_ITEMS.length}개)</span>
          {showAllList ? <ChevronUp className="w-5 h-5 text-[#dfbe7e]" /> : <ChevronDown className="w-5 h-5 text-[#dfbe7e]" />}
        </button>

        {showAllList && (
          <div className="mt-8 space-y-8 pt-4 border-t border-[#3c344a] text-lg text-[#ddd4c8]">
            {/* 여장남자 예시 */}
            <div>
              <h4 className="text-xl font-bold text-[#dfbe7e] mb-4">
                # 여장남자 예시
              </h4>
              <ul className="space-y-3">
                {femaleDisguiseFates.map((item, idx) => (
                  <li key={item.id} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#121019] border border-[#3b3348]">
                    <span className="text-[#dfbe7e] font-bold shrink-0">{idx + 1}.</span>
                    <span className="leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 남장여자 예시 */}
            <div>
              <h4 className="text-xl font-bold text-[#dfbe7e] mb-4">
                ## 남장여자 예시
              </h4>
              <ul className="space-y-3">
                {maleDisguiseFates.map((item, idx) => (
                  <li key={item.id} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#121019] border border-[#3b3348]">
                    <span className="text-[#dfbe7e] font-bold shrink-0">{idx + 1}.</span>
                    <span className="leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
