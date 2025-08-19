// GPT Configuration
export const GPT_URL = 'https://chatgpt.com/g/g-68a3faea8df08191b9ae0dfc0b486030-legal-ai-for-pakistan';

// Simulate GPT response (replace with actual API integration)
export async function simulateGPTResponse(userMessage: string): Promise<string> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
  
  // Generate contextual responses based on user input
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes('constitution') || lowerMessage.includes('constitutional')) {
    return `Based on the Constitution of Pakistan (1973), I can provide you with information about constitutional rights and provisions. 

**Key Constitutional Rights:**
- Article 9: Security of person
- Article 10: Safeguards as to arrest and detention
- Article 14: Inviolability of dignity of man
- Article 15: Freedom of movement
- Article 16: Freedom of assembly
- Article 17: Freedom of association
- Article 18: Freedom of trade, business or profession
- Article 19: Freedom of speech
- Article 20: Freedom to profess religion
- Article 25: Equality of citizens

Could you please specify which constitutional right or provision you'd like to know more about?`;
  }
  
  if (lowerMessage.includes('criminal') || lowerMessage.includes('ppc') || lowerMessage.includes('crpc')) {
    return `I can help you with Pakistani Criminal Law, which includes:

**Pakistan Penal Code (PPC):**
- Defines criminal offenses and their punishments
- Covers crimes against person, property, state, and public tranquility
- Sections 302-376 cover major criminal offenses

**Code of Criminal Procedure (CrPC):**
- Governs the procedure for investigation and trial of criminal cases
- Defines powers of police, courts, and procedures
- Covers arrest, bail, trial, and appeal procedures

**Common Criminal Offenses:**
- Murder (Section 302 PPC)
- Theft (Section 378 PPC)
- Assault (Section 351 PPC)
- Defamation (Section 499 PPC)

What specific criminal law question do you have?`;
  }
  
  if (lowerMessage.includes('civil') || lowerMessage.includes('cpc')) {
    return `I can assist you with Pakistani Civil Law and the Code of Civil Procedure (CPC):

**Code of Civil Procedure (CPC):**
- Governs civil court procedures
- Covers filing suits, pleadings, evidence, and judgments
- Defines jurisdiction of civil courts

**Key Civil Law Areas:**
- Contract Law
- Property Law
- Family Law
- Tort Law
- Commercial Law

**Common Civil Procedures:**
- Filing a civil suit (Order VII CPC)
- Service of summons (Order V CPC)
- Written statements (Order VIII CPC)
- Evidence (Order XVIII CPC)
- Appeals (Order XLI CPC)

Please specify your civil law question for more detailed information.`;
  }
  
  if (lowerMessage.includes('family') || lowerMessage.includes('marriage') || lowerMessage.includes('mflo')) {
    return `I can help you with Pakistani Family Law, including the Muslim Family Laws Ordinance (MFLO):

**Muslim Family Laws Ordinance (MFLO):**
- Governs marriage, divorce, and family matters for Muslims
- Establishes family courts and procedures
- Covers maintenance, custody, and inheritance

**Key Family Law Topics:**
- Marriage registration and requirements
- Divorce procedures (Talaq, Khula, Faskh)
- Maintenance and alimony
- Child custody and guardianship
- Inheritance and succession

**Family Courts:**
- Established under Family Courts Act 1964
- Handle family disputes and matters
- Provide speedy resolution of family issues

What specific family law matter would you like to discuss?`;
  }
  
  if (lowerMessage.includes('tax') || lowerMessage.includes('income tax')) {
    return `I can provide information about Pakistani Tax Law:

**Income Tax Ordinance 2001:**
- Governs income taxation in Pakistan
- Defines taxable income and tax rates
- Covers filing requirements and procedures

**Key Tax Topics:**
- Income tax rates and slabs
- Tax filing deadlines and procedures
- Deductions and exemptions
- Tax appeals and disputes
- Corporate taxation

**Sales Tax:**
- Federal and provincial sales tax
- Registration and filing requirements
- Input and output tax mechanisms

Please specify your tax-related question for detailed guidance.`;
  }
  
  if (lowerMessage.includes('labor') || lowerMessage.includes('employment') || lowerMessage.includes('worker')) {
    return `I can assist you with Pakistani Labor Law:

**Key Labor Laws:**
- Industrial Relations Act 2012
- Factories Act 1934
- Shops and Establishments Ordinance 1969
- Workmen's Compensation Act 1923

**Employee Rights:**
- Minimum wage requirements
- Working hours and overtime
- Leave entitlements (annual, sick, maternity)
- Termination procedures
- Social security benefits

**Employer Obligations:**
- Safe working conditions
- Payment of wages and benefits
- Compliance with labor regulations
- Dispute resolution procedures

What specific labor law question do you have?`;
  }
  
  if (lowerMessage.includes('cyber') || lowerMessage.includes('digital') || lowerMessage.includes('online')) {
    return `I can help you with Pakistani Cybercrime Law:

**Prevention of Electronic Crimes Act (PECA) 2016:**
- Criminalizes various cyber offenses
- Defines electronic evidence procedures
- Establishes investigation and prosecution mechanisms

**Common Cybercrimes:**
- Unauthorized access to information systems
- Electronic fraud and forgery
- Cyber terrorism
- Online harassment and defamation
- Data theft and privacy violations

**Digital Rights:**
- Right to privacy online
- Freedom of expression on digital platforms
- Protection against cyberbullying
- Data protection and security

Please specify your cybercrime law question for detailed information.`;
  }
  
  // Default response
  return `Thank you for your question about Pakistani law. I'm your specialized Legal AI assistant for Pakistan, trained to provide accurate information on:

**Areas of Expertise:**
- Constitutional law and fundamental rights
- Criminal law (PPC, CrPC)
- Civil procedure (CPC)
- Family law (MFLO)
- Tax law and regulations
- Labor and employment law
- Cybercrime statutes (PECA)
- Relevant case law and precedents

Please ask me a specific legal question related to Pakistani law, and I'll provide you with accurate information including relevant statutes, sections, and case law citations.`;
}

// Real API integration function (replace simulateGPTResponse with this)
export async function callLegalAIGPT(message: string): Promise<string> {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        gpt_url: GPT_URL,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error calling Legal AI GPT:', error);
    throw error;
  }
}

// Utility function to format citations
export function formatCitations(citations: string[]): string {
  if (!citations || citations.length === 0) return '';
  
  return citations.map((citation, index) => 
    `[${index + 1}] ${citation}`
  ).join('\n');
}
