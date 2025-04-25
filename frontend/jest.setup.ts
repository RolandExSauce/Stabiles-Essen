// jest.setup.ts
// import "@testing-library/jest-dom/vitest";
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, afterAll } from "@jest/globals"; //or '@jest/globals' if using Jest directly// jest.setup.ts
import { TextEncoder, TextDecoder } from 'util';

// Assign to global scope
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

// Add type declaration for IS_REACT_ACT_ENVIRONMENT
// Add this at the top of your jest.setup.ts
declare global {
  var IS_REACT_ACT_ENVIRONMENT: boolean;
}

// Then use either:
(globalThis as { IS_REACT_ACT_ENVIRONMENT: boolean }).IS_REACT_ACT_ENVIRONMENT = true;


// 1. Auto-cleanup after each test (removes React components from DOM)
afterEach(() => {
  cleanup();
});

// 2. Mock console methods during tests
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeAll(() => {
  console.error = (...args) => {
    // Filter out expected error messages if needed
    if (!args[0].includes("Some expected error")) {
      originalConsoleError(...args);
    }
  };

  console.warn = (...args) => {
    if (!args[0].includes("Some expected warning")) {
      originalConsoleWarn(...args);
    }
  };
});

afterAll(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});

// 3. Add global test helpers (optional)
globalThis.IS_REACT_ACT_ENVIRONMENT = true; // For React 18+ testing
