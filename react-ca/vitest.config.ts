import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true, // Optional, if you want to use global test functions like 'test' and 'expect'
    environment: 'jsdom', // Use jsdom to emulate a browser environment for testing
    include: ['src/**/*.test.{js,ts,jsx,tsx}'], // Include test files
  },
});
