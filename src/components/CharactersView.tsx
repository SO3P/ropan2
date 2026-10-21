import React, { useState } from 'react';
import { CHARACTERS_LORE } from '../data/exactLore';
import { filterCharacters } from '../utils/loreLogic';

export const CharactersView: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const filtered = filterCharacters(CHARACTERS_LORE, search);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 text-[#ede7de]">
      {/* Search Header */}
      <div className="mb-8 p-4 sm:p-6 rounded-2xl border border-[#c5a05940] bg-[#1a1724]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#f5ecd9]">
              캐릭터 목록 (9인)
            </h2>
          </div>
          <div className="w-full sm:w-72">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="캐릭터 이름 검색..."
              className="w-full px-4 py-2.5 rounded-xl border border-[#443b52] bg-[#121019] text-[#f5ecd9] text-base placeholder-[#7e738a] focus:outline-none focus:border-[#dfbe7e]"
            />
          </div>
        </div>
      </div>

      {/* Characters List */}
      <div className="space-y-10">
        {filtered.map((char) => {
          return (
            <article
              key={char.id}
              className="p-6 sm:p-8 rounded-2xl border-2 border-[#826a45] bg-[#181622] shadow-xl space-y-6"
            >
              {/* Character Header Title */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#3f354e] pb-4 gap-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#faf5ee]">
                  {char.name}
                </h3>
                <span className="text-lg sm:text-xl font-medium text-[#dfbe7e]">
                  {char.role}
                </span>
              </div>

              {/* Main Content Layout: Image Slot + Details */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Character Image Slot */}
                <div className="md:col-span-4 flex flex-col items-center">
                  <div className="w-full aspect-[3/4] max-w-[260px] rounded-xl border-2 border-[#826a45] bg-[#110f17] flex flex-col items-center justify-center relative overflow-hidden shadow-lg">
                    <img
                      src={char.imageUrl}
                      alt={char.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Character Lore Details: 직책, 외형, 성격, 특징 */}
                <div className="md:col-span-8 space-y-5 text-lg leading-relaxed text-[#ddd4c8]">
                  <div className="p-4 rounded-xl bg-[#121019] border border-[#3b3348]">
                    <span className="text-base font-bold text-[#dfbe7e] block mb-1">
                      • 직책:
                    </span>
                    <span className="text-lg text-[#faf5ee] font-medium">
                      {char.role}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121019] border border-[#3b3348]">
                    <span className="text-base font-bold text-[#dfbe7e] block mb-1">
                      • 외형:
                    </span>
                    <span className="text-lg text-[#f0e9df]">
                      {char.appearance}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121019] border border-[#3b3348]">
                    <span className="text-base font-bold text-[#dfbe7e] block mb-1">
                      • 성격:
                    </span>
                    <span className="text-lg text-[#f0e9df]">
                      {char.personality}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-[#121019] border border-[#3b3348]">
                    <span className="text-base font-bold text-[#dfbe7e] block mb-1">
                      • 특징:
                    </span>
                    <span className="text-lg text-[#f0e9df]">
                      {char.features}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
