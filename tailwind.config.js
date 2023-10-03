/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        brand: '#eb3d3d', 
        complementary: '#EE8585',
        darker: '#6B3C3C',
      },
    },
  },
  plugins: [],
}

