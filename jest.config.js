export default {
  verbose: true,
  testEnvironment: "node",

  // Enable coverage
  collectCoverage: true,
  coverageReporters: ["html", "json", "text", "cobertura"],

  // For JUnit XML
  testResultsProcessor: "jest-junit",

  // VERY IMPORTANT for Node ES Modules
  transform: {}
};
