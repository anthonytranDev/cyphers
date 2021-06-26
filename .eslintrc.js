module.exports = {
  // Prevent ESLint from using rules in parent folders to this project.
  root: true,
  extends: [
    // // Jest recommended linting rules and plugins
    'plugin:jest/recommended',
    // // Airbnb's React ruleset, adapted for TypeScript
    'airbnb-typescript',
    // // Prettier rules and plugins. Must be included after other extends, to avoid conflict.
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true,
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['/*.js', 'stubs/*'],
  rules: {
    // Only allow process.env in specific, centralised locations.
    // The collects together all environment variable usage.
    'no-process-env': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
