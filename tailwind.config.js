module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        '1.2' : '5px',
      },
      colors: {
        'c-gray' : '#202020',
        'c-light-gray' : '#a4a9bf',
        'c-dark-gray' : '#1b2431',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
