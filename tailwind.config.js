module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        gray: '#a8a8a8',
        orange:'#ff9f6d',
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {},
  },
}
