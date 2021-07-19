module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    parser: "babel-eslint",
  },
  "ignorePatterns": ["**/*.min.js"],
  rules: {
    "vue/no-deprecated-slot-attribute": "off",
    "no-debugger": "off"
  },
};
