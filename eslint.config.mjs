import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Addressing `@typescript-eslint/no-explicit-any`
      "@typescript-eslint/no-explicit-any": "warn", // Set to "error" if you want strict type enforcement

      // Addressing `@next/next/no-img-element`
      "@next/next/no-img-element": "warn", // Use "off" if you want to disable the rule entirely

      // Addressing `react/no-unescaped-entities`
      "react/no-unescaped-entities": "error",

      // Addressing `@typescript-eslint/no-unused-vars`
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // Ignore unused variables starting with "_"
    },
  },
];

export default eslintConfig;
