import { PowerFaction, Faculty, AcademyEvent, QuizQuestion } from '../types/lore';

export const GODDESS_EIR = {
  name: '여신 에이르 (Eir)',
  title: '만물의 창조주이자 사랑의 유일신',
  identity: '유일신이자 에델가르트 왕국과 알티스 제국의 건국신',
  features: '세상에 존재하는 모든 형태의 사랑(신성한 사랑, 낭만적 사랑, 우애와 자비)을 관장하는 여신이다. 태초의 시대에 대륙을 축복하고 질서를 세웠으나, 현재는 지상의 필멸자들의 일에 직접적으로 개입하거나 계시를 내리지 않고 침묵을 지키고 있다.',
  symbol: '성스러운 황금 나무와 달의 고리',
  creed: '사랑은 모든 율법의 시작이자 종말이라.',
};

export const KINGDOM_EDELGARD = {
  name: '에델가르트 왕국 (Kingdom of Edelgard)',
  overview: '대륙의 전설적인 고왕국의 후예인 하르벤 레온하르트가 건국한 유서 깊은 국가. 풍요로운 영토와 엄격한 귀족 봉건제를 유지하고 있다.',
  ruler: {
    title: '현 국왕 알렉산데르 (Alexander)',
    details: '슬하에 15명의 왕자와 왕녀를 두고 있다. 후계자를 명확히 정하지 않고 오히려 치열한 왕위계승전을 부추겨, 자녀들이 스스로의 실력과 연줄로 권력을 쟁취하도록 경쟁을 조장하고 있다.'
  },
  socialSystem: {
    summary: '극단적인 가부장제와 마녀사냥이 만연한 엄격한 봉건 종교 사회',
    patriarchyAndPolitics: '남성 중심의 가부장적 질서가 국가 전반을 지배한다. 평민 남성에게는 군공이나 아카데미 성적을 통한 제한적인 능력주의 관직 진출이 허용되지만, 여성은 아무리 고귀한 공작가의 영애라 할지라도 정계에 진출하거나 관직을 가질 수 없다.',
    witchHunt: '미지의 힘을 다루거나 체제에 반기를 드는 자들을 마녀로 규정하여 가차 없이 처단하는 마녀사냥이 횡행한다.',
    sexualConservatism: '신성 교황청의 엄격한 교리 통제로 인해 성적으로 극히 보수적이다. 특히 동성애는 영혼을 좀먹는 ‘이단이자 악마의 전염병’으로 규정되며, 발각될 경우 성기사단에 즉시 체포되어 공개 화형에 처해진다.'
  }
};

export const TRIAS_POLITICA: PowerFaction[] = [
  {
    id: 'crown',
    name: 'The Royal Crown',
    koreanName: '왕실 (王室)',
    title: '군사력과 행정권의 중심',
    leader: '국왕 알렉산데르 & 15인의 계승 후보 왕족',
    corePower: ['상비군 및 국경 방위군 통솔권', '조세 징수 및 국가 행정 집행권', '작위 수여 및 영지 관리'],
    description: '고왕국의 혈통을 잇는 세속 권력의 정점. 왕권을 유지하기 위해 막강한 군사력과 관료제를 가동하지만, 15명 자녀들의 피비린내 나는 왕위계승전으로 인해 내부 암투가 격화되어 있다.',
    vulnerability: '마탑의 압도적인 결계 및 마도 병기 기술력 없이는 국경을 완벽히 수호할 수 없으며, 사법 집행에는 교황청의 승인이 필수적이다.',
    color: '#3b82f6',
    badge: '👑'
  },
  {
    id: 'tower',
    name: 'The Magic Tower',
    koreanName: '마탑 (魔塔)',
    title: '독립된 마법 기술과 정보의 독점',
    leader: '차기 마탑주 내정자 아스테르 & 원로 마법사회',
    corePower: ['대륙 최정상의 고대 마법 기술력', '국경 대결계 및 통신망 장악', '그림자 정보망과 연금술 비전 독점'],
    description: '왕실로부터 완전히 독립된 초국가적 자치 기관. 세속 군주조차 함부로 간섭할 수 없는 치외법권을 누리며, 국경의 마수 방어와 마도 공학을 독점하여 왕국을 사실상 좌지우지한다.',
    vulnerability: '교황청의 이단 심문관들이 늘 마탑의 심연 마법 연구를 감시하며, 세속 대중의 종교적 지지를 받지 못해 고립될 위험이 있다.',
    color: '#8b5cf6',
    badge: '🔮'
  },
  {
    id: 'papacy',
    name: 'The Holy Papacy',
    koreanName: '신성 교황청 (敎皇廳)',
    title: '사법권과 이단 심문의 신성 지배',
    leader: '대교황 & 성기사단 총사령부',
    corePower: ['국가 사법권 및 종교재판 단독 관할', '성기사단 및 이단심문관 무력', '대륙 만백성의 절대적인 신앙과 여론'],
    description: '여신 에이르의 이름을 대리하는 사법과 도덕의 최고 권력. 범죄자에 대한 재판권과 마녀사냥, 이단 심문권을 독점하고 있으며, 백성들의 절대적인 지지를 등에 업고 국왕조차 심판대에 세울 수 있다.',
    vulnerability: '군사적 정규군 규모와 실질적인 마도 인프라 기술은 왕실과 마탑에 의존하고 있어 정면 무력 충돌은 회피한다.',
    color: '#eab308',
    badge: '⚖️'
  }
];

