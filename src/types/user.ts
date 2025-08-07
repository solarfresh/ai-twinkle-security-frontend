import { UserRole } from '@/enums/user';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: UserRole;
};