/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        textColor: 'var(--textColor)',
        background: 'var(--whiteBackground)',
        grayColor: 'var(--mainBackground)',
      },
    },
  },
  plugins: [],
};
