import { TestStatus } from '@/enums/test';

export interface TestRun {
  id: string;
  name: string;
  model: string;
  startTime: string;
  status: TestStatus; // Using the enum here
  progress?: number; // Only for 'running' status
}

export interface TestRecord { // For historical/completed tests
  id: string;
  testName: string;
  modelName: string;
  scenarioName: string;
  completionTime: string;
  duration: string;
  status: TestStatus;
}

// Interface for individual test case results within a detailed record
export interface TestCaseResult {
  id: string;
  name: string;
  status: 'passed' | 'failed' | 'skipped' | 'error';
  description?: string;
  inputPrompt?: string; // The prompt used for this specific case
  modelResponse?: string; // The model's output for this case
  vulnerabilityDetected?: boolean;
  vulnerabilityDetails?: string; // Details if a vulnerability was found
  errorMessage?: string; // If status is 'error' or 'failed'
  durationMs: number;
}

// Interface for the detailed test record
export interface DetailedTestRecord extends TestRecord {
  overallScore: number;
  totalTestCases: number;
  passedTestCases: number;
  failedTestCases: number;
  vulnerabilitiesFound: number;
  testerName: string;
  testLog: string; // Raw log output from the test run
  testCases: TestCaseResult[]; // Array of detailed results for each test case
}
