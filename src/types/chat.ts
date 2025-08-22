export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatThread {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ChatState {
  threads: ChatThread[];
  activeThreadId: string | null;
  isLoading: boolean;
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
