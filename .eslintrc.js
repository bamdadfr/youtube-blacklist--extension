module.exports = {
  'extends': '@bamdadsabbagh/eslint-config',
  'rules': {
    'no-new': 'off',
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      // 'ForOfStatement',
      'LabeledStatement',
      'WithStatement',
    ],
  },
};
