export interface Character {
  id: string;
  name: string;
  englishName: string;
  role: string;
  category: 'royals' | 'nobles' | 'faculty' | 'students' | 'ladies';
  age?: number;
  height?: string;
  appearance: {
    hair: string;
    eyes: string;
    physique: string;
    outfit: string;
    distinguishingFeatures?: string;
  };
  personality: {
    traits: string[];
    summary: string;
  };
  features: {
    background: string;
    habits: string;
    specialNotes: string;
  };
  quote: string;
  image: string;
  crestIcon: string;
  relations: Array<{
    targetId: string;
    relationType: string;
    description: string;
  }>;
}

export interface PowerFaction {
  id: 'crown' | 'tower' | 'papacy';
  name: string;
  koreanName: string;
  title: string;
  leader: string;
  corePower: string[];
  description: string;
  vulnerability: string;
  color: string;
  badge: string;
}

export interface Faculty {
  id: string;
  name: string;
  deanOrNotable: string;
  description: string;
  badge: string;
  suitableTraits: string[];
}

export interface AcademyEvent {
  id: string;
  name: string;
  season: string;
  description: string;
  nature: 'solemn' | 'festive' | 'competitive' | 'exclusive';
  tag: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: Array<{
    text: string;
    facultyId: string;
  }>;
}
