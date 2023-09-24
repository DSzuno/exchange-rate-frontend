module.exports = {
  extends: ["react-app", "eslint:recommended"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
  },
  plugins: ["import"],
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  rules: {
    // disable
    "init-declarations": "off",
    "no-console": "off",
    "no-inline-comments": "off",
    "no-eval": "error",
    "import/first": "error"
  },
};
