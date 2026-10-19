module.exports = {
  root: true,
  extends: '@react-native',
  ignorePatterns: ['srcPre/**'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
