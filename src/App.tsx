/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { WorldviewView } from './components/WorldviewView';
import { CharactersView } from './components/CharactersView';
import { DestinyView } from './components/DestinyView';
import { BookOpen, Users, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'worldview' | 'characters' | 'destiny'>('worldview');

  return (
    <div className="min-h-screen bg-[#111016] text-[#ede7de] font-serif flex flex-col">
      {/* Refined Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#161420f0] backdrop-blur-md border-b-2 border-[#826a45]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 sm:py-0 sm:h-20 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold text-[#faf5ee] tracking-wide">
              에델가르트 연대기
            </h1>
            <p className="text-xs sm:text-sm text-[#b5a9be]">
              세계관 · 인물 설정 · 운명의 수정구슬
            </p>
          </div>

          {/* Navigation Tabs */}
          <nav className="flex items-center gap-1.5 sm:gap-3 w-full sm:w-auto justify-center overflow-x-auto" aria-label="메인 탭">
            <button
              onClick={() => { setActiveTab('worldview'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'worldview'
                  ? 'bg-[#2d243a] text-[#dfbe7e] border-2 border-[#826a45] shadow-[0_0_15px_rgba(223,190,126,0.15)]'
                  : 'text-[#a599ad] hover:text-[#dfbe7e] hover:bg-[#1f1b2b]'
              }`}
              aria-current={activeTab === 'worldview' ? 'page' : undefined}
            >
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfbe7e]" />
              <span>세계관</span>
            </button>

            <button
              onClick={() => { setActiveTab('characters'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'characters'
                  ? 'bg-[#2d243a] text-[#dfbe7e] border-2 border-[#826a45] shadow-[0_0_15px_rgba(223,190,126,0.15)]'
                  : 'text-[#a599ad] hover:text-[#dfbe7e] hover:bg-[#1f1b2b]'
              }`}
              aria-current={activeTab === 'characters' ? 'page' : undefined}
            >
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfbe7e]" />
              <span>캐릭터 설명 (9인)</span>
            </button>

            <button
              onClick={() => { setActiveTab('destiny'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-sm sm:text-base font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'destiny'
                  ? 'bg-[#2d243a] text-[#dfbe7e] border-2 border-[#826a45] shadow-[0_0_15px_rgba(223,190,126,0.15)]'
                  : 'text-[#a599ad] hover:text-[#dfbe7e] hover:bg-[#1f1b2b]'
              }`}
              aria-current={activeTab === 'destiny' ? 'page' : undefined}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#dfbe7e]" />
              <span>운명의 수정구슬</span>
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 py-6">
        {activeTab === 'worldview' && <WorldviewView />}
        {activeTab === 'characters' && <CharactersView />}
        {activeTab === 'destiny' && <DestinyView />}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#3f354e] bg-[#0e0d14] py-8 text-center text-sm text-[#8e8496]">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-base text-[#dfbe7e] font-semibold mb-1">
            에델가르트 왕국 & 발레리온 왕립 아카데미
          </p>
          <p className="text-xs text-[#6e6575]">
            제공된 설정 원문 기반 아카이브
          </p>
        </div>
      </footer>
    </div>
  );
}
