
export enum FormStep {
  SECTOR = 'SECTOR',
  SCALE = 'SCALE',
  FRICTION = 'FRICTION',
  SUCCESS = 'SUCCESS'
}

export interface FormData {
  sector: string;
  scale: string;
  friction: string;
}

export type Sector = 
  | 'WELLNESS & LONGEVITY' 
  | 'INDUSTRIAL & METALLURGY' 
  | 'PREMIUM DTC' 
  | 'LUXURY REAL ESTATE' 
  | 'PROFESSIONAL SERVICES';

export type RevenueBracket = '< $50k/mo' | '$50k - $250k/mo' | '$250k - $1M/mo' | '> $1M/mo';
