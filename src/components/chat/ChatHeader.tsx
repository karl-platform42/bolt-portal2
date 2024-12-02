import React from 'react';
import type { ChatHeaderProps } from './types';
import { chatHeaderStyles } from './styles/ChatStyles';

export default function ChatHeader({ isMinimized, onToggleMinimize, unreadCount }: ChatHeaderProps) {
  return (
    <div className="chat-header">
      <h3>Documentation Assistant</h3>
      <button onClick={onToggleMinimize} className="minimize-button">
        {isMinimized ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        )}
      </button>
      {unreadCount > 0 && isMinimized && (
        <span className="unread-badge">{unreadCount}</span>
      )}
      <style>{chatHeaderStyles}</style>
    </div>
  );
}