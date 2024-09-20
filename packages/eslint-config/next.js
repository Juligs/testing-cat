const { resolve } = require("node:path");
const { toolingRules, appsOverrides } = require("./rules");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "eslint:recommended",
    "prettier",
    require.resolve("@vercel/style-guide/eslint/next"),
    "plugin:@typescript-eslint/recommended",
    "turbo",
  ],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  rules: toolingRules,
  ignorePatterns: [
    "node_modules/",
    "dist/",
    ".next/",
    ".vercel/",
  ],
  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }, appsOverrides],
};