'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import {
  MagnifyingGlassIcon,
  BookOpenIcon,
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon,
  ArrowRightIcon,
  StarIcon,
  DocumentTextIcon,
  ScaleIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  PlusIcon,
  TrashIcon,
  PaperAirplaneIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import { ChatMessage, ChatThread } from '@/types/chat';
import PdfButton from '@/components/PdfButton';

// Sample data for acts and laws
const actsData = [
  {
    id: 1,
    title: 'Pakistan Penal Code',
    year: 1860,
    category: 'Criminal Law',
    description: 'The main criminal code of Pakistan, defining crimes and their punishments.',
    sections: 511,
    updated: '2023',
    icon: ShieldCheckIcon,
    pdfUrl: '/pdfs/pakistan-penal-code-1860.pdf'
  },
  {
    id: 2,
    title: 'Constitution of Pakistan',
    year: 1973,
    category: 'Constitutional Law',
    description: 'The supreme law of Pakistan, establishing the framework of government and fundamental rights.',
    sections: 280,
    updated: '2023',
    icon: DocumentTextIcon,
    pdfUrl: '/pdfs/constitution-islamic-republic-of-pakistan-2024-pdf.pdf'
  },
  {
    id: 3,
    title: 'Contract Act',
    year: 1872,
    category: 'Civil Law',
    description: 'Governs the law relating to contracts in Pakistan, including formation and enforcement.',
    sections: 238,
    updated: '2022',
    icon: ScaleIcon,
    pdfUrl: '/pdfs/contract-act-1872.pdf'
  },
  {
    id: 4,
    title: 'Companies Act',
    year: 2017,
    category: 'Corporate Law',
    description: 'Regulates the incorporation and management of companies in Pakistan.',
    sections: 503,
    updated: '2023',
    icon: BuildingLibraryIcon,
    pdfUrl: '/pdfs/companies-act-2017.pdf'
  },
  {
    id: 5,
    title: 'Code of Civil Procedure',
    year: 1908,
    category: 'Procedural Law',
    description: 'Provides the procedural framework for civil litigation in Pakistan.',
    sections: 158,
    updated: '2022',
    icon: AcademicCapIcon,
    pdfUrl: '/pdfs/code-of-civil-procedure-1908.pdf'
  },
  {
    id: 6,
    title: 'Code of Criminal Procedure',
    year: 1898,
    category: 'Criminal Law',
    description: 'Outlines the procedures for criminal cases and law enforcement in Pakistan.',
    sections: 565,
    updated: '2023',
    icon: ShieldCheckIcon,
    pdfUrl: '/pdfs/code-of-criminal-procedure-1898.pdf'
  },
  {
    id: 7,
    title: 'Acid Control and Acid Crime Prevention Act',
    year: 2011,
    category: 'Criminal Law',
    description: 'Regulates the sale, purchase, and use of acids and provides for prevention of acid crimes.',
    sections: 25,
    updated: '2011',
    icon: ShieldCheckIcon,
    pdfUrl: '/pdfs/Acid Control and Acid Crime Prevention Act, 2011.pdf'
  },
  {
    id: 8,
    title: 'The Divorce Act',
    year: 1869,
    category: 'Family Law',
    description: 'Governs divorce proceedings for Christians in Pakistan.',
    sections: 44,
    updated: '1869',
    icon: UserGroupIcon,
    pdfUrl: '/pdfs/THE DIVORCE ACT,1869.pdf'
  },
  {
    id: 9,
    title: 'Christian Marriage Act',
    year: 1872,
    category: 'Family Law',
    description: 'Regulates Christian marriages in Pakistan.',
    sections: 88,
    updated: '1872',
    icon: UserGroupIcon,
    pdfUrl: '/pdfs/CHRISTIAN_MARRIAGE_ACT,_1872.doc_.pdf'
  },
  {
    id: 10,
    title: 'Muslim Family Laws Ordinance',
    year: 1961,
    category: 'Family Law',
    description: 'Regulates Muslim family matters including marriage, divorce, and inheritance.',
    sections: 13,
    updated: '1961',
    icon: UserGroupIcon,
    pdfUrl: '/pdfs/Muslim-Family-Laws-Ordinance-1961.pdf'
  },
  {
    id: 11,
    title: 'Punjab Defamation Act',
    year: 2024,
    category: 'Civil Law',
    description: 'Regulates defamation laws in Punjab province.',
    sections: 20,
    updated: '2024',
    icon: DocumentTextIcon,
    pdfUrl: '/pdfs/punjab-defamation-act-2024-pdf.pdf'
  },
  {
    id: 12,
    title: 'Pakistan Employment of Children Act',
    year: 1991,
    category: 'Labor Law',
    description: 'Prohibits employment of children and regulates child labor in Pakistan.',
    sections: 18,
    updated: '1991',
    icon: UserGroupIcon,
    pdfUrl: '/pdfs/pakistan-employment-of-children-act-1991.pdf'
  },
  {
    id: 13,
    title: 'West Pakistan Shops and Establishments Ordinance',
    year: 1969,
    category: 'Labor Law',
    description: 'Regulates working conditions in shops and commercial establishments.',
    sections: 35,
    updated: '1969',
    icon: BuildingLibraryIcon,
    pdfUrl: '/pdfs/the_west_pakistan_shops_and_establishments_ordinance-_1969-pdf.pdf'
  },
  {
    id: 14,
    title: 'Juvenile Justice System Act',
    year: 2018,
    category: 'Criminal Law',
    description: 'Provides special procedures for juvenile offenders and their rehabilitation.',
    sections: 50,
    updated: '2018',
    icon: ShieldCheckIcon,
    pdfUrl: '/pdfs/jjsa2018.pdf'
  }
];

