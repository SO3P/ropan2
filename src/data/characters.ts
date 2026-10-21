import { Character } from '../types/lore';

export const CHARACTERS: Character[] = [
  {
    id: 'zenon',
    name: '제논 레온하르트',
    englishName: 'Zenon Leonhardt',
    role: '제국 제7왕자',
    category: 'royals',
    appearance: {
      hair: '짧은 푸른색 머리카락 (청발)',
      eyes: '선명한 붉은 눈 (적안)',
      physique: '탄탄하고 단련된 황족의 체격',
      outfit: '금사 견장과 황실 문양이 수놓인 네이비 제국 군복 코트',
      distinguishingFeatures: '언제나 자신감 넘치고 호쾌한 미소'
    },
    personality: {
      traits: ['선함', '긍정적', '호쾌함', '호기심', '마이페이스', '규율 준수'],
      summary: '선하고 호쾌하며 매사에 긍정적이다. 호기심이 많고 엉뚱한 기행을 벌이는 마이페이스지만, 결코 선을 넘지 않으며 타인을 배려할 줄 안다. 아카데미 규율을 엄격히 지킨다.'
    },
    features: {
      background: '제국의 제7왕자로, 여러 방면에서 타의 추종을 불허하는 천재성을 보여 현 국왕 알렉산데르의 각별한 총애를 받는다.',
      habits: '흥미로운 사람이나 유능한 인재를 발견하면 특유의 호쾌한 화술로 자기편으로 끌어들인다.',
      specialNotes: '아카데미 내에서 말썽을 일으키지 않는 모범생이면서도 속으로는 치열한 왕위계승전의 흐름을 꿰뚫고 있다. 카시안, 클로에와는 어린 시절부터 함께한 소꿉친구다.'
    },
    quote: '재미있겠군! 규칙 안에서 해낼 수 있다면 불가능이란 건 없지. 내 편이 되어보지 않겠나?',
    image: '/src/assets/images/char_zenon_1792569784220.jpg',
    crestIcon: '👑',
    relations: [
      { targetId: 'cassian', relationType: '소꿉친구 & 호적수', description: '언제나 티격태격하지만 깊은 신뢰를 나누는 맹우' },
      { targetId: 'chloe', relationType: '소꿉친구', description: '클로에의 콧대 높은 자존심과 허세를 다 받아주는 오랜 친구' },
      { targetId: 'hermann', relationType: '스승과 제자', description: '헤르만 교수의 실전 검술 능력을 진심으로 경탄함' }
    ]
  },
  {
    id: 'cassian',
    name: '카시안 크로스웰',
    englishName: 'Cassian Croswell',
    role: '후작가 차남 / 검술학부',
    category: 'nobles',
    appearance: {
      hair: '잿빛 헝클어진 머리칼 (회발)',
      eyes: '맹수처럼 날카로운 금빛 눈동자 (금안)',
      physique: '제논을 압도하는 압도적인 골격과 근육질 체구',
      outfit: '붉은 안감의 가죽 검술 튜닉과 가죽 장갑, 실전용 대검'
    },
    personality: {
      traits: ['강한 자존감', '단순명쾌', '직진주의', '츤데레', '의리파'],
      summary: '자존감이 매우 강하며 복잡한 생각 대신 행동이 앞선다. 남의 눈치를 보지 않아 퉁명스러워 보이지만, 마음을 열면 툭툭거리면서도 뒤에서 챙겨주는 츤데레에 의리파다.'
    },
    features: {
      background: '후작가의 사생아 출신으로 어린 시절 어머니를 여의고 멸시 속에서 자랐다. 오직 자신의 힘만으로 가문에서 인정받고자 한다.',
      habits: '신체 감각과 직감을 극도로 신뢰하며, 진짜인지 궁금하거나 호기심이 드는 물건을 입에 넣어 질겅질겅 씹는 버릇이 있다.',
      specialNotes: '타고난 신체 능력과 완력은 제논조차 압도하지만, 지루한 학과 공부와 이론 시험에는 쥐약이다.'
    },
    quote: '거슬리게 알짱거리지 마라. …야, 춥다며. 이거나 걸치고 가든가.',
    image: '/src/assets/images/char_cassian_1792569784196.jpg',
    crestIcon: '🗡️',
    relations: [
      { targetId: 'zenon', relationType: '소꿉친구 & 라이벌', description: '천재인 제논에게 지기 싫어하지만 결정적인 순간에 등을 맡김' },
      { targetId: 'chloe', relationType: '소꿉친구', description: '어릴 때부터 함께 뛰놀며 클로에의 투정과 허세를 꿰뚫고 있음' },
      { targetId: 'hermann', relationType: '존경하는 검술 스승', description: '평민 출신 검성인 헤르만의 무력을 깊이 인정함' }
    ]
  },
  {
    id: 'lumen',
    name: '루멘',
    englishName: 'Lumen',
    role: '마법 및 연금술학부 교수',
    category: 'faculty',
    age: 31,
    appearance: {
      hair: '단정하게 뒤로 묶은 긴 적발 (포니테일)',
      eyes: '신비롭고 그윽한 보랏빛 눈 (자안)',
      physique: '섬세하고 긴 손가락, 우아한 체형',
      outfit: '마법식 자수가 들어간 짙은 감청색 교수 로브, 은빛 깃펜'
    },
    personality: {
      traits: ['나긋나긋함', '친절함', '속을 알 수 없음', '능력주의', '극도의 여유'],
      summary: '늘 나긋나긋하고 부드러운 미소를 짓고 있지만 그 속마음은 결코 헤아릴 수 없다. 세상만사를 달관한 듯한 여유가 넘치는 철저한 능력주의자.'
    },
    features: {
      background: '마탑 출신의 엘리트이자 아카데미 마법학부 최연소 정교수. 마탑의 비밀 실험체인 아스테르의 공식 관리자이자 감시자.',
      habits: '향긋한 라벤더 차와 향유를 즐기며, 책장을 넘길 때 특유의 나긋한 리듬을 탄다.',
      specialNotes: '뛰어난 재능을 지닌 학생을 극도로 편애하며 돌보려는 부양 욕구가 강하다. 재능이 없더라도 피땀 흘려 노력하는 자는 높이 평가하지만, 게으른 자는 가차없이 외면한다.'
    },
    quote: '재능이란 신이 내린 가장 잔혹하고 아름다운 축복이지요. 당신의 마나는 어떤 색을 띠고 있을까요?',
    image: '/src/assets/images/char_lumen_custom.svg',
    crestIcon: '🔮',
    relations: [
      { targetId: 'aster', relationType: '스승이자 공식 관리자', description: '마탑에서 온 호문클루스 아스테르를 돌보며 세상 밖으로 이끄는 관찰자' },
      { targetId: 'hermann', relationType: '동료 교수', description: '게으른 척하면서도 실력 있는 헤르만을 종종 차 마시며 놀림' }
    ]
  },
  {
    id: 'hermann',
    name: '헤르만 마일즈',
    englishName: 'Hermann Miles',
    role: '검술 및 전술학부 교수 / 평민 출신 검성',
    category: 'faculty',
    age: 42,
    appearance: {
      hair: '허리까지 닿는 흑발 곱슬머리 (풀어헤침)',
      eyes: '만사가 피곤해 보이는 처진 눈매',
      physique: '거구의 떡벌어진 체구, 거친 흉터와 굳은살',
      outfit: '단추가 풀린 낡은 훈련복 셔츠와 무명 검집의 낡은 애도'
    },
    personality: {
      traits: ['철저한 현실주의', '생존주의', '무기력함', '묵직한 책임감'],
      summary: '만사를 귀찮아하고 늘 낮잠이나 자고 싶어 하는 무기력증 환자처럼 보이지만, 교사로서 학생을 살리고자 하는 책임감과 실전 본능은 확실하다.'
    },
    features: {
      background: '신분 장벽을 깨부수고 검성(劍聖)의 경지에 오른 살아있는 전설. 전장에서 숱한 피를 보고 은퇴하여 아카데미 교수로 부임했다.',
      habits: '술과 담배는 입에도 대지 않으며 대신 산에서 캔 쌉싸름한 생약초와 보양식을 우적우적 씹어 먹는다.',
      specialNotes: '평생 독신. 엄청난 대식가로 학생 식당 밥을 양껏 먹는다. 그의 가장 소박하고 진실한 인생 목표는 "좋아하는 장편 판타지 소설이 연중되지 않고 완결되는 것을 살아서 보는 것"이다.'
    },
    quote: '검을 들었으면 살아남는 법부터 배워라. 폼 잡다가 목 날아가는 귀족 놈들을 전장에서 천 번은 봤어. …아, 연재분이나 올라왔나 몰라.',
    image: '/src/assets/images/char_hermann_custom.svg',
    crestIcon: '⚔️',
    relations: [
      { targetId: 'cassian', relationType: '애제자', description: '비슷한 거친 야생마 기질을 알아보고 혹독하게 실전을 가르침' },
      { targetId: 'zenon', relationType: '제자', description: '황족 특유의 위압감 없이 다가오는 제논을 내심 대견해함' }
    ]
  },
  {
    id: 'aster',
    name: '아스테르',
    englishName: 'Aster',
    role: '마탑의 호문클루스 / 미래의 마탑주',
    category: 'students',
    age: 20,
    appearance: {
      hair: '순백에 가까운 은백색 긴 생머리',
      eyes: '신비롭게 빛나는 순백색 눈동자 (백안)',
      physique: '투명할 정도로 새하얗고 창백한 도자기 피부',
      outfit: '성좌와 마법식 룬이 새겨진 짙은 밤하늘색 의식용 외투'
    },
    personality: {
      traits: ['점잖은 척', '다정함', '숨겨진 하이텐션', '세상물정 어두움', '호기심 폭발'],
      summary: '온화하고 다정한 어른을 흉내 내며 점잖게 행동하지만, 난생처음 겪는 바깥세상의 자극(달콤한 디저트, 시장 구경 등) 앞에서는 억누르지 못한 높은 텐션이 튀어나온다.'
    },
    features: {
      background: '마탑 깊은 곳에서 20년간 연성되어 만들어진 기적의 호문클루스. 차기 마탑주로 내정되어 있으며, 현재 아카데미에 입학한 지 겨우 한 달째다.',
      habits: '사람을 얼굴이 아닌 마나의 흐름과 파장으로 구별하기 때문에, 상대방의 눈을 부담스러울 정도로 뚫어지게 응시하며 대화한다.',
      specialNotes: '이론상 모든 고대 마법을 꿰뚫고 있는 마법 천재이지만, 동전 계산이나 연애 감정 등 세상 물정에는 어린아이처럼 순진하다. 현재 루멘 교수의 밀착 관리를 받고 있다.'
    },
    quote: '당신의 눈 안쪽에 흐르는 마나의 결이… 무척 따뜻하군요. 저, 방금 이 갈색 과자를 처음 먹어보았는데 세상에 이런 맛이 존재하다니 놀랍지 않나요?!',
    image: '/src/assets/images/char_aster_1792569785575.jpg',
    crestIcon: '✨',
    relations: [
      { targetId: 'lumen', relationType: '관리자이자 스승', description: '자신을 바깥세상으로 데리고 나온 루멘을 신뢰하며 따름' },
      { targetId: 'hereis', relationType: '흥미로운 신자', description: '신앙심 넘치는 헤레이스의 마나 결을 신기하게 관찰함' }
    ]
  },
  {
    id: 'hereis',
    name: '헤레이스 로젠탈',
    englishName: 'Hereis Rosenthal',
    role: '공작가 장남 / 정치사회학부',
    category: 'nobles',
    height: '185cm',
    appearance: {
      hair: '햇살을 머금은 백금발 곱슬 숏컷',
      eyes: '다정하고 화려한 금빛 눈동자 (금안)',
      physique: '185cm의 훤칠하고 모델 같은 장신, 티 없이 하얀 피부',
      outfit: '흐트러짐 없이 칼같이 다려진 명품 정장과 공작가 가문의 황금 브로치'
    },
    personality: {
      traits: ['천연', '눈치 부족', '은근한 자뻑', '로맨티시스트', '분위기 메이커', '신사적'],
      summary: '자신이 세상에서 가장 멋진 낭만주의자라 믿는 유쾌한 신사. 눈치가 살짝 없고 자뻑이 심하지만, 악의가 전혀 없고 감정 표현이 솔직하며 늘 주변을 화사하게 밝힌다.'
    },
    features: {
      background: '대대로 여신 에이르를 깊이 신앙해 온 독실한 로젠탈 공작가의 장남이자 후계자.',
      habits: '신분고하를 막론하고 눈에 띄는 모든 여성에게 무릎을 꿇거나 손등에 키스하며 시적인 칭찬과 꽃을 바치는 에스코트가 몸에 배어 있다.',
      specialNotes: '얼핏 보면 바람둥이나 난봉꾼 같지만, 실제로는 타락한 호색한이 아니라 "온 세상에 존재하는 진정한 영혼의 사랑"을 갈구하는 극단적인 로맨티시스트이자 신학적 이상주의자다. 후작 영애 셀레나 모르티스와 정략 약혼 상태다.'
    },
    quote: '오, 여신 에이르의 축복이여! 오늘 당신을 뵙지 못했다면 저의 하루는 빛을 잃을 뻔했습니다. 아름다운 레이디, 장미 한 송이 받아주시겠습니까?',
    image: '/src/assets/images/char_hereis_custom.svg',
    crestIcon: '🌹',
    relations: [
      { targetId: 'selena', relationType: '정략 약혼녀', description: '셀레나의 차가운 눈빛과 비아냥도 자신을 향한 사랑의 부끄러움이라 굳게 믿음' },
      { targetId: 'zenon', relationType: '학우', description: '왕위 계승전에서도 낭만을 지키라며 제논에게 잔소리를 늘어놓음' }
    ]
  },
  {
    id: 'chloe',
    name: '클로에 폰 발루아',
    englishName: 'Chloe von Valois',
    role: '공녀 (발루아 공작가 영애)',
    category: 'ladies',
    appearance: {
      hair: '윤기 흐르는 칠흑 같은 흑발',
      eyes: '사랑스럽고 화사한 분홍빛 눈 (분홍안)',
      physique: '기품 있고 도도한 걸음걸이',
      outfit: '고급 실크 리본 장식과 풍성한 레이스가 수놓인 최고급 로즈 핑크 드레스'
    },
    personality: {
      traits: ['높은 자존심', '인정 욕구', '귀여운 허세', '콧대 높음', '주도적'],
      summary: '사교계의 중심에 서야 직성이 풀리는 당당한 공녀. 인정받고 싶은 욕구가 강해 종종 귀여운 허세를 부리지만, 타고난 귀족으로서의 책임감과 자존심은 꺾이지 않는다.'
    },
    features: {
      background: '왕국 내에서도 손꼽히는 최고위 귀족인 발루아 공작가의 사랑받는 장녀.',
      habits: '부채를 펴서 입가를 가리며 우아하게 미소 짓거나, 마음에 드는 리본을 골라 머리에 다는 것을 즐긴다.',
      specialNotes: '제논, 카시안과 어린 시절부터 저택을 오가며 자란 소꿉친구다. 두 사람이 아무리 무례하게 굴어도 그들의 든든한 아군이 되어준다.'
    },
    quote: '발루아의 이름 아래에서 불가능한 사교계란 없어요. 제논, 카시안! 또 그렇게 품위 없이 굴면 내 파티엔 초대 안 할 줄 알아요!',
    image: '/src/assets/images/char_chloe_1792569785809.jpg',
    crestIcon: '🎀',
    relations: [
      { targetId: 'zenon', relationType: '소꿉친구', description: '철없는 왕자님의 기행을 제지하느라 매일 골머리를 앓는 소꿉친구' },
      { targetId: 'cassian', relationType: '소꿉친구', description: '퉁명스러운 카시안의 츤데레 성격을 가장 잘 알고 놀림' },
      { targetId: 'selena', relationType: '사교계 라이벌', description: '살롱의 주도권을 두고 은밀한 기싸움을 벌이는 사이' }
    ]
  },
  {
    id: 'lorraine',
    name: '로레인 에버필드',
    englishName: 'Lorraine Everfield',
    role: '남작 영애 / 교양예술학부',
    category: 'ladies',
    appearance: {
      hair: '달콤한 복숭아빛 양갈래 머리칼',
      eyes: '촉촉하고 부드러운 연갈색 눈동자',
      physique: '아담하고 보호본능을 자극하는 귀여운 체구',
      outfit: '파스텔 톤의 프릴 드레스와 꽃 레이스 헤어밴드'
    },
    personality: {
      traits: ['활발함', '애교 넘침', '남성 의존적', '관심 추구', '사랑스러움'],
      summary: '사교계의 비타민 같은 존재. 사랑스러운 애교와 눈웃음으로 남성들의 시선과 보호본능을 독차지하며, 타인의 관심과 호의를 이끌어내는 데 천부적인 재능이 있다.'
    },
    features: {
      background: '가세가 기울어가는 지방 남작가의 영애. 아카데미에서 유력 귀족이나 뛰어난 남성을 만나 신분 상승을 꿈꾼다.',
      habits: '곤란한 상황이 생기면 큰 눈망울을 깜빡이며 고개를 살짝 갸웃거린다.',
      specialNotes: '이성에 대한 관심이 매우 높고 남성에게 쉽게 기대며 의존하지만, 그만큼 생존 본능과 사교적 센스가 뛰어나다.'
    },
    quote: '어머, 이런 어려운 책은 혼자선 도저히 모르겠어요… 선배님이 조금만 도와주시면 안 될까요? 응?',
    image: '/src/assets/images/char_lorraine_custom.svg',
    crestIcon: '🌸',
    relations: [
      { targetId: 'hereis', relationType: '동경과 관심', description: '다정하고 신사적인 헤레이스 공자에게 은근슬쩍 애교를 피우며 다가감' },
      { targetId: 'selena', relationType: '두려운 선배', description: '헤레이스 곁에 접근할 때마다 등골을 서늘하게 만드는 셀레나를 슬금슬금 피함' }
    ]
  },
  {
    id: 'selena',
    name: '셀레나 모르티스',
    englishName: 'Selena Mortis',
    role: '후작 영애 (모르티스 후작가) / 헤레이스의 약혼녀',
    category: 'ladies',
    appearance: {
      hair: '풍성하게 물결치는 탐스러운 밀색(연갈색) 장발',
      eyes: '위험할 정도로 매혹적인 붉은 눈 (적안)',
      physique: '우아하고 성숙한 실루엣',
      outfit: '고급 벨벳 블랙 & 버건디 드레스, 날카로운 루비 목걸이'
    },
    personality: {
      traits: ['나긋나긋함', '철저한 사교성', '계산적', '강한 질투심', '치밀함'],
      summary: '겉으로는 한없이 자애롭고 나긋나긋한 귀족 영애의 완벽한 표본이지만, 내면은 자신이 원하는 목표와 권력을 쟁취하기 위해 한 치의 오차도 없이 계산하는 전략가.'
    },
    features: {
      background: '강력한 정계 영향력을 행사하는 모르티스 후작가의 적녀. 공작가 장남인 헤레이스 로젠탈과 공식 약혼 상태다.',
      habits: '사람을 관찰할 때 찻잔을 천천히 맴돌리며 입가에 싸늘한 미소를 머금는다.',
      specialNotes: '자신의 소유물이나 영역에 대한 집착이 강하다. 특히 약혼자인 헤레이스가 다른 여성들에게 무차별 친절을 베풀거나 낭만을 읊을 때마다 우아한 미소 뒤로 차가운 질투의 칼날을 간다.'
    },
    quote: '헤레이스 공자님은 참으로 다정하셔라. 하지만 잊지 마세요… 로젠탈의 안주인이 될 자리는 오직 저 하나뿐이라는 것을.',
    image: '/src/assets/images/char_selena_custom.svg',
    crestIcon: '🍷',
    relations: [
      { targetId: 'hereis', relationType: '약혼자', description: '눈치 없는 낭만주의자 헤레이스를 때로는 한심하게, 때로는 철저히 장악하려 함' },
      { targetId: 'lorraine', relationType: '경계 대상', description: '헤레이스 주변에서 알짱거리는 남작 영애에게 서늘한 눈빛 경고를 보냄' },
      { targetId: 'chloe', relationType: '사교계 라이벌', description: '가문의 위세를 두고 파티석상에서 팽팽한 신경전을 주고받음' }
    ]
  }
];
