import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset()],
  theme: {
    extend: {
      colors: {
        tokyo: {
          background: '#1A1B26',
          foreground: '#a9b1d6',
          black: '#414868',
          blue: '#7aa2f7',
          cyan: '#7dcfff',
          green: '#73daca',
          magenta: '#bb9af7',
          red: '#f7768e',
          white: '#c0caf5',
          yellow: '#e0af68',
          bblack: '#2A2F41',
          bblue: '#7aa2f7',
          bcyan: '#7dcfff',
          bgreen: '#41a6b5',
          bmagenta: '#bb9af7',
          bred: '#ff9e64',
          bwhite: '#787c99',
          byellow: '#e0af68',
        },
      },
    },
  },
};
