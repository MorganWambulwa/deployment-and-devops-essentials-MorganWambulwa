module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true        // <-- add this line
  },
  globals: {
    process: 'readonly'
  },
  settings: {
    react: {
      version: 'detect'  // Detect React version automatically
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {}
};
