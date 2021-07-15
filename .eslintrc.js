module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/typescript'
  ],
  rules: {
    'no-var': 1,
    'prefer-const': 1,
    'brace-style': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'mocha/no-mocha-arrows': 'off',
    'mocha/no-hooks-for-single-case': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['__tests__/**/*.ts'] }
    ]
  },
  plugins: ['import'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {}
  }
}
