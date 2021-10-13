module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        '1.2' : '5px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
