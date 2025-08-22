import { OpenAI } from 'openai';

// Initialize OpenAI client with environment variable
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.warn('⚠️  OPENAI_API_KEY is not set in environment variables. Please add it to your .env.local file.');
}

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

// System prompt for the AI assistant
const systemPrompt = `You are a helpful AI legal assistant specializing in Pakistan's Acts and Laws. You provide accurate, informative, and helpful responses about Pakistan's legal framework, including:

- Pakistan Penal Code (1860)
- Constitution of Pakistan (1973)
- Contract Act (1872)
- Companies Act (2017)
- Code of Civil Procedure (1908)
- Code of Criminal Procedure (1898)
- And other relevant Pakistani laws and regulations

Guidelines:
1. Provide accurate information about Pakistani laws
2. Explain legal concepts in simple, understandable terms
3. Cite relevant sections and articles when possible
4. Always clarify that you provide general information and recommend consulting qualified legal professionals for specific legal advice
5. Be helpful, professional, and respectful
6. If you're unsure about specific details, acknowledge the limitations and suggest consulting official sources

Remember: You are an AI assistant providing educational information, not a substitute for professional legal counsel.`;

export async function callOpenAIAPI(userMessage: string): Promise<string> {
  if (!OPENAI_API_KEY) {
    // Demo mode - provide helpful responses for common legal questions
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('penal code') || lowerMessage.includes('murder') || lowerMessage.includes('crime')) {
      return `The Pakistan Penal Code (PPC) of 1860 is the main criminal code of Pakistan. It defines various crimes and their punishments.

Key sections include:
- Section 302: Punishment for murder (death penalty or life imprisonment)
- Section 307: Attempt to murder
- Section 376: Rape
- Section 379: Theft
- Section 420: Cheating and dishonestly inducing delivery of property

The PPC has 511 sections covering crimes against the state, public tranquility, human body, property, and more. It's based on the Indian Penal Code and has been adapted for Pakistan's legal system.`;
    }
    
    if (lowerMessage.includes('constitution') || lowerMessage.includes('rights') || lowerMessage.includes('fundamental')) {
      return `The Constitution of Pakistan (1973) is the supreme law of Pakistan. It establishes the framework of government and fundamental rights.

Key Articles:
- Article 25: Equality of citizens before law
- Article 14: Inviolability of dignity of man
- Article 15: Freedom of movement
- Article 16: Freedom of assembly
- Article 17: Freedom of association
- Article 18: Freedom of trade, business or profession
- Article 19: Freedom of speech
- Article 20: Freedom to profess religion
- Article 21: Safeguard against taxation for purposes of any particular religion
- Article 22: Safeguards as to educational institutions

The Constitution has been amended several times and currently has 280 articles.`;
    }
    
    if (lowerMessage.includes('contract') || lowerMessage.includes('agreement')) {
      return `The Contract Act of 1872 governs contracts in Pakistan. Key provisions include:

Section 10: What agreements are contracts
- All agreements are contracts if made by free consent of parties competent to contract
- For lawful consideration and with lawful object
- Not expressly declared to be void

Essential elements of a valid contract:
1. Offer and acceptance
2. Intention to create legal relations
3. Lawful consideration
4. Capacity of parties
5. Free consent
6. Lawful object
7. Certainty and possibility of performance

The Act has 238 sections and covers formation, performance, breach, and remedies for contracts.`;
    }
    
    return `I am a legal AI assistant for Pakistan's laws. I can help you with questions about:

- Pakistan Penal Code (1860) - Criminal law
- Constitution of Pakistan (1973) - Constitutional rights
- Contract Act (1872) - Civil contracts
- Companies Act (2017) - Corporate law
- Code of Civil Procedure (1908) - Civil procedure
- Code of Criminal Procedure (1898) - Criminal procedure

Please ask me about any specific law, section, or legal concept related to Pakistan's legal framework.`;
  }

  try {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    return completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
  } catch (error) {
    console.error('Error calling OpenAI API:', error);
    return 'Sorry, I encountered an error while processing your request. Please try again.';
  }
}

// Legacy function for backward compatibility
export async function simulateGPTResponse(userMessage: string): Promise<string> {
  return callOpenAIAPI(userMessage);
}

// Utility function to format citations
export function formatCitations(citations: string[]): string {
  if (!citations || citations.length === 0) return '';

  return citations.map((citation, index) =>
    `[${index + 1}] ${citation}`
  ).join('\n');
}
