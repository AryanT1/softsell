'use client';

import { ChatBubbleBottomCenterIcon, ChatBubbleLeftEllipsisIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useRef, useEffect } from 'react';

type Message = {
  text: string;
  sender: 'user' | 'bot';
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm the SoftSell assistant. How can I help you today?",
      sender: 'bot'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const exampleQuestions = [
    "How do I sell my license?",
    "What software licenses do you buy?",
    "How long does the process take?",
    "What payment methods do you accept?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

   
    const userMessage: Message = { text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    
    setTimeout(() => {
      let botResponse = "I'm a demo chatbot. In a real implementation, I would use AI to answer your question about selling software licenses.";
      
      if (inputValue.toLowerCase().includes('payment')) {
        botResponse = "We accept various payment methods including bank transfer, PayPal, and wire transfer. Payments are typically processed within 24 hours after license verification.";
      } else if (inputValue.toLowerCase().includes('how long') || inputValue.toLowerCase().includes('process')) {
        botResponse = "The entire process usually takes 2-3 business days from initial contact to payment. License verification is the longest step, typically taking 24-48 hours.";
      } else if (inputValue.toLowerCase().includes('what software') || inputValue.toLowerCase().includes('which licenses')) {
        botResponse = "We accept most major software licenses including Microsoft, Adobe, Autodesk, Oracle, and many others. If you're unsure about a specific license, feel free to ask!";
      }

      setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  const handleExampleQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-white rounded-lg shadow-xl transition duration-800 overflow-hidden flex flex-col h-[500px]">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">SoftSell Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white cursor-pointer hover:text-gray-200"
            >
             <XMarkIcon className="h-6 w-6"/>
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block px-4 py-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-200">
            {messages.length === 1 && (
              <div className="mb-3">
                <p className="text-sm text-gray-500 mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {exampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleExampleQuestion(question)}
                      className="text-xs cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 px-2 py-1 rounded"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <form onSubmit={handleSendMessage} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 border text-black border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 cursor-pointer text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition duration-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <ChatBubbleLeftEllipsisIcon className="h-6 w-6"/>
        </button>
      )}
    </div>
  );
}