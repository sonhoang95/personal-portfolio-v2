module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: "'Fira Code', monospace",
      },
      colors: {
        slate: '#8892b0',
      },
    },
  },
  plugins: [],
};
