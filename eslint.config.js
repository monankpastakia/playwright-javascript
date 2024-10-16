export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        page: "readonly",
        $: "readonly",
        $$: "readonly",
        console: "readonly",
        __dirname: "readonly",
      },
    },
    ignores: [
      "node_modules/**",
      "dist/**",
      "coverage/**",
      "test/**",
      "build/**",
      "package.json",
      "package-lock.json",
      ".gitignore",
      "eslint.config.js",
      "playwright.config.js",
      "logs/*",
      "allure-results/**",
      "allure-report/**",
      "playwright-report/**",
      "test-results/**",
      "test-results.json",
      "test-results.xml",
      "README.md",
      "LICENSE",
      "babel.config.js",
    ],
    rules: {
      "no-unused-vars": "error",
      "no-console": ["error", { allow: ["warn", "error"] }],
      eqeqeq: ["error", "always"],
      curly: "error",
      semi: ["error", "always"],
      indent: ["error", 2, { SwitchCase: 1 }],
      "no-undef": "error",
      "no-extra-semi": "error",
      camelcase: ["error", { properties: "never", ignoreDestructuring: true }],
      "no-multi-spaces": "error",
      "comma-dangle": ["error", "always-multiline"],
      "no-trailing-spaces": "error",
      "space-before-blocks": "error",
      "keyword-spacing": ["error", { before: true, after: true }],
      "space-infix-ops": "error",
      "space-in-parens": ["error", "never"],
      "array-bracket-spacing": ["error", "never"],
      "object-curly-spacing": "off",
      "object-curly-newline": ["error", { multiline: true, consistent: true }],
      "object-property-newline": [
        "error",
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],
      "block-spacing": "error",
      "brace-style": ["error", "1tbs"],
      "comma-spacing": "error",
      "computed-property-spacing": ["error", "never"],
      "func-call-spacing": "error",
      "keyword-spacing": "error",
      "getter-return": "error",
      "no-const-assign": "error",
      "for-direction": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-constant-condition": "error",
      "no-constructor-return": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-duplicate-case": "error",
      "no-duplicate-imports": "error",
      "no-empty": "error",
      "no-dupe-keys": "error",
      "no-ex-assign": "error",
      "no-func-assign": "error",
      "no-import-assign": "error",
      "no-irregular-whitespace": "error",
      "no-setter-return": "error",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "no-unreachable-loop": "error",
      "no-unused-private-class-members": "error",
      "no-unused-vars": ["error", { args: "after-used" }],
      "no-use-before-define": "error",
      "capitalized-comments": ["error", "always", { ignoreConsecutiveComments: true }],
      "default-case": "error",
      curly: "error",
      "default-case-last": "error",
      "default-param-last": "error",
      "no-empty": ["error", { allowEmptyCatch: false }],
      "no-empty-function": "error",
      "no-empty-static-block": "error",
      "constructor-super": "error",
    },
  },
];
