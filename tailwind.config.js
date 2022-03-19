module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        gray: '#A1A1A1',
        orange:'#FF9F6D'
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
