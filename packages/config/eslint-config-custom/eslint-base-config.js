module.exports = {
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'turbo',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
  ],
  rules: {
    'react/jsx-key': 'off',
  },
}
