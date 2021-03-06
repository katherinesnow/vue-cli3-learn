module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 0,
    'semi': 0,
    'no-alert': 0,
    'indent': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'arrow-body-style': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
