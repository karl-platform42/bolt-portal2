import React from 'react';
import type { ChatMessageProps } from './types';
import { chatMessageStyles } from './styles/ChatStyles';

export default function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`message ${message.type}`}>
      <div className="message-content">{message.content}</div>
      <style>{chatMessageStyles}</style>
    </div>
  );
}