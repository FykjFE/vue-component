module.exports = {
    env: {
        "browser": true,
        "es2020": true,
        "node": true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        "@typescript-eslint/no-var-requires": 0
    }
}
