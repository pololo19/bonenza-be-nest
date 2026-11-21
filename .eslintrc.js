module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'simple-import-sort', 'unused-imports'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      "files": ["*.ts", "*.tsx", "*.js", "*.jsx"],
      "rules": {
        "no-duplicate-imports": 1,
        "simple-import-sort/exports": "warn",
        "simple-import-sort/imports": "warn",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": "warn",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/ban-ts-comment": ["off", { "ts-ignore": "off" }]
      }
    }
  ]
};
