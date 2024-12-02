export const chatContainerStyles = `
  .chat-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 350px;
    height: 500px;
    background: var(--color-background);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .chat-container.minimized {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: var(--color-primary);
    border: none;
  }

  .chat-container.minimized .chat-content,
  .chat-container.minimized .chat-header h3 {
    display: none;
  }

  .chat-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: var(--space-md);
  }

  .typing-indicator {
    display: flex;
    gap: 4px;
    padding: 8px;
    margin: 8px 0;
  }

  .typing-indicator span {
    width: 8px;
    height: 8px;
    background: var(--color-text-light);
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out;
  }

  .typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
  .typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }
`;

export const chatHeaderStyles = `
  .chat-header {
    display: flex;
    align-items: center;
    padding: var(--space-sm) var(--space-md);
    background: var(--color-surface);
    border-bottom: 1px solid var(--color-border);
    min-height: 60px;
    transition: all 0.3s ease;
  }

  .minimized .chat-header {
    padding: 0;
    min-height: 50px;
    background: transparent;
    border: none;
    justify-content: center;
  }

  .chat-header h3 {
    margin: 0;
    font-size: 1rem;
    flex: 1;
  }

  .minimize-button {
    background: none;
    border: none;
    padding: var(--space-xs);
    cursor: pointer;
    color: var(--color-text-light);
    transition: color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .minimized .minimize-button {
    width: 100%;
    height: 100%;
    color: white;
    padding: 0;
  }

  .minimize-button:hover {
    color: var(--color-text);
  }

  .minimized .minimize-button:hover {
    color: white;
    opacity: 0.9;
  }

  .unread-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #ef4444;
    color: white;
    border-radius: 999px;
    padding: 2px 6px;
    font-size: 0.75rem;
    min-width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const chatMessageStyles = `
  .message {
    margin-bottom: var(--space-sm);
    display: flex;
    flex-direction: column;
  }

  .message.user {
    align-items: flex-end;
  }

  .message-content {
    max-width: 80%;
    padding: var(--space-sm);
    border-radius: var(--border-radius);
    line-height: 1.4;
  }

  .user .message-content {
    background: var(--color-primary);
    color: white;
    border-radius: 12px 12px 0 12px;
  }

  .bot .message-content {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 12px 12px 12px 0;
  }
`;

export const chatInputStyles = `
  .chat-input {
    display: flex;
    gap: var(--space-sm);
    padding: var(--space-sm);
    background: var(--color-surface);
    border-top: 1px solid var(--color-border);
  }

  textarea {
    flex: 1;
    padding: var(--space-sm);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius);
    resize: none;
    font-family: inherit;
    font-size: 0.95rem;
    line-height: 1.4;
  }

  textarea:focus {
    outline: none;
    border-color: var(--color-primary);
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: var(--border-radius);
    background: var(--color-primary);
    color: white;
    cursor: pointer;
    transition: opacity 0.2s;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:not(:disabled):hover {
    opacity: 0.9;
  }
`;