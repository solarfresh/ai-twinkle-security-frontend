import { TestStatus } from '@/enums/test';

export interface TestRun {
  id: string;
  name: string;
  model: string;
  startTime: string;
  status: TestStatus; // Using the enum here
  progress?: number; // Only for 'running' status
}