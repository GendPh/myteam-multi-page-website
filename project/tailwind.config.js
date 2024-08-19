/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "midnight-green": "#014e56",
          "light-coral": "#f67e7e",
          "white": "#ffffff",
        },
        secondary: {
          "rapture-blue": "#79c8c7",
          "police-blue": "#2c6269",
          "deep-jungle-green": "#004047",
          "sacramento-state-green": "#012f34",
          "dark-green": "#002529",
        }
      }
    },
  },
  plugins: [],
}

