export interface CharacterData {
  id: string;
  name: string;
  role: string;
  appearance: string;
  personality: string;
  features: string;
  imageUrl: string;
}

export const CHARACTERS_LORE: CharacterData[] = [
  {
    id: 'zenon',
    name: '제논 레온하르트',
    role: '제국 제7왕자',
    appearance: '짧은 청발과 적안, 탄탄한 체격을 지닌다.',
    personality: '선하고 긍정적이며 호쾌하다. 호기심이 많고 기행을 즐기는 마이페이스지만, 선을 지키고 타인을 배려할 줄 안다.',
    features: '여러 분야에 재능이 뛰어난 천재로 현왕의 총애를 받는다. 인연을 중시하며 유능한 인재를 자기편으로 끌어들인다. 규율에 엄격해 아카데미에서 말썽을 일으키지 않는다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1xMPONcz2nCUAgVXajeQW7QoRiKp_zqJi',
  },
  {
    id: 'cassian',
    name: '카시안 크로스웰',
    role: '후작가 차남',
    appearance: '잿빛 머리와 금안, 날카로운 눈매를 지닌다.',
    personality: '자존감이 강하고 단순하며 행동이 말보다 앞선다. 타인의 시선을 신경 쓰지 않는 만큼 타인에 대한 배려도 부족하다. 친해지면 툭툭거리면서도 챙겨주는 츤데레에 의리파다.',
    features: '사생아 출신으로 일찍 어머니를 여의었다. 강함에 집착하고 직감을 신뢰하며, 확인하고 싶은 것을 입에 넣어 씹는 습관이 있다. 신체 능력은 제논을 압도하지만 학업에는 약하다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1DiPEzu2iwSrXwAktGmzOg6JbjT1k0W1p',
  },
  {
    id: 'lumen',
    name: '루멘',
    role: '31세, 마법부 교수',
    appearance: '긴 적발을 단정하게 묶고 자안을 지녔다. 손가락이 길며 늘 미소를 띤다.',
    personality: '나긋나긋하고 친절하지만 속을 알 수 없다. 모든 것을 통달한 듯한 여유가 있으며, 재능에 따라 사람을 차별하는 능력주의자다.',
    features: '재능 있는 자를 극도로 편애하며 부양 욕구가 강하다. 라벤더를 좋아하고, 재능이 없어도 노력하는 사람은 좋게 평가하지만 게으른 사람은 싫어한다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1_dsMFDeMqXHBQAnlvrs_seBvW8sozUXJ',
  },
  {
    id: 'hermann',
    name: '헤르만 마일즈',
    role: '42세, 검술 교수이자 평민 출신 검성',
    appearance: '거구에 흑발 곱슬머리를 허리까지 기른다. 머리를 묶지 않고 피곤한 눈매를 지녔다.',
    personality: '철저한 현실주의자이자 생존주의자다. 만사를 귀찮아하고 무기력하지만 교사로서의 책임감은 확실하다.',
    features: '독신. 술과 담배를 하지 않으며 대식가다. 생약초 등 몸에 좋은 것을 즐겨 먹는다. 오래 살아 좋아하는 장편소설의 완결을 보는 것이 소박한 목표다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1_lmIITBelAGD2UrAjkjhqt5WFAxMqqzU',
  },
  {
    id: 'aster',
    name: '아스테르',
    role: '20세, 마탑이 만든 호문클루스이자 미래의 마탑주',
    appearance: '은백색 긴 머리와 백안, 투명할 정도로 흰 피부를 지녔다.',
    personality: '다정하고 친절하며 점잖은 어른을 연기한다. 20년간 마탑에 갇혀 책으로만 세상을 배워 이론에는 밝지만 세상 물정에는 어둡다. 처음 겪는 자극 앞에서는 숨겨둔 높은 텐션이 드러난다.',
    features: '마법 천재로 현재 아카데미에 입학한 지 한 달째이며 루멘의 관리 아래 있다. 마나의 경로를 읽어 사람을 구분하기 위해 상대의 눈을 뚫어지게 바라보며 대화한다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/17Lj74UBuFCjDi1IqZMaJBL1EuZ7qoBbb',
  },
  {
    id: 'hereis',
    name: '헤레이스 로젠탈',
    role: '정치사회학부 학생, 공작가 장남',
    appearance: '185cm의 키에 백금발 곱슬 숏컷과 금안, 하얀 피부를 지녔다. 항상 단정한 정장을 착용한다.',
    personality: '천연스럽고 눈치가 부족하며 자뻑이 심하다. 신사적이고 낭만적이며, 차분한 신사보다는 유쾌한 분위기 메이커에 가깝다. 감정 표현이 풍부하다.',
    features: '대대로 여신 에이르를 깊이 신앙하는 명문가 출신이다. 아카데미에서 여성들에게 인기가 가장 많다. 신분을 가리지 않고 여성을 에스코트하고 칭찬하는 것이 습관이다. 난봉꾼이 아니라 진정한 사랑을 믿는 낭만주의자이자 종교에 심취한 인물이다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1Y10aK6NIG_f-90FafeXDCxm0jdbL9gLo',
  },
  {
    id: 'chloe',
    name: '클로에 폰 발루아',
    role: '공녀',
    appearance: '흑발과 분홍색 눈을 지녔으며 리본을 즐겨 착용한다.',
    personality: '자존심과 인정 욕구가 강하고 허세가 심하다. 콧대가 높고 주도적인 성격이다.',
    features: '제논과 카시안의 소꿉친구다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/19AEkBcaUlGjaoqBWqJuMiH4f9rW6RtfE',
  },
  {
    id: 'lorraine',
    name: '로레인 에버필드',
    role: '남작 영애',
    appearance: '복숭아빛 양갈래 머리와 연갈색 눈을 지녔다.',
    personality: '활발하고 애교가 많으며 남성에게 쉽게 의존한다. 이성에게 관심이 많다.',
    features: '타인의 관심과 애정을 얻는 데 능숙하다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1J0XZfa2hz-5uiiHmLKPGEAMtJATf80_F',
  },
  {
    id: 'selena',
    name: '셀레나 모르티스',
    role: '후작 영애, 헤레이스의 약혼녀',
    appearance: '밀색 장발과 적안을 지녔다.',
    personality: '나긋나긋하고 사교적이지만 계산적이다. 질투심이 강하고 원하는 것을 얻기 위해 교묘하게 행동한다.',
    features: '헤레이스의 약혼녀로, 겉으로 드러나는 우아함과 내면의 계산적인 면모가 공존한다.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1vnxOH0JXlbKDaVIsSMv5Kj_eXG2mjwvi',
  },
];
