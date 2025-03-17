import { defineConfig } from 'eslint-define-config'; // Importez la fonction defineConfig
import airbnb from 'eslint-config-airbnb-base';
import pluginReact from 'eslint-plugin-react';
import pluginImport from 'eslint-plugin-import';

export default defineConfig({
  extends: [
    airbnb,
    pluginReact.configs.recommended,
    pluginImport.configs.recommended,
  ],
  rules: {
    'no-console': 'off',
    'indent': ['error', 2],
    'quotes': ['error', 'double'],
    'linebreak-style': ['error', 'unix'],
  },
});
