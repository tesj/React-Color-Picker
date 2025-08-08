import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { 
      js, 
      react: pluginReact 
    }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser, 
        ...globals.node
      } 
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    } 
  },
  
  { 
    files: ["**/*.css"], 
    plugins: { 
      css 
    }, 
    language: "css/css", 
    extends: ["css/recommended"],
    rules: {
      "css/use-baseline": "off"
    }
  },
]);
