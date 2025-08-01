export enum TestStatus {
  // General Test Run Statuses (for TestRun and TestRecord)
  PENDING = 'pending',
  RUNNING = 'running',
  COMPLETED = 'completed', // Overall test completed successfully
  FAILED = 'failed',       // Overall test failed (one or more test cases failed/errored)
  CANCELLED = 'cancelled',

  // Specific Test Case Statuses (for TestCaseResult)
  PASSED = 'passed',
  SKIPPED = 'skipped',
  ERROR = 'error', // Runtime error during test execution
}