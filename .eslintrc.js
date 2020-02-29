module.exports = {
    parser: 'vue-eslint-parser',
    extends: [
      // prettier
      'prettier',
      '@vue/prettier',
      // plugin prettier
      'plugin:prettier/recommended',
      // plugin vue
      'plugin:vue/essential',
      "plugin:vue/recommended", 
      "plugin:vue/strongly-recommended", 
      // typescript
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      '@vue/typescript/recommended'
    ],
    rules: {
      "vue/html-indent": "off"
    }
  };