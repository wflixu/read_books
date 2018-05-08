module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "node": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [2, 4],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "no-alert": 0,//禁止使用alert confirm prompt
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-console": [
      "error",
      { allow: ["log", "warn", "error"] }
    ]
  }
};