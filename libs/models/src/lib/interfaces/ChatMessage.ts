import { ChatMessageStatus } from "../enums";

export interface ChatMessage {
  message: string;
  date: Date;
  status: ChatMessageStatus;
  userId: number;
  username: string;
}