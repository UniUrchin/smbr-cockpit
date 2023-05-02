/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mplus1: ["var(--font-mplus1)"],
      },
    },
  },
  plugins: [],
};
