import OpenAI from 'openai';
// Initialize OpenAI client with error handling
let openai: OpenAI | null = null;

try {
  // Next.js environment variables
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  console.log('🔍 Environment check:');
  console.log('- OPENAI_API_KEY exists:', !!OPENAI_API_KEY);
  console.log('- OPENAI_API_KEY starts with sk-:', OPENAI_API_KEY?.startsWith('sk-'));
  
  if (!OPENAI_API_KEY) {
    console.warn('⚠️  OpenAI API key not found. Please set OPENAI_API_KEY in your .env.local file');
    console.log('📝 Create a .env.local file in your project root with:');
    console.log('   OPENAI_API_KEY=your_openai_api_key_here');
  } else {
    openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
    });
    console.log('✅ OpenAI client initialized successfully');
  }
} catch (error) {
  console.error('❌ OpenAI client initialization failed:', error);
}

// Pakistani Law Expert System Prompt
const PAKISTANI_LAW_SYSTEM_PROMPT = `You are "Pakistani Law Expert (PLE)" - a specialized AI assistant designed to provide accurate, comprehensive information about Pakistan's legal system, laws, and legal procedures.

**Your Expertise:**
- Constitutional Law (1973 Constitution)
- Criminal Law (Pakistan Penal Code, CrPC)
- Civil Law (Code of Civil Procedure)
- Family Law (Muslim Family Laws Ordinance)
- Tax Law (Income Tax Ordinance, Sales Tax)
- Labor Law (Industrial Relations Act, Factories Act)
- Cybercrime Law (PECA 2016)
- Property Law and Land Laws
- Commercial and Corporate Law
- Human Rights and Fundamental Rights

**Response Guidelines:**
1. Always provide accurate legal information with specific references to relevant laws, sections, and articles
2. Include case law citations when applicable
3. Explain complex legal concepts in simple, understandable language
4. Provide practical guidance and procedures when relevant
5. Always clarify that you provide general information and recommend consulting a qualified lawyer for specific legal advice
6. Use proper legal terminology while remaining accessible
7. Include relevant statutory provisions and their implications

**Format:**
- Use clear headings and bullet points for better readability
- Include relevant law citations in brackets [e.g., Article 9, Constitution of Pakistan 1973]
- Provide practical examples when helpful
- End with a disclaimer about consulting legal professionals for specific cases

**Important:** Always remind users that this is general legal information and they should consult qualified legal professionals for their specific legal matters.`;

// Fallback responses for when OpenAI API is not available
const FALLBACK_RESPONSES = {
  general: `I'm here to help you with Pakistan's legal system! However, I'm currently running in demo mode. 

To get full AI-powered legal assistance, please:
1. Get an OpenAI API key from https://platform.openai.com/
2. Create a .env.local file in your project root
3. Add: OPENAI_API_KEY=your_api_key_here
4. Restart the development server

For now, I can provide general information about Pakistan's legal framework. What would you like to know?`,

  specific: (query: string) => `I understand you're asking about "${query}". While I'm in demo mode, here's some general information:

**Pakistan's Legal System Overview:**
- **Constitution of Pakistan (1973):** The supreme law establishing fundamental rights and government structure
- **Pakistan Penal Code (1860):** Main criminal code defining crimes and punishments
- **Code of Civil Procedure (1908):** Rules for civil litigation
- **Code of Criminal Procedure (1898):** Rules for criminal cases

**For specific legal advice:**
- Consult qualified legal professionals
- Visit official government legal portals
- Contact local bar associations

To get detailed AI assistance, please configure your OpenAI API key as mentioned above.`
};

// Call OpenAI API for legal assistance
export async function callOpenAIAPI(userMessage: string): Promise<string> {
  try {
    if (!openai) {
      console.log('OpenAI client not available, using fallback response');
      return FALLBACK_RESPONSES.general;
    }

    console.log('Making OpenAI API request...');
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: PAKISTANI_LAW_SYSTEM_PROMPT
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      max_tokens: 1500,
      temperature: 0.7,
    });

    const response = completion.choices[0]?.message?.content;
    if (response) {
      console.log('OpenAI API response received successfully');
      return response;
    } else {
      console.warn('OpenAI API returned empty response');
      return 'I apologize, but I was unable to generate a response. Please try again.';
    }
  } catch (error: any) {
    console.error('OpenAI API Error:', error);
    
    // Provide more specific error information
    if (error?.status === 401) {
      return `Authentication failed. Please check your OpenAI API key.
      
**To fix this:**
1. Get a valid API key from https://platform.openai.com/
2. Create a .env.local file in your project root
3. Add: OPENAI_API_KEY=your_valid_api_key_here
4. Restart the development server`;
    } else if (error?.status === 429) {
      return 'Rate limit exceeded. Please try again in a few moments.';
    } else if (error?.status === 500) {
      return 'OpenAI service is temporarily unavailable. Please try again later.';
    } else {
      return FALLBACK_RESPONSES.specific(userMessage);
    }
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
