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
    return 'Sorry, the AI assistant is not properly configured. Please check the environment setup.';
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
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
