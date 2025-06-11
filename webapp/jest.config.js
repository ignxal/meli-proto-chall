// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  // The test environment that will be used for testing.
  // 'jsdom' for browser-like environment, 'node' for Node.js environment.
  testEnvironment: "jsdom",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],

  // A list of paths to directories that Jest should use to search for tests.
  // '<rootDir>' is a special token that is replaced by the root directory of your project.
  roots: ["<rootDir>/src"],

  // A list of file extensions that Jest should look for.
  // '.ts' and '.tsx' are included for TypeScript files.
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // A map from regular expressions to paths to transformers.
  // ts-jest is used to transform TypeScript files into JavaScript for testing.
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  // A list of paths to modules that run some code to configure or set up the testing environment.
  // This is where you would import '@testing-library/jest-dom/extend-expect'.
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  // An array of regexp pattern strings that are matched against all test paths before executing the test.
  // Files matching the pattern are skipped. This is useful for ignoring distribution or node_modules files.
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],

  // An array of regexp pattern strings that are matched against all source file paths before transformation.
  // Files matching the pattern are not transformed. This is useful for libraries that are already transpiled.
  transformIgnorePatterns: ["/node_modules/"],

  // Indicates whether each individual test should be reported during the run.
  verbose: true,

  // Automatically clear mock calls and instances between every test.
  clearMocks: true,

  // When true, Jest will not cache test results.
  cache: false,
  //coverageReporters: ["cobertura"],
  collectCoverageFrom: [
    "**/src/components/**/*.{js,jsx,ts,tsx}",
    "**/src/pages/**/*.{js,jsx,ts,tsx}",
    "**/src/services/**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/dist/**",
    "!**/.work/**",
    "!**/public/**",
  ],
};
