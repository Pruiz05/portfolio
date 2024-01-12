/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#2E8B57',
          200: '#61bc84',
          300: '#c6ffe6',
        },
        accent: {
          100: '#8FBC8F',
          200: '#345e37',
        },
        text: {
          100: '#FFFFFF',
          200: '#e0e0e0',
        },
        bg: {
          100: '#1E1E1E',
          200: '#2d2d2d',
          300: '#454545',
        },
      }
    },
  },
  plugins: [],
};