const popularSearches = [
  'murder punishment',
  'property rights',
  'contract law',
  'constitutional rights',
  'criminal procedure'
];

const recentSearches = [
  'Pakistan Penal Code - Section 302',
  'Pakistan Penal Code (1860)'
];

const searchResults = [
  {
    title: 'Pakistan Penal Code - Section 302',
    act: 'Pakistan Penal Code (1860)',
    category: 'Criminal Law',
    excerpt: 'Punishment for murder. Whoever commits murder shall be punished with death, or imprisonment for life...'
  },
  {
    title: 'Constitution - Article 25',
    act: 'Constitution of Pakistan (1973)',
    category: 'Constitutional Law',
    excerpt: 'Equality of citizens. All citizens are equal before law and are entitled to equal protection of law...'
  },
  {
    title: 'Contract Act - Section 10',
    act: 'Contract Act (1872)',
    category: 'Civil Law',
    excerpt: 'What agreements are contracts. All agreements are contracts if they are made by the free consent...'
  }
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [chatThreads, setChatThreads] = useState<ChatThread[]>([]);
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSearchResults(true);
    }
  };

  // Helper functions for chat management
  const createNewThread = () => {
    const newThread: ChatThread = {
      id: Date.now().toString(),
      title: 'New Conversation',
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
    setChatThreads(prev => [newThread, ...prev]);
    setActiveThreadId(newThread.id);
    setCurrentMessage('');
  };

  const deleteThread = (threadId: string) => {
    setChatThreads(prev => prev.filter(thread => thread.id !== threadId));
    if (activeThreadId === threadId) {
      setActiveThreadId(chatThreads.length > 1 ? chatThreads[1]?.id || null : null);
    }
  };

  const updateThreadTitle = (threadId: string, title: string) => {
    setChatThreads(prev => prev.map(thread => 
      thread.id === threadId 
        ? { ...thread, title, updatedAt: new Date() }
        : thread
    ));
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // useEffect(() => {
  //   scrollToBottom();
  // }, [chatThreads]);

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim() || !activeThreadId) return;
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: currentMessage,
      timestamp: new Date()
    };

    // Store the message content before clearing it
    const messageToSend = currentMessage;

    // Add user message to thread
    setChatThreads(prev => prev.map(thread => 
      thread.id === activeThreadId 
        ? { 
            ...thread, 
            messages: [...thread.messages, userMessage],
            updatedAt: new Date(),
            title: thread.messages.length === 0 ? currentMessage.slice(0, 30) + '...' : thread.title
          }
        : thread
    ));

    setCurrentMessage('');
    setIsAiLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageToSend }),
      });

      if (response.ok) {
        const data = await response.json();
        const aiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: data.response,
          timestamp: new Date()
        };
        // Add AI response to thread
        setChatThreads(prev => prev.map(thread => 
          thread.id === activeThreadId 
            ? { 
                ...thread, 
                messages: [...thread.messages, aiMessage],
                updatedAt: new Date()
              }
            : thread
        ));
      } else {
        console.error('API response not ok:', response.status);
        const errorMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
          timestamp: new Date()
        };

        setChatThreads(prev => prev.map(thread => 
          thread.id === activeThreadId 
            ? { 
                ...thread, 
                messages: [...thread.messages, errorMessage],
                updatedAt: new Date()
              }
            : thread
        ));
      }
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date()
      };

      setChatThreads(prev => prev.map(thread => 
        thread.id === activeThreadId 
          ? { 
              ...thread, 
              messages: [...thread.messages, errorMessage],
              updatedAt: new Date()
            }
          : thread
      ));
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <ScaleIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">LawPak</h1>
                <p className="text-sm text-gray-600">Acts & Laws of Pakistan</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="#browse" className="text-gray-700 hover:text-green-600 transition-colors">Browse Acts</a>
              {/* <a href="#search" className="text-gray-700 hover:text-green-600 transition-colors">Search Laws</a> */}
              <a href="#ai" className="text-gray-700 hover:text-green-600 transition-colors">Ask AI</a>
              {/* <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a> */}
              <a 
                href="https://calendly.com/aishhhussain/30min" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
              >
                <CalendarIcon className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </a>
            </nav>
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Pakistan's Complete
              <br />
              <span className="text-green-200">Legal Database</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-green-100 px-4"
            >
              Access all Acts and Laws of Pakistan with AI-powered assistance. Get instant answers, understand complex legal language, and navigate Pakistan's legal framework with confidence.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <a href="#browse">  
              <button className="bg-white text-green-700 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors text-sm sm:text-base">
                Browse Acts & Laws
              </button></a> 

              <a href="#ai">

              <button  className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors text-sm sm:text-base">
                Ask Legal Assistant
              </button>
              </a>

              <a 
                href="https://calendly.com/aishhhussain/30min" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="border-2 border-green-200 text-green-200 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-green-200 hover:text-green-700 transition-colors text-sm sm:text-base inline-flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>Schedule Consultation</span>
                </button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">Trusted by legal professionals, students, and citizens</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpenIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Acts & Laws</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">AI Assistant</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserGroupIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Free Access</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      {/* <section id="search" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">Smart Legal Search</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Find specific laws, acts, and legal provisions with our intelligent search
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4">
            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for laws, acts, sections, or legal terms..."
                    className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Popular searches:</h3>
                <div className="space-y-2">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(search)}
                      className="block w-full text-left px-3 sm:px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Recent Searches</h3>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(search)}
                      className="block w-full text-left px-3 sm:px-4 py-2 text-gray-700 hover:bg-green-50 rounded-lg transition-colors text-sm sm:text-base"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {showSearchResults && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 space-y-4"
              >
                {searchResults.map((result, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{result.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mb-2">{result.act}</p>
                    <p className="text-xs sm:text-sm text-green-600 mb-3">{result.category}</p>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">{result.excerpt}</p>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="text-green-600 hover:text-green-700 font-semibold text-sm sm:text-base">
                        Read Full Section
                      </button>
                      <button className="text-green-600 hover:text-green-700 font-semibold text-sm sm:text-base">
                        Ask AI About This
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section> */}

      {/* Search Features */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MagnifyingGlassIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Search</h3>
              <p className="text-gray-600">AI-powered search understands legal context and terminology</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Filters</h3>
              <p className="text-gray-600">Filter by act, year, category, and legal domain</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRightIcon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cross-Reference</h3>
              <p className="text-gray-600">Find related sections and cited cases automatically</p>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Browse Acts Section */}
      <section id="browse" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">Browse Acts & Laws</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Explore Pakistan's comprehensive legal framework with detailed information about each act and law
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 px-4">Most Referenced Acts</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
              {actsData.slice(0, 3).map((act, index) => (
                <motion.div 
                  key={act.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <act.icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">({act.year})</span>
                  </div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{act.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{act.description}</p>
                  <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 mb-4">
                    <span>{act.sections} sections</span>
                    <span>Updated {act.updated}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Link href={`/acts/${act.id}`} className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base block text-center">
                      Read Full Text
                    </Link>
                    {act.pdfUrl && (
                      <PdfButton 
                        pdfUrl={act.pdfUrl} 
                        title={act.title}
                        className="w-full"
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 px-4">All Acts & Laws</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4">
              {actsData.map((act, index) => (
                <motion.div 
                  key={act.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900">{act.title}</h4>
                    <span className="text-xs sm:text-sm text-gray-500">({act.year})</span>
                  </div>
                  <p className="text-gray-600 mb-3 text-xs sm:text-sm">{act.description}</p>
                  <div className="flex justify-between items-center text-xs sm:text-sm text-gray-500 mb-3">
                    <span>{act.sections} sections</span>
                    <span>Updated {act.updated}</span>
                  </div>
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mb-3">
                    {act.category}
                  </span>
                  <div className="flex flex-col gap-2">
                    <Link href={`/acts/${act.id}`} className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base block text-center">
                      Read Full Text
                    </Link>
                    {act.pdfUrl && (
                      <PdfButton 
                        pdfUrl={act.pdfUrl} 
                        title={act.title}
                        className="w-full"
                      />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8 px-4">
              <button className="bg-green-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-sm sm:text-base">
                View All 500+ Acts & Laws
              </button>
            </div>
          </div>
        </div>
      </section>

             {/* AI Assistant Section */}
       <section id="ai" className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 px-4">AI Legal Assistant</h2>
             <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
               Multi-threaded chat with AI assistant for Pakistan's Acts and Laws
             </p>
           </div>

           <div className="max-w-6xl mx-auto px-4">
             <div className="bg-gray-50 rounded-lg overflow-hidden">
               {/* Chat Header */}
               <div className="bg-green-600 text-white p-4 sm:p-6">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <ChatBubbleLeftRightIcon className="w-6 h-6" />
                     <div>
                       <h3 className="text-lg sm:text-xl font-semibold">Legal AI Assistant</h3>
                       <p className="text-green-100 text-sm">Multi-threaded conversations about Pakistan's laws</p>
                     </div>
                   </div>
                   <button
                     onClick={createNewThread}
                     className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors text-sm flex items-center gap-2"
                   >
                     <PlusIcon className="w-4 h-4" />
                     New Chat
                   </button>
                 </div>
               </div>

               <div className="flex h-[600px]">
                 {/* Threads Sidebar */}
                 <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
                   <div className="p-4 border-b border-gray-200">
                     <h4 className="font-semibold text-gray-900 mb-2">Conversations</h4>
                     <p className="text-xs text-gray-600">Your chat history</p>
                   </div>
                   
                   <div className="flex-1 overflow-y-auto">
                     {chatThreads.length === 0 ? (
                       <div className="p-4 text-center text-gray-500">
                         <ChatBubbleLeftRightIcon className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                         <p className="text-sm">No conversations yet</p>
                         <p className="text-xs">Start a new chat to begin</p>
                       </div>
                     ) : (
                       <div className="space-y-1 p-2">
                         {chatThreads.map((thread) => (
                           <motion.div
                             key={thread.id}
                             initial={{ opacity: 0, x: -20 }}
                             animate={{ opacity: 1, x: 0 }}
                             className={`p-3 rounded-lg cursor-pointer transition-colors ${
                               activeThreadId === thread.id
                                 ? 'bg-green-100 text-green-800 border border-green-200'
                                 : 'hover:bg-gray-50 text-gray-700'
                             }`}
                             onClick={() => setActiveThreadId(thread.id)}
                           >
                             <div className="flex items-center justify-between">
                               <div className="flex-1 min-w-0">
                                 <h5 className="font-medium text-sm truncate">{thread.title}</h5>
                                 <p className="text-xs text-gray-500 truncate">
                                   {thread.messages.length} messages
                                 </p>
                               </div>
                               <button
                                 onClick={(e) => {
                                   e.stopPropagation();
                                   deleteThread(thread.id);
                                 }}
                                 className="text-gray-400 hover:text-red-500 transition-colors p-1"
                               >
                                 <TrashIcon className="w-4 h-4" />
                               </button>
                             </div>
                           </motion.div>
                         ))}
                       </div>
                     )}
                   </div>
                 </div>

                 {/* Chat Area */}
                 <div className="flex-1 flex flex-col">
                   {activeThreadId ? (
                     <>
                       {/* Messages */}
                       <div className="flex-1 overflow-y-auto p-4 space-y-4  text-gray-600">
                         {chatThreads.find(t => t.id === activeThreadId)?.messages.map((message) => (
                           <motion.div
                             key={message.id}
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                           >
                             <div className={`max-w-[80%] p-3 rounded-lg ${
                               message.role === 'user'
                                 ? 'bg-green-600 text-white'
                                 : 'bg-white border border-gray-200'
                             }`}>
                               <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                               <p className={`text-xs mt-1 ${
                                 message.role === 'user' ? 'text-sm text-gray-600' : 'text-gray-500'
                               }`}>
                                 {message.timestamp.toLocaleTimeString()}
                               </p>
                             </div>
                           </motion.div>
                         ))}
                         {isAiLoading && (
                           <motion.div
                             initial={{ opacity: 0, y: 10 }}
                             animate={{ opacity: 1, y: 0 }}
                             className="flex justify-start"
                           >
                             <div className="bg-white border border-gray-200 p-3 rounded-lg">
                               <div className="flex items-center gap-2">
                                 <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></div>
                                 <span className="text-sm text-gray-600">AI is thinking...</span>
                               </div>
                             </div>
                           </motion.div>
                         )}
                         <div className='text-sm text-gray-600' ref={messagesEndRef} />
                       </div>

                       {/* Input Form */}
                       <div className="p-4 border-t border-gray-200">
                         <form onSubmit={handleAiSubmit} className="flex gap-3">
                                                       <input
                              type="text"
                              value={currentMessage}
                              onChange={(e) => setCurrentMessage(e.target.value)}
                              placeholder="Ask about any law or act in Pakistan..."
                              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm text-gray-900 bg-white"
                              disabled={isAiLoading}
                            />
                           <button
                             type="submit"
                             disabled={isAiLoading || !currentMessage.trim()}
                             className="bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                           >
                             <PaperAirplaneIcon className="w-4 h-4" />
                           </button>
                         </form>
                         
                         {/* Example Questions */}
                         <div className="mt-3">
                           <p className="text-xs text-gray-600 mb-2">💡 Try asking:</p>
                           <div className="flex flex-wrap gap-2">
                             {["What is the Penal Code?", "Explain contract law", "Rights under Constitution"].map((example, index) => (
                               <button
                                 key={index}
                                 onClick={() => setCurrentMessage(example)}
                                 className="text-xs text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 px-3 py-1 rounded-full transition-colors"
                               >
                                 {example}
                               </button>
                             ))}
                           </div>
                         </div>
                       </div>
                     </>
                   ) : (
                     <div className="flex-1 flex items-center justify-center">
                       <div className="text-center text-gray-500">
                         <ChatBubbleLeftRightIcon className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                         <h3 className="text-lg font-semibold mb-2">Welcome to Legal AI Assistant</h3>
                         <p className="text-sm mb-4">Start a new conversation to ask about Pakistan's laws</p>
                         <button
                           onClick={createNewThread}
                           className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                         >
                           Start New Chat
                         </button>
                       </div>
                     </div>
                   )}
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-1 sm:col-span-2 lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                  <ScaleIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">LawPak</h3>
                  <p className="text-sm text-gray-400">Acts & Laws of Pakistan</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Your comprehensive digital platform for accessing and understanding Pakistan's legal framework. Empowering citizens, students, and legal professionals with accurate legal information.
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                  <EnvelopeIcon className="w-4 h-4 mr-2" />
                  info@lawpak.gov.pk
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  +92-51-1234-5678
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="w-4 h-4 mr-2" />
                  Islamabad, Pakistan
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Constitution of Pakistan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pakistan Penal Code</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contract Act</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Companies Act</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Civil Procedure Code</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Legal Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Constitutional Law</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Criminal Law</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Civil Law</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate Law</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tax Law</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                © 2024 LawPak. All rights reserved. | Government of Pakistan
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Disclaimer */}
      <div className="bg-yellow-50 border-t border-yellow-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-yellow-800 text-center">
            <strong>Legal Disclaimer:</strong> This platform provides information for educational and reference purposes only. Always consult with qualified legal professionals for specific legal advice. The AI assistant provides general guidance and should not be considered as professional legal counsel.
          </p>
        </div>
      </div>
    </div>
  );
}
