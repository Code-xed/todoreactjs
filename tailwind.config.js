module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'prim1': '#00005a',
       'prim2': '#000088',
        'prim3': '#131ab9',
        'prim4': '#E6E6FF',
        'prim5': '#F5F5FF',
      },
   },
    fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
      },
  },
  plugins: [],
}