export const ACADEMY_FACULTIES: Faculty[] = [
  {
    id: 'swordsmanship',
    name: '검술 및 전술학부',
    deanOrNotable: '헤르만 마일즈 교수 (평민 출신 검성)',
    description: '대륙 최강의 기사와 전술 지휘관을 육성하는 학부. 실전 검술, 중장기병 전술, 공성전 및 군사 전략을 엄격히 가르친다.',
    badge: '⚔️',
    suitableTraits: ['생존력', '단단한 기백', '신체 능력', '솔직함']
  },
  {
    id: 'magic',
    name: '마법 및 연금술학부',
    deanOrNotable: '루멘 교수 (마탑 출신 천재)',
    description: '원소 마법, 마나 연공, 마도구 제작 및 비전 연금술을 연마하는 최고급 학부. 재능을 엄격히 따지며 마탑의 직속 인재를 배출한다.',
    badge: '🔮',
    suitableTraits: ['지적 호기심', '냉철한 분석', '재능', '탐구심']
  },
  {
    id: 'theology',
    name: '신학 및 이단법학부',
    deanOrNotable: '성기사 양성 총괄',
    description: '여신 에이르의 성서와 신성 사법 체계를 학습하며, 이단과 마녀를 처단하는 신성 성기사단을 전문적으로 양성한다.',
    badge: '⚖️',
    suitableTraits: ['신념', '정의감', '규율', '충성심']
  },
  {
    id: 'politics',
    name: '정치사회학부',
    deanOrNotable: '헤레이스 로젠탈 수석',
    description: '왕국 귀족가의 후계자들이 필수로 거치는 학부. 대륙 외교, 권력 역학, 영지 행정, 법률 및 수사학을 다룬다.',
    badge: '📜',
    suitableTraits: ['화술', '사교성', '통찰력', '낭만주의']
  },
  {
    id: 'arts',
    name: '교양 및 예술학부',
    deanOrNotable: '로레인 에버필드 등 재학',
    description: '사교계의 중심이 되는 궁정 예절, 고전 문학, 시와 음악, 회화, 왈츠 무도 등을 가르치는 우아한 학부.',
    badge: '🎨',
    suitableTraits: ['섬세함', '매력', '예술적 감각', '사교성']
  }
];

export const ACADEMY_EVENTS: AcademyEvent[] = [
  {
    id: 'sacred-fire',
    name: '성화절 (聖火節)',
    season: '겨울 / 성화의 달',
    description: '태초에 악마와 마녀를 불태워 세상을 정화했다는 전설에서 유래한 엄숙한 행사. 교황청 주관으로 아카데미 광장에서 공개 이단 심문과 성화 점화 의식이 거행된다.',
    nature: 'solemn',
    tag: '신성 의식 & 공개 이단 심문'
  },
  {
    id: 'golden-harvest',
    name: '황금수확제',
    season: '가을 / 풍요의 계절',
    description: '에델가르트 전역의 수확을 기리는 대규모 축제. 아카데미 전역이 호박과 황금빛 등불로 장식되며 학부별 주점과 연극제가 열린다.',
    nature: 'festive',
    tag: '가을 대축제 & 사교'
  },
  {
    id: 'crown-tournament',
    name: '왕관전 (Crown Tournament)',
    season: '봄 / 개강 분기',
    description: '검술학부와 마법학부가 명예와 우승기를 걸고 실력을 겨루는 체육대회 형식의 대규모 무투/마법 대항전.',
    nature: 'competitive',
    tag: '검술 vs 마법 라이벌 대결'
  },
  {
    id: 'academy-ball',
    name: '왕립 아카데미 무도회',
    season: '학기말 사교의 밤',
    description: '오직 귀족 신분의 학생과 초청 귀족들만이 참석할 수 있는 화려하고 은밀한 사교 행사. 정략결혼과 파벌 결성이 이루어지는 중심지다.',
    nature: 'exclusive',
    tag: '귀족 전용 화려한 사교 파티'
  }
];

