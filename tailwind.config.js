/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        anonymousPro: ['Anonymous Pro', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetBrainsMono: ['JetBrains Mono', 'sans-serif'],
      },

      colors: {
        pageColor: '#101011',
        blueGray: '#30303B',
        gray1: '#696975',
        gray2: '#393E41',
        blue: '#72B6F1',
        green: '#44BBA4',
        elementsBlack: '#171718',
        redOrange: '#E76941',
        yellow: '#EAB31C',
        userColor: '#4F4F53',
      },

      width: {
        242: '242px',
        262: '262px',
        654: '654px',
      },
    },
  },
  plugins: [],
}
