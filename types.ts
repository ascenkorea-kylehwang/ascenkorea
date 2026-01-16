
export type ViewState = 'home' | 'company' | 'products' | 'tech' | 'support' 
  | 'products-modules' | 'products-antennas' | 'products-receivers'
  | 'project-infra' | 'project-mobility' | 'project-mapping';

export type Language = 'ko' | 'en';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface SiteConfig {
  name: string;
  heroTitle: string;
  heroSub: string;
}
