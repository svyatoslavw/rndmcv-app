const js = require("@eslint/js");
const eslintConfigPrettier = require("eslint-config-prettier");
const onlyWarn = require("eslint-plugin-only-warn");
const turboPlugin = require("eslint-plugin-turbo");
const tseslint = require("typescript-eslint");
/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
const config = [
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ["dist/**", 'src/database/migrations/**'],
  },
]

module.exports = config;
