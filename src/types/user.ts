import { UserRole } from '@/enums/user';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};