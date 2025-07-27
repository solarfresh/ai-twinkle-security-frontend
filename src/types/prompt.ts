export interface PromptEntry {
  id: string;
  name: string;
  category: string;
  description: string;
  content: string;
  tags: string[];
  updatedAt : string; // ISO string or 'YYYY-MM-DD HH:mm'
  createdBy: string;
}