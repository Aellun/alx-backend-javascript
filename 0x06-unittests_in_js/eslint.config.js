// eslint.config.js
module.exports = {
    extends: [
      'eslint:recommended', // Basic recommended rules
      'plugin:node/recommended' // Node.js specific rules
    ],
    env: {
      node: true, // Enable Node.js global variables and scope
      es2021: true // Enable ES2021 globals and syntax
    },
    parserOptions: {
      ecmaVersion: 12, // Set ECMAScript version
      sourceType: 'module' // Allow ES6 module syntax
    },
    rules: {
      // Define or override specific rules here
      'no-console': 'off', // Example rule modification
      'quotes': ['error', 'single'] // Example rule modification
    },
    overrides: [
      {
        files: ['**/*.test.js'], // Override settings for test files
        env: {
          mocha: true // Enable Mocha global variables
        }
      }
    ]
  };
  