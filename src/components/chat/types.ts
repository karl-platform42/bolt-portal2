export interface Message {
  type: 'user' | 'bot';
  content: string;
}

export interface KeyboardEventHandler {
  (e: React.KeyboardEvent<HTMLTextAreaElement>): void;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export interface ChatMessageProps {
  message: Message;
}

export interface ChatHeaderProps {
  isMinimized: boolean;
  onToggleMinimize: () => void;
  unreadCount: number;
}