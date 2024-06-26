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
        white: '#E0E0E0',
        pageColor: '#101011',
        blueGray: '#30303B',
        gray1: '#696975',
        gray2: '#232323',
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
        520: '520px',
        654: '654px',
        1110: '1110px',
      },

      padding: {
        524: '524px',
      },
    },
  },
  plugins: [],
}
