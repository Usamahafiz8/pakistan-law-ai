export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
}

export interface SearchResult {
  title: string;
  act: string;
  category: string;
  excerpt: string;
}

export interface LegalAct {
  id: number;
  title: string;
  year: number;
  category: string;
  description: string;
  sections: number;
  updated: string;
  icon: any;
}
