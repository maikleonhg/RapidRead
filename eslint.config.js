/** @type {import('eslint').Linter.FlatConfig} */
module.exports = [
  {
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
      },
      parser: '@babel/eslint-parser',
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: require('eslint-plugin-react'), // Incluye el plugin de React
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'react/prop-types': 'off', // Ejemplo de regla específica para React
    },
  },
  // Puedes agregar más configuraciones aquí si es necesario
];
