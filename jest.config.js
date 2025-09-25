module.exports = {
  testEnvironment: 'node',
  watchPathIgnorePatterns: [
    'node_modules/',
    '.next/',
    'coverage/',
  ],
  // Configuração específica para WSL
  watchman: false,
}