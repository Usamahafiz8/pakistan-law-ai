'use client';

import { useState, useRef, useEffect } from 'react';
import { Scale, Trash2, Send, Bot, User } from 'lucide-react';
import { ChatMessage } from '@/types/chat';
import { simulateGPTResponse } from '@/utils/ai';

export default function Home() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: `Hello! I'm your Legal AI assistant for Pakistan. I can help you with:

**Areas of Expertise:**
- Constitutional law and rights
- Criminal law (PPC, CrPC)
- Civil procedure (CPC)
- Family law (MFLO)
- Tax law and regulations
- Labor law
- Cybercrime statutes
- Case law and precedents

Ask me any legal question related to Pakistani law, and I'll provide accurate information with proper citations.`,
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Load chat history from localStorage
    const savedMessages = localStorage.getItem('chatHistory');
    if (savedMessages) {
      try {
        const parsedMessages = JSON.parse(savedMessages);
        // Convert timestamp strings back to Date objects
        const messagesWithDates = parsedMessages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setMessages(messagesWithDates);
      } catch (error) {
        console.error('Error loading chat history:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Save messages to localStorage whenever messages change
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  const autoResizeTextarea = () => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = Math.min(inputRef.current.scrollHeight, 120) + 'px';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    autoResizeTextarea();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    const message = inputValue.trim();
    if (!message || isLoading) return;

    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Reset textarea height
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
    }

    try {
      // Simulate API call
      const response = await simulateGPTResponse(message);
      
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'assistant',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: 'I apologize, but I encountered an error while processing your request. Please try again or contact support if the issue persists.',
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const clearChat = () => {
    if (confirm('Are you sure you want to clear the chat history?')) {
      const welcomeMessage: ChatMessage = {
        id: '1',
        text: `Hello! I'm your Legal AI assistant for Pakistan. I can help you with:

**Areas of Expertise:**
- Constitutional law and rights
- Criminal law (PPC, CrPC)
- Civil procedure (CPC)
- Family law (MFLO)
- Tax law and regulations
- Labor law
- Cybercrime statutes
- Case law and precedents

Ask me any legal question related to Pakistani law, and I'll provide accurate information with proper citations.`,
        sender: 'assistant',
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
      localStorage.removeItem('chatHistory');
    }
  };

  const formatMessage = (text: string) => {
    // Convert **text** to bold
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert *text* to italic
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Convert line breaks to paragraphs
    text = text.replace(/\n\n/g, '</p><p>');
    text = text.replace(/\n/g, '<br>');
    
    // Wrap in paragraph tags
    if (!text.startsWith('<p>')) {
      text = '<p>' + text + '</p>';
    }
    
    return text;
  };

  const formatTime = (date: Date) => {
    // Ensure date is a valid Date object
    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime())) {
      return 'Just now';
    }
    return dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <Scale className="logo-icon" />
            <h1>Legal AI for Pakistan</h1>
          </div>
          <div className="header-actions">
            <button className="clear-chat-btn" onClick={clearChat}>
              <Trash2 size={16} />
              Clear Chat
            </button>
          </div>
        </div>
      </header>

      {/* Main Chat Container */}
      <main className="chat-container">
        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}-message`}>
              <div className="message-avatar">
                {message.sender === 'user' ? (
                  <User size={16} />
                ) : (
                  <Bot size={16} />
                )}
              </div>
              <div className="message-content">
                <div 
                  className="message-text"
                  dangerouslySetInnerHTML={{ __html: formatMessage(message.text) }}
                />
                <div className="message-time">
                  {formatTime(message.timestamp)}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="input-container">
          <div className="input-wrapper">
            <textarea
              ref={inputRef}
              className="message-input"
              placeholder="Ask me about Pakistani law..."
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              rows={1}
              disabled={isLoading}
            />
            <button
              className="send-btn"
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
            >
              <Send size={16} />
            </button>
          </div>
          <div className="input-footer">
            <small>Legal AI for Pakistan - Powered by specialized legal knowledge</small>
          </div>
        </div>
      </main>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="loading-indicator show">
          <div className="loading-dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <p>Legal AI is thinking...</p>
        </div>
      )}
    </div>
  );
}
