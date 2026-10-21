import React from 'react';
import { TriasDiagram } from './TriasDiagram';

export const WorldviewView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12 text-[#ede7de]">
      {/* 1. 여신 에이르 */}
      <section className="p-6 sm:p-8 rounded-2xl border border-[#c5a05940] bg-[#1a1724]">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#f5ecd9] border-b border-[#c5a05940] pb-3 mb-4">
          여신 에이르
        </h2>
        <ul className="space-y-3 text-lg leading-relaxed text-[#ddd4c8]">
          <li className="flex items-start gap-2">
            <span className="text-[#dfbe7e] font-bold">•</span>
            <span><strong className="text-[#fdfaf5]">정체:</strong> 유일신이자 왕국과 제국의 건국신</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfbe7e] font-bold">•</span>
            <span><strong className="text-[#fdfaf5]">특징:</strong> 모든 사랑을 관장하는 여신으로, 현재는 지상에 직접 개입하지 않는다.</span>
          </li>
        </ul>
      </section>

      {/* 2. 에델가르트 왕국 */}
      <section className="p-6 sm:p-8 rounded-2xl border border-[#c5a05940] bg-[#1a1724]">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#f5ecd9] border-b border-[#c5a05940] pb-3 mb-4">
          에델가르트 왕국
        </h2>
        <ul className="space-y-4 text-lg leading-relaxed text-[#ddd4c8] mb-6">
          <li className="flex items-start gap-2">
            <span className="text-[#dfbe7e] font-bold">•</span>
            <span><strong className="text-[#fdfaf5]">개요:</strong> 고왕국의 후예인 하르벤 레온하르트가 건국한 국가.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfbe7e] font-bold">•</span>
            <span><strong className="text-[#fdfaf5]">통치자:</strong> 현 국왕 알렉산데르. 15명의 자녀를 두었으며, 왕위계승전을 부추겨 왕자와 왕녀들이 권력을 두고 경쟁하게 한다.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfbe7e] font-bold">•</span>
            <span><strong className="text-[#fdfaf5]">권력 구조:</strong> 왕실은 군사력과 행정권을, 마탑은 압도적인 마법 기술력과 정보력을, 신성 교황청은 사법권과 이단 심문권을 장악한다. 마탑은 왕실로부터 독립된 기관이며, 신성 교황청은 백성들의 절대적인 지지를 받는다.</span>
          </li>
        </ul>

        {/* 삼권분립 삼각형 다이어그램 */}
        <TriasDiagram />

        {/* 사회 체제 */}
        <div className="mt-8 pt-6 border-t border-[#3c344a]">
          <h3 className="text-xl sm:text-2xl font-bold text-[#dfbe7e] mb-4">
            사회 체제
          </h3>
          <ul className="space-y-3 text-lg leading-relaxed text-[#ddd4c8]">
            <li className="flex items-start gap-2">
              <span className="text-[#dfbe7e] font-bold">•</span>
              <span><strong className="text-[#fdfaf5]">사회상:</strong> 극단적인 가부장제와 마녀사냥이 만연한 시대.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dfbe7e] font-bold">•</span>
              <span><strong className="text-[#fdfaf5]">정계 진출:</strong> 평민 남성에게는 능력주의가 일부 허용되지만, 여성은 신분과 관계없이 정계에 진출할 수 없다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dfbe7e] font-bold">•</span>
              <span><strong className="text-[#fdfaf5]">성적 보수성:</strong> 신성 교황청의 영향으로 동성애를 이단이자 전염병으로 취급한다. 발각되면 성기사에게 체포되어 화형에 처해진다.</span>
            </li>
          </ul>
        </div>

        {/* 발레리온 왕립 아카데미 */}
        <div className="mt-8 pt-6 border-t border-[#3c344a]">
          <h3 className="text-xl sm:text-2xl font-bold text-[#dfbe7e] mb-4">
            발레리온 왕립 아카데미
          </h3>
          <ul className="space-y-4 text-lg leading-relaxed text-[#ddd4c8]">
            <li className="flex items-start gap-2">
              <span className="text-[#dfbe7e] font-bold">•</span>
              <span><strong className="text-[#fdfaf5]">개요:</strong> 귀족 90%, 뛰어난 평민 10%로 구성된 왕립 교육기관이다. 귀족 여학생은 소수이며, 기숙사와 방학 제도를 운영한다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dfbe7e] font-bold">•</span>
              <span><strong className="text-[#fdfaf5]">입학 및 졸업:</strong> 성인도 입학할 수 있다. 돈을 지불하면 1년 만에 졸업할 수 있어 졸업장만 필요한 귀족들이 이용하기도 한다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dfbe7e] font-bold">•</span>
              <div>
                <strong className="text-[#fdfaf5]">학부:</strong>
                <ul className="mt-2 ml-4 space-y-1.5 text-base text-[#c9c0b3]">
                  <li>- 검술 및 전술학부</li>
                  <li>- 마법 및 연금술학부</li>
                  <li>- 신학 및 이단법학부 — 성기사 양성</li>
                  <li>- 정치사회학부</li>
                  <li>- 교양 및 예술학부</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* 주요 행사 */}
        <div className="mt-8 pt-6 border-t border-[#3c344a]">
          <h3 className="text-xl sm:text-2xl font-bold text-[#dfbe7e] mb-4">
            주요 행사
          </h3>
          <ul className="space-y-3 text-lg leading-relaxed text-[#ddd4c8]">
            <li className="flex items-start gap-2">
              <span className="text-[#dfbe7e] font-bold">•</span>
              <span><strong className="text-[#fdfaf5]">성화절:</strong> 악마와 마녀를 불태워 세상을 정화했다는 전설에서 유래한 행사다. 이단 심문을 공개적으로 진행한다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dfbe7e] font-bold">•</span>
              <span><strong className="text-[#fdfaf5]">황금수확제:</strong> 가을에 개최하는 축제다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dfbe7e] font-bold">•</span>
              <span><strong className="text-[#fdfaf5]">왕관전:</strong> 검술학부와 마법학부가 실력을 겨루는 체육대회 형식의 경쟁 행사다.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#dfbe7e] font-bold">•</span>
              <span><strong className="text-[#fdfaf5]">무도회:</strong> 귀족만 참석할 수 있는 아카데미 사교 행사다.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. 알티스 제국 */}
      <section className="p-6 sm:p-8 rounded-2xl border border-[#c5a05940] bg-[#1a1724]">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#f5ecd9] border-b border-[#c5a05940] pb-3 mb-4">
          알티스 제국
        </h2>
        <ul className="space-y-3 text-lg leading-relaxed text-[#ddd4c8]">
          <li className="flex items-start gap-2">
            <span className="text-[#dfbe7e] font-bold">•</span>
            <span><strong className="text-[#fdfaf5]">개요:</strong> 황족 발하르트 가문이 여신의 후손을 자처하는 제국이다. 왕국보다 넓은 영토를 보유한다.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfbe7e] font-bold">•</span>
            <span><strong className="text-[#fdfaf5]">특징:</strong> 종교를 중심으로 결속한 왕국이 자수성가한 국가라면, 제국은 실제로 여신의 가호를 가장 많이 받은 국가로 여겨진다.</span>
          </li>
        </ul>
      </section>

      {/* 4. 카르가르인 */}
      <section className="p-6 sm:p-8 rounded-2xl border border-[#c5a05940] bg-[#1a1724]">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#f5ecd9] border-b border-[#c5a05940] pb-3 mb-4">
          카르가르인
        </h2>
        <ul className="space-y-3 text-lg leading-relaxed text-[#ddd4c8]">
          <li className="flex items-start gap-2">
            <span className="text-[#dfbe7e] font-bold">•</span>
            <span><strong className="text-[#fdfaf5]">정체:</strong> 북방의 유목민족으로, 제국과 왕국 모두와 사이가 좋지 않다.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfbe7e] font-bold">•</span>
            <span><strong className="text-[#fdfaf5]">거주 환경:</strong> 얼어붙은 평원과 초원, 고원지대에서 생활하며 천막을 거처로 삼는다.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfbe7e] font-bold">•</span>
            <span><strong className="text-[#fdfaf5]">전투 방식:</strong> 기마 궁술에 능하며 야습과 유인전술을 활용한다. 침략과 약탈을 벌이기도 하지만, 역사적으로 제국이 북부를 식민지화하려 했던 데 대한 반감이 깊다.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfbe7e] font-bold">•</span>
            <span><strong className="text-[#fdfaf5]">외형:</strong> 남녀 모두 체격이 크고 피부가 까무잡잡하며, 짐승을 연상시키는 금색 눈동자를 지닌다.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#dfbe7e] font-bold">•</span>
            <span><strong className="text-[#fdfaf5]">대외 인식:</strong> 제국의 식민 지배 시도와 오랜 갈등으로 인해 타국에서는 야만인이라 불린다.</span>
          </li>
        </ul>
      </section>
    </div>
  );
};
