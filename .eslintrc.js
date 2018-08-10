module.exports = {
  extends: "airbnb-base",
  parser: "babel-eslint",
  parserOptions: {
    "ecmaVersion": 7,
    "sourceType": "module"
  },
  rules: {
    "no-restricted-syntax": 0,
  },
  overrides: [
    {
      files: 'test/**/*.js',
      env: {
        jest: true
      }
    }
  ]
};