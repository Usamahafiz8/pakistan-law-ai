import {
  ShieldCheckIcon,
  DocumentTextIcon,
  ScaleIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export interface ActSection {
  number: string;
  title: string;
  content: string;
}

export interface DetailedAct {
  id: number;
  title: string;
  year: number;
  category: string;
  description: string;
  sections: number;
  updated: string;
  icon: any;
  longDescription: string;
  keyFeatures: string[];
  importantSections: ActSection[];
  fullText: string;
  pdfUrl?: string; // Optional PDF URL for each act
}

export const actsDetailedData: Record<number, DetailedAct> = {
  1: {
    id: 1,
    title: 'Pakistan Penal Code',
    year: 1860,
    category: 'Criminal Law',
    description: 'The main criminal code of Pakistan, defining crimes and their punishments.',
    sections: 511,
    updated: '2023',
    icon: ShieldCheckIcon,
    pdfUrl: '/pdfs/pakistan-penal-code-1860.pdf',
    longDescription: `The Pakistan Penal Code (PPC) is the main criminal code of Pakistan. It was originally enacted in 1860 during the British Raj and has been amended several times since Pakistan's independence in 1947. The code defines various crimes and their punishments, serving as the primary source of criminal law in Pakistan.`,
    keyFeatures: [
      'Comprehensive coverage of criminal offenses',
      'Clear definitions of crimes and punishments',
      'Protection of fundamental rights',
      'Balanced approach to justice'
    ],
    importantSections: [
      {
        number: '302',
        title: 'Punishment for murder',
        content: 'Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.'
      },
      {
        number: '376',
        title: 'Punishment for rape',
        content: 'Whoever commits rape shall be punished with imprisonment for life or with imprisonment of either description for a term which may extend to twenty-five years, and shall also be liable to fine.'
      },
      {
        number: '379',
        title: 'Punishment for theft',
        content: 'Whoever commits theft shall be punished with imprisonment of either description for a term which may extend to three years, or with fine, or with both.'
      },
      {
        number: '420',
        title: 'Cheating and dishonestly inducing delivery of property',
        content: 'Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security, or anything which is signed or sealed, and which is capable of being converted into a valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.'
      }
    ],
    fullText: `AN ACT TO PROVIDE A GENERAL PENAL CODE FOR PAKISTAN

WHEREAS it is expedient to provide a general Penal Code for Pakistan; It is enacted as follows:—

CHAPTER I
INTRODUCTION

1. Title and extent of operation of the Code.—This Act shall be called the Pakistan Penal Code, and shall take effect throughout Pakistan.

2. Punishment of offences committed within Pakistan.—Every person shall be liable to punishment under this Code and not otherwise for every act or omission contrary to the provisions thereof, of which he shall be guilty within Pakistan.

3. Punishment of offences committed beyond, but which by law may be tried within Pakistan.—Any person liable, by any Pakistani law, to be tried for an offence committed beyond Pakistan shall be dealt with according to the provisions of this Code for any act committed beyond Pakistan in the same manner as if such act had been committed within Pakistan.

CHAPTER II
GENERAL EXPLANATIONS

4. "Public Servant".—The words "public servant" denote a person falling under any of the descriptions hereinafter following, namely:—

First.—[Repealed by the Federal Laws (Revision and Declaration) Act, 1951 (26 of 1951), s. 3 and Sch., Pt. I.]

Second.—Every Commissioned Officer in the Military, Naval or Air Forces of Pakistan while serving under the Federal Government.

Third.—Every Judge including any person empowered by law to discharge, whether by himself or as a member of any body of persons, any adjudicatory functions.

Fourth.—Every officer of a Court of Justice (including a liquidator, receiver or commissioner) whose duty it is, as such officer, to investigate or report on any matter of law or fact, or to make, authenticate, or keep any document, or to take charge or dispose of any property, or to execute any judicial process, or to administer any oath, or to interpret, or to preserve order in the Court, and every person specially authorized by a Court of Justice to perform any of such duties.

Fifth.—Every juryman, assessor, or member of a panchayat assisting a Court of Justice or public servant.

Sixth.—Every arbitrator or other person to whom any cause or matter has been referred for decision or report by any Court of Justice, or by any other competent public authority.

Seventh.—Every person who holds any office by virtue of which he is empowered to place or keep any person in confinement.

Eighth.—Every officer of the Government whose duty it is, as such officer, to prevent offences, to give information of offences, to bring offenders to justice, or to protect the public health, safety or convenience.

Ninth.—Every officer whose duty it is, as such officer, to take, receive, keep or expend any property on behalf of the Government, or to make any survey, assessment or contract on behalf of the Government, or to execute any revenue process, or to investigate, or to report on, any matter affecting the pecuniary interests of the Government, or to make, authenticate or keep any document relating to the pecuniary interests of the Government, or to prevent the infraction of any law for the protection of the pecuniary interests of the Government.

Tenth.—Every officer whose duty it is, as such officer, to take, receive, keep or expend any property, to make any survey or assessment or to levy any rate or tax for any secular common purpose of any village, town or district, or to make, authenticate or keep any document for the ascertaining of the rights of the people of any village, town or district.

Eleventh.—Every person who holds any office in virtue of which he is empowered to prepare, publish, maintain or revise an electoral roll or to conduct an election or part of an election.

Twelfth.—Every person—
(a) in the service or pay of the Government or remunerated by fees or commission for the performance of any public duty by the Government;
(b) in the service or pay of a local authority, a corporation established by or under a Central, Provincial or State Act or a Government company as defined in section 617 of the Companies Act, 1956 (1 of 1956).

Illustration
A Municipal Commissioner is a public servant.

Explanation 1.—Persons falling under any of the above descriptions are public servants, whether appointed by the Government or not.

Explanation 2.—Wherever the words "public servant" occur, they shall be understood of every person who is in actual possession of the situation of a public servant, whatever legal defect there may be in his right to hold that situation.

Explanation 3.—The word "election" denotes an election for the purpose of selecting members of any legislative, municipal or other public authority, of whatever character, the method of selection to which is by, or under, any law prescribed as by election.

[Continue with full text...]`
  },
  2: {
    id: 2,
    title: 'Constitution of Pakistan',
    year: 1973,
    category: 'Constitutional Law',
    description: 'The supreme law of Pakistan, establishing the framework of government and fundamental rights.',
    sections: 280,
    updated: '2023',
    icon: DocumentTextIcon,
    pdfUrl: '/pdfs/constitution-islamic-republic-of-pakistan-2024-pdf.pdf',
    longDescription: `The Constitution of Pakistan is the supreme law of Pakistan. It was adopted on April 12, 1973, and has been amended several times. The constitution establishes the framework for the government of Pakistan and defines the fundamental rights of its citizens. It is the longest constitution in the world and provides for a federal parliamentary system of government.`,
    keyFeatures: [
      'Federal parliamentary democracy',
      'Separation of powers',
      'Fundamental rights protection',
      'Islamic provisions',
      'Provincial autonomy'
    ],
    importantSections: [
      {
        number: 'Article 25',
        title: 'Equality of citizens',
        content: 'All citizens are equal before law and are entitled to equal protection of law.'
      },
      {
        number: 'Article 9',
        title: 'Security of person',
        content: 'No person shall be deprived of life or liberty save in accordance with law.'
      },
      {
        number: 'Article 10',
        title: 'Safeguards as to arrest and detention',
        content: 'No person who is arrested shall be detained in custody without being informed, as soon as may be, of the grounds for such arrest, nor shall he be denied the right to consult and be defended by a legal practitioner of his choice.'
      },
      {
        number: 'Article 19',
        title: 'Freedom of speech',
        content: 'Every citizen shall have the right to freedom of speech and expression, and there shall be freedom of the press, subject to any reasonable restrictions imposed by law in the interest of the glory of Islam or the integrity, security or defence of Pakistan or any part thereof, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, commission of or incitement to an offence.'
      }
    ],
    fullText: `THE CONSTITUTION OF THE ISLAMIC REPUBLIC OF PAKISTAN

PREAMBLE

Whereas sovereignty over the entire Universe belongs to Almighty Allah alone, and the authority to be exercised by the people of Pakistan within the limits prescribed by Him is a sacred trust;

And whereas it is the will of the people of Pakistan to establish an order :—

Wherein the State shall exercise its powers and authority through the chosen representatives of the people;

Wherein the principles of democracy, freedom, equality, tolerance and social justice, as enunciated by Islam, shall be fully observed;

Wherein the Muslims shall be enabled to order their lives in the individual and collective spheres in accordance with the teachings and requirements of Islam as set out in the Holy Quran and Sunnah;

Wherein adequate provision shall be made for the minorities freely to profess and practise their religions and develop their cultures;

Wherein the territories now included in or in accession with Pakistan and such other territories as may hereafter be included in or accede to Pakistan shall form a Federation wherein the units will be autonomous with such boundaries and limitations on their powers and authority as may be prescribed;

Wherein shall be guaranteed fundamental rights, including equality of status, of opportunity and before law, social, economic and political justice, and freedom of thought, expression, belief, faith, worship and association, subject to law and public morality;

Wherein adequate provision shall be made to safeguard the legitimate interests of minorities and backward and depressed classes;

Wherein the independence of the judiciary shall be fully secured;

Wherein the integrity of the territories of the Federation, its independence and all its rights, including its sovereign rights on land, sea and air, shall be safeguarded;

So that the people of Pakistan may prosper and attain their rightful and honoured place amongst the nations of the World and make their full contribution towards international peace and progress and happiness of humanity;

Now, therefore, we, the people of Pakistan;

Cognisant of our responsibility before Almighty Allah and men;

Cognisant of the sacrifices made by the people in the cause of Pakistan;

Faithful to the declaration made by the Founder of Pakistan, Quaid-i-Azam Mohammad Ali Jinnah, that Pakistan would be a democratic State based on Islamic principles of social justice;

Dedicated to the preservation of democracy achieved by the unremitting struggle of the people against oppression and tyranny;

Inspired by the resolve to protect our national and political unity and solidarity by creating an egalitarian society through a new order;

Do hereby, through our representatives in the National Assembly, adopt, enact and give to ourselves, this Constitution.

[Continue with full text...]`
  },
  3: {
    id: 3,
    title: 'Contract Act',
    year: 1872,
    category: 'Civil Law',
    description: 'Governs the law relating to contracts in Pakistan, including formation and enforcement.',
    sections: 238,
    updated: '2022',
    icon: ScaleIcon,
    pdfUrl: '/pdfs/contract-act-1872.pdf',
    longDescription: `The Contract Act, 1872 is a key piece of legislation that governs the law relating to contracts in Pakistan. It defines what constitutes a valid contract, the rights and obligations of parties, and the remedies available for breach of contract. The act is based on English common law principles and has been adapted to suit Pakistani legal requirements.`,
    keyFeatures: [
      'Formation of contracts',
      'Essential elements of a valid contract',
      'Rights and obligations of parties',
      'Breach and remedies',
      'Special types of contracts'
    ],
    importantSections: [
      {
        number: 'Section 10',
        title: 'What agreements are contracts',
        content: 'All agreements are contracts if they are made by the free consent of parties competent to contract, for a lawful consideration and with a lawful object, and are not hereby expressly declared to be void.'
      },
      {
        number: 'Section 2(h)',
        title: 'Definition of contract',
        content: 'An agreement enforceable by law is a contract.'
      },
      {
        number: 'Section 14',
        title: 'Free consent defined',
        content: 'Consent is said to be free when it is not caused by—(1) coercion, as defined in section 15, or (2) undue influence, as defined in section 16, or (3) fraud, as defined in section 17, or (4) misrepresentation, as defined in section 18, or (5) mistake, subject to the provisions of sections 20, 21 and 22.'
      },
      {
        number: 'Section 73',
        title: 'Compensation for loss or damage caused by breach of contract',
        content: 'When a contract has been broken, the party who suffers by such breach is entitled to receive, from the party who has broken the contract, compensation for any loss or damage caused to him thereby, which naturally arose in the usual course of things from such breach, or which the parties knew, when they made the contract, to be likely to result from the breach of it.'
      }
         ],
     fullText: `THE CONTRACT ACT, 1872

ACT NO. IX OF 1872

[25th April, 1872]

An Act to define and amend certain parts of the law relating to contracts.

Preamble.—WHEREAS it is expedient to define and amend certain parts of the law relating to contracts; It is enacted as follows:—

CHAPTER I
OF THE COMMUNICATION, ACCEPTANCE AND REVOCATION OF PROPOSALS

1. Short title.—This Act may be called the Contract Act, 1872.

Extent.—It extends to the whole of Pakistan.

Commencement.—It shall come into force on the first day of September, 1872.

[Continue with full text...]`
   },
   4: {
     id: 4,
     title: 'Companies Act',
     year: 2017,
     category: 'Corporate Law',
     description: 'Regulates the incorporation and management of companies in Pakistan.',
     sections: 503,
     updated: '2023',
     icon: BuildingLibraryIcon,
     pdfUrl: '/pdfs/companies-act-2017.pdf',
     longDescription: `The Companies Act, 2017 is a comprehensive piece of legislation that regulates the incorporation, management, and dissolution of companies in Pakistan. It replaced the Companies Ordinance, 1984 and provides a modern legal framework for corporate governance, shareholder rights, and corporate compliance.`,
     keyFeatures: [
       'Company incorporation procedures',
       'Corporate governance standards',
       'Shareholder rights protection',
       'Directors duties and responsibilities',
       'Corporate compliance requirements'
     ],
     importantSections: [
       {
         number: 'Section 3',
         title: 'Definition of company',
         content: 'A company means a company formed and registered under this Act or an existing company.'
       },
       {
         number: 'Section 17',
         title: 'Memorandum of association',
         content: 'The memorandum of association of a company shall state—(a) the name of the company; (b) the province in which the registered office of the company is to be situated; (c) the objects for which the company is proposed to be incorporated; (d) the liability of members; and (e) the amount of share capital.'
       }
     ],
     fullText: `THE COMPANIES ACT, 2017

ACT NO. XIX OF 2017

[30th May, 2017]

An Act to consolidate and amend the law relating to companies and to provide for matters connected therewith or incidental thereto.

[Continue with full text...]`
   },
   5: {
     id: 5,
     title: 'Code of Civil Procedure',
     year: 1908,
     category: 'Procedural Law',
     description: 'Provides the procedural framework for civil litigation in Pakistan.',
     sections: 158,
     updated: '2022',
     icon: AcademicCapIcon,
     pdfUrl: '/pdfs/code-of-civil-procedure-1908.pdf',
     longDescription: `The Code of Civil Procedure, 1908 provides the procedural framework for civil litigation in Pakistan. It governs how civil cases are filed, tried, and decided in courts. The code ensures fair and efficient administration of justice in civil matters and provides various remedies for civil disputes.`,
     keyFeatures: [
       'Civil court procedures',
       'Pleadings and evidence',
       'Execution of decrees',
       'Appeals and revisions',
       'Alternative dispute resolution'
     ],
     importantSections: [
       {
         number: 'Order VII, Rule 1',
         title: 'Particulars to be contained in plaint',
         content: 'The plaint shall contain the name of the Court in which the suit is brought, the name, description and place of residence of the plaintiff, the name, description and place of residence of the defendant, and a plain and concise statement of the circumstances constituting the cause of action.'
       },
       {
         number: 'Order VIII, Rule 1',
         title: 'Written statement',
         content: 'The defendant shall, at or before the first hearing or within such time as the Court may permit, present a written statement of his defence.'
       }
     ],
     fullText: `THE CODE OF CIVIL PROCEDURE, 1908

ACT NO. V OF 1908

[21st March, 1908]

An Act to consolidate and amend the laws relating to the procedure of the Courts of Civil Judicature.

[Continue with full text...]`
   },
   6: {
     id: 6,
     title: 'Code of Criminal Procedure',
     year: 1898,
     category: 'Criminal Law',
     description: 'Outlines the procedures for criminal cases and law enforcement in Pakistan.',
     sections: 565,
     updated: '2023',
     icon: ShieldCheckIcon,
     pdfUrl: '/pdfs/code-of-criminal-procedure-1898.pdf',
     longDescription: `The Code of Criminal Procedure, 1898 provides the procedural framework for criminal cases in Pakistan. It governs how criminal cases are investigated, prosecuted, and tried in courts. The code ensures that criminal justice is administered fairly and efficiently while protecting the rights of both victims and accused persons.`,
     keyFeatures: [
       'Criminal investigation procedures',
       'Arrest and bail provisions',
       'Trial procedures',
       'Evidence and witnesses',
       'Appeals and revisions'
     ],
     importantSections: [
       {
         number: 'Section 154',
         title: 'Information in cognizable cases',
         content: 'Every information relating to the commission of a cognizable offence, if given orally to an officer in charge of a police station, shall be reduced to writing by him or under his direction, and be read over to the informant; and every such information, whether given in writing or reduced to writing as aforesaid, shall be signed by the person giving it.'
       },
       {
         number: 'Section 167',
         title: 'Procedure when investigation cannot be completed in twenty-four hours',
         content: 'Whenever any person is arrested and detained in custody, and it appears that the investigation cannot be completed within the period of twenty-four hours fixed by section 61, and there are grounds for believing that the accusation or information is well-founded, the officer in charge of the police station or the police officer making the investigation, if he is not below the rank of sub-inspector, shall forthwith transmit to the nearest Judicial Magistrate a copy of the entries in the diary hereinafter prescribed relating to the case.'
       }
     ],
     fullText: `THE CODE OF CRIMINAL PROCEDURE, 1898

ACT NO. V OF 1898

[22nd March, 1898]

An Act to consolidate and amend the law relating to the Criminal Procedure.

[Continue with full text...]`
   },
   7: {
     id: 7,
     title: 'Acid Control and Acid Crime Prevention Act',
     year: 2011,
     category: 'Criminal Law',
     description: 'Regulates the sale, purchase, and use of acids and provides for prevention of acid crimes.',
     sections: 25,
     updated: '2011',
     icon: ShieldCheckIcon,
     pdfUrl: '/pdfs/Acid Control and Acid Crime Prevention Act, 2011.pdf',
     longDescription: `The Acid Control and Acid Crime Prevention Act, 2011 was enacted to regulate the sale, purchase, and use of acids and to provide for the prevention of acid crimes. The act aims to control the availability of acids and establish strict penalties for acid attacks.`,
     keyFeatures: [
       'Regulation of acid sales',
       'Prevention of acid crimes',
       'Strict penalties for violations',
       'Victim protection measures',
       'Licensing requirements'
     ],
     importantSections: [
       {
         number: 'Section 3',
         title: 'Prohibition of sale of acid',
         content: 'No person shall sell acid to any person without a valid license issued under this Act.'
       },
       {
         number: 'Section 8',
         title: 'Penalty for acid attack',
         content: 'Whoever commits an acid attack shall be punished with imprisonment for life and shall also be liable to fine.'
       }
     ],
     fullText: `ACID CONTROL AND ACID CRIME PREVENTION ACT, 2011

[Continue with full text...]`
   },
   8: {
     id: 8,
     title: 'The Divorce Act',
     year: 1869,
     category: 'Family Law',
     description: 'Governs divorce proceedings for Christians in Pakistan.',
     sections: 44,
     updated: '1869',
     icon: UserGroupIcon,
     pdfUrl: '/pdfs/THE DIVORCE ACT,1869.pdf',
     longDescription: `The Divorce Act, 1869 governs divorce proceedings for Christians in Pakistan. It provides the legal framework for dissolution of marriage, grounds for divorce, and procedures for divorce petitions in courts.`,
     keyFeatures: [
       'Christian divorce procedures',
       'Grounds for divorce',
       'Court jurisdiction',
       'Maintenance provisions',
       'Child custody matters'
     ],
     importantSections: [
       {
         number: 'Section 10',
         title: 'Grounds for dissolution of marriage',
         content: 'Any husband may present a petition to the District Court or High Court, praying that his marriage may be dissolved on the ground that his wife has, since the solemnization thereof, been guilty of adultery.'
       }
     ],
     fullText: `THE DIVORCE ACT, 1869

[Continue with full text...]`
   },
   9: {
     id: 9,
     title: 'Christian Marriage Act',
     year: 1872,
     category: 'Family Law',
     description: 'Regulates Christian marriages in Pakistan.',
     sections: 88,
     updated: '1872',
     icon: UserGroupIcon,
     pdfUrl: '/pdfs/CHRISTIAN_MARRIAGE_ACT,_1872.doc_.pdf',
     longDescription: `The Christian Marriage Act, 1872 regulates Christian marriages in Pakistan. It provides the legal framework for solemnization of Christian marriages, registration requirements, and procedures for marriage ceremonies.`,
     keyFeatures: [
       'Christian marriage procedures',
       'Marriage registration',
       'Officiant requirements',
       'Marriage certificates',
       'Legal validity'
     ],
     importantSections: [
       {
         number: 'Section 4',
         title: 'Persons by whom marriages may be solemnized',
         content: 'Every marriage shall be solemnized by a person who has received episcopal ordination, or by a Clergyman of the Church of Scotland, or by a Minister of Religion licensed under this Act to solemnize marriages.'
       }
     ],
     fullText: `CHRISTIAN MARRIAGE ACT, 1872

[Continue with full text...]`
   },
   10: {
     id: 10,
     title: 'Muslim Family Laws Ordinance',
     year: 1961,
     category: 'Family Law',
     description: 'Regulates Muslim family matters including marriage, divorce, and inheritance.',
     sections: 13,
     updated: '1961',
     icon: UserGroupIcon,
     pdfUrl: '/pdfs/Muslim-Family-Laws-Ordinance-1961.pdf',
     longDescription: `The Muslim Family Laws Ordinance, 1961 regulates various aspects of Muslim family law in Pakistan including marriage, divorce, polygamy, and inheritance. It aims to provide a comprehensive framework for Muslim family matters.`,
     keyFeatures: [
       'Muslim marriage regulations',
       'Divorce procedures',
       'Polygamy restrictions',
       'Inheritance provisions',
       'Family courts'
     ],
     importantSections: [
       {
         number: 'Section 6',
         title: 'Polygamy',
         content: 'No man, during the subsistence of an existing marriage, shall, except with the previous permission in writing of the Arbitration Council, contract another marriage.'
       }
     ],
     fullText: `MUSLIM FAMILY LAWS ORDINANCE, 1961

[Continue with full text...]`
   },
   11: {
     id: 11,
     title: 'Punjab Defamation Act',
     year: 2024,
     category: 'Civil Law',
     description: 'Regulates defamation laws in Punjab province.',
     sections: 20,
     updated: '2024',
     icon: DocumentTextIcon,
     pdfUrl: '/pdfs/punjab-defamation-act-2024-pdf.pdf',
     longDescription: `The Punjab Defamation Act, 2024 regulates defamation laws in Punjab province. It provides legal framework for handling defamation cases, protecting reputation, and establishing procedures for defamation suits.`,
     keyFeatures: [
       'Defamation definitions',
       'Civil remedies',
       'Criminal penalties',
       'Defense mechanisms',
       'Damages assessment'
     ],
     importantSections: [
       {
         number: 'Section 3',
         title: 'Defamation defined',
         content: 'Defamation means the publication of a false statement that injures the reputation of a person or entity.'
       }
     ],
     fullText: `PUNJAB DEFAMATION ACT, 2024

[Continue with full text...]`
   },
   12: {
     id: 12,
     title: 'Pakistan Employment of Children Act',
     year: 1991,
     category: 'Labor Law',
     description: 'Prohibits employment of children and regulates child labor in Pakistan.',
     sections: 18,
     updated: '1991',
     icon: UserGroupIcon,
     pdfUrl: '/pdfs/pakistan-employment-of-children-act-1991.pdf',
     longDescription: `The Pakistan Employment of Children Act, 1991 prohibits the employment of children in certain occupations and processes. It aims to protect children from exploitation and ensure their right to education and development.`,
     keyFeatures: [
       'Child labor prohibition',
       'Age restrictions',
       'Hazardous occupations',
       'Enforcement mechanisms',
       'Penalties for violations'
     ],
     importantSections: [
       {
         number: 'Section 3',
         title: 'Prohibition of employment of children',
         content: 'No child shall be required or permitted to work in any establishment or in any class of establishments.'
       }
     ],
     fullText: `PAKISTAN EMPLOYMENT OF CHILDREN ACT, 1991

[Continue with full text...]`
   },
   13: {
     id: 13,
     title: 'West Pakistan Shops and Establishments Ordinance',
     year: 1969,
     category: 'Labor Law',
     description: 'Regulates working conditions in shops and commercial establishments.',
     sections: 35,
     updated: '1969',
     icon: BuildingLibraryIcon,
     pdfUrl: '/pdfs/the_west_pakistan_shops_and_establishments_ordinance-_1969-pdf.pdf',
     longDescription: `The West Pakistan Shops and Establishments Ordinance, 1969 regulates working conditions, hours of work, holidays, and other employment matters in shops and commercial establishments.`,
     keyFeatures: [
       'Working hours regulation',
       'Holiday provisions',
       'Employment conditions',
       'Health and safety',
       'Inspector powers'
     ],
     importantSections: [
       {
         number: 'Section 8',
         title: 'Hours of work',
         content: 'No employee shall be required or permitted to work in any establishment for more than nine hours in any day and forty-eight hours in any week.'
       }
     ],
     fullText: `WEST PAKISTAN SHOPS AND ESTABLISHMENTS ORDINANCE, 1969

[Continue with full text...]`
   },
   14: {
     id: 14,
     title: 'Juvenile Justice System Act',
     year: 2018,
     category: 'Criminal Law',
     description: 'Provides special procedures for juvenile offenders and their rehabilitation.',
     sections: 50,
     updated: '2018',
     icon: ShieldCheckIcon,
     pdfUrl: '/pdfs/jjsa2018.pdf',
     longDescription: `The Juvenile Justice System Act, 2018 provides special procedures for handling juvenile offenders. It focuses on rehabilitation rather than punishment and establishes juvenile courts and rehabilitation centers.`,
     keyFeatures: [
       'Juvenile court procedures',
       'Rehabilitation programs',
       'Age determination',
       'Special protections',
       'Alternative measures'
     ],
     importantSections: [
       {
         number: 'Section 3',
         title: 'Definitions',
         content: '"Juvenile" means a child who has not attained the age of eighteen years at the time of commission of an offence.'
       }
     ],
     fullText: `JUVENILE JUSTICE SYSTEM ACT, 2018

[Continue with full text...]`
   }
 };
