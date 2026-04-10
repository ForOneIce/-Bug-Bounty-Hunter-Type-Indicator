export type Dimension = 'exploration' | 'wisdom' | 'diligence' | 'ambition' | 'technique' | 'stage' | 'unethical';

export interface Score {
  dimension: Dimension;
  value: number;
}

export interface Option {
  text: string;
  scores: Score[];
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Personality {
  id: string;
  name: string;
  nameEn?: string;
  house: 'Gryffindor' | 'Ravenclaw' | 'Hufflepuff' | 'Slytherin' | 'Ministry' | 'Azkaban';
  match: string;
  quote: string;
  attributes: {
    curiosity: number;
    depth: number;
    systemic: number;
    ambition: number;
    exploration: number;
    diligence: number;
  };
  advantages: string;
  curses: string;
  recommendedSpells: string[];
  bestTeammates?: { type: string; synergy: string }[];
  developmentStages?: {
    initial: { name: string; description: string };
    growth: { name: string; description: string };
    mature: { name: string; description: string };
  };
}
