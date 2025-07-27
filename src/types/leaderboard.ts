export interface LeaderboardEntry {
  id: string;
  rank: number;
  modelName: string;
  score: number;
  testsCompleted: number;
  lastActivity: string; // e.g., '2025-07-26 10:30'
}