export const OTHER_NATIONS = {
  empire: {
    name: '알티스 제국 (Altis Empire)',
    overview: '황족 발하르트 가문이 여신 에이르의 직계 후손을 자처하는 대륙 최대의 강대국. 왕국보다 훨씬 넓은 영토와 거대한 자원을 보유한다.',
    traits: '종교를 중심으로 결속하여 자수성가한 에델가르트 왕국과 달리, 제국은 실제로 건국 이래 여신의 가호를 가장 흠뻑 받은 천혜의 국가로 여겨진다.'
  },
  khargar: {
    name: '카르가르인 (Khargar Tribe)',
    identity: '북방의 혹한 지대를 누비는 긍지 높은 유목민족. 제국과 왕국 모두와 깊은 적대 관계를 유지한다.',
    environment: '얼어붙은 북방 평원과 거친 초원, 고원지대에서 천막(게르)을 거처로 삼으며 이동 생활을 영위한다.',
    combatStyle: '신출귀몰한 기마 궁술과 가혹한 눈보라 속 야습, 적을 사지로 몰아넣는 유인전술의 대가.',
    appearance: '남녀 불문하고 거대한 체격, 혹한과 햇볕에 그을린 건강한 갈색 피부, 맹수를 연상시키는 서늘한 금색 눈동자를 지닌다.',
    conflict: '역사적으로 알티스 제국이 북부를 잔혹하게 식민지화하려 했던 침략 역사로 인해 남부인들에게 깊은 증오를 품고 있으며, 타국에서는 이들을 야만인이라 부른다.'
  }
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '아카데미 입학 첫날, 마주하고 싶은 첫 수업은 무엇입니까?',
    options: [
      { text: '흙먼지를 날리며 대검을 부딪히는 실전 대련', facultyId: 'swordsmanship' },
      { text: '마탑의 비밀 서고에서 금서 마법식을 해독하는 연구', facultyId: 'magic' },
      { text: '교황청 성당에서 신성 경전과 이단 판례를 탐독하는 시간', facultyId: 'theology' },
      { text: '귀족 살롱에서 대륙 정세와 외교 협상을 논하는 모임', facultyId: 'politics' },
      { text: '우아한 음악과 티타임, 무도회 에스코트 실습', facultyId: 'arts' }
    ]
  },
  {
    id: 2,
    question: '위기의 순간, 당신이 가장 의지하고 싶은 무기는 무엇입니까?',
    options: [
      { text: '내 손에 쥐어진 묵직한 강철 검과 나의 육체', facultyId: 'swordsmanship' },
      { text: '상대를 한 줌 재로 만들거나 시간을 비트는 마나', facultyId: 'magic' },
      { text: '신성한 여신의 가호와 악을 심판하는 불굴의 신념', facultyId: 'theology' },
      { text: '사람의 심리를 꿰뚫고 판을 뒤흔드는 날카로운 화술', facultyId: 'politics' },
      { text: '타인의 마음을 사로잡는 치명적인 매력과 예술적 안목', facultyId: 'arts' }
    ]
  },
  {
    id: 3,
    question: '아카데미 축제 시즌, 당신이 가장 기대하는 순간은?',
    options: [
      { text: '왕관전 무투 대회에서 상대의 방패를 부수고 얻는 환호', facultyId: 'swordsmanship' },
      { text: '연금술 대회에서 아무도 풀지 못한 비전 영약을 완성할 때', facultyId: 'magic' },
      { text: '성화절의 성스러운 횃불 의식 아래 침묵의 기도를 올릴 때', facultyId: 'theology' },
      { text: '축제 후원금을 둘러싼 세력 간의 물밑 권력 거래', facultyId: 'politics' },
      { text: '무도회장에서 가장 화려한 드레스와 턱시도로 스포트라이트를 받을 때', facultyId: 'arts' }
    ]
  },
  {
    id: 4,
    question: '살아가면서 결코 타협할 수 없는 당신의 가장 큰 가치는?',
    options: [
      { text: '살아남는 것, 그리고 내 동료와의 뜨거운 의리', facultyId: 'swordsmanship' },
      { text: '지식의 지평을 넓히고 천재성을 증명하는 것', facultyId: 'magic' },
      { text: '세상의 혼란을 정화하고 정의의 율법을 세우는 것', facultyId: 'theology' },
      { text: '가문의 명예와 대륙에 진정한 사랑과 낭만을 전파하는 것', facultyId: 'politics' },
      { text: '나를 사랑해 주는 사람들의 관심과 우아한 행복', facultyId: 'arts' }
    ]
  }
];
