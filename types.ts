
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface SiteConfig {
  name: string;
  heroTitle: string;
  heroSub: string;
}
