module.exports = {
  "extends": "airbnb-base",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module"
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