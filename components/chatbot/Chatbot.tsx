'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { doctorConfig } from '@/lib/data/doctor-config';
import Link from 'next/link';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showBookingPrompt, setShowBookingPrompt] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: doctorConfig.chatbot.greeting,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen]);

  const checkForAppointmentTrigger = (text: string): boolean => {
    const lowerText = text.toLowerCase();
    return doctorConfig.chatbot.appointmentTriggers.some((trigger) =>
      lowerText.includes(trigger.toLowerCase())
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Check if user is trying to book an appointment
    if (checkForAppointmentTrigger(input)) {
      setShowBookingPrompt(true);
      const bookingMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'אשמח לעזור לך לקבוע תור! לחץ על הכפתור למטה כדי להתחיל בתהליך קביעת התור.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, bookingMessage]);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          newMessage: input,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);

      // Check if response suggests booking
      if (checkForAppointmentTrigger(data.response)) {
        setShowBookingPrompt(true);
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'מצטער, אירעה שגיאה. אנא נסה שוב או צור קשר ישירות במספר הטלפון.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-primary-600 text-white rounded-full p-4 shadow-lg hover:bg-primary-700 transition-all duration-300 hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-40 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col h-[600px] max-h-[calc(100vh-8rem)]">
          {/* Header */}
          <div className="bg-primary-600 text-white p-4 rounded-t-2xl">
            <h3 className="font-semibold text-lg">{doctorConfig.chatbot.name}</h3>
            <p className="text-sm text-primary-100">עוזר רפואי וירטואלי</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-gray-100 text-gray-900'
                      : 'bg-primary-600 text-white'
                  }`}
                  dir="rtl"
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp.toLocaleTimeString('he-IL', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-primary-600 text-white rounded-lg p-3">
                  <Loader2 className="h-5 w-5 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Booking Prompt */}
          {showBookingPrompt && (
            <div className="px-4 pb-2">
              <Link
                href="/book-appointment"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                קבע תור עכשיו
              </Link>
            </div>
          )}

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex space-x-reverse space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="הקלד הודעה..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                dir="rtl"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
