import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ChatHeader from './ChatHeader';
import type { Message } from './types';
import { processUserMessage } from './chatUtils';
import { chatContainerStyles } from './styles/ChatStyles';

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'bot',
      content: 'Hello! How can I help you with the documentation today?'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMinimized, setIsMinimized] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isMinimized && messages[messages.length - 1]?.type === 'bot') {
      setUnreadCount(prev => prev + 1);
    }
  }, [messages, isMinimized]);

  const handleToggleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (isMinimized) {
      setUnreadCount(0);
    }
  };

  const handleSendMessage = async (content: string) => {
    setMessages(prev => [...prev, { type: 'user', content }]);
    setIsTyping(true);

    try {
      const response = await processUserMessage(content);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'I apologize, but I encountered an error. Please try again.' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className={`chat-container ${isMinimized ? 'minimized' : ''}`}>
      <ChatHeader 
        isMinimized={isMinimized}
        onToggleMinimize={handleToggleMinimize}
        unreadCount={unreadCount}
      />
      <div className="chat-content">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
          {isTyping && (
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
      </div>
      <style>{chatContainerStyles}</style>
    </div>
  );
}