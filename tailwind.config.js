/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "button-black": "rgba(28, 28, 28, 1)",
        "button-hover-gray": "#F1F1F1",
        "button-hover-black": "#4E4E4E",
        "footer": "#F5F5F5",
        "QnA": "#E8EEE7",
      },
      colors: {
        "font-black": "#1C1C1C",
        "font-light-gray": "#828282",
        "font-gray-QnA": "#9E9D9D",
        "font-gray-Ans": "#617275",
      },
      borderColor: {
        'bottom-gray': "#D7D7D7",
      },

      fontFamily: {
        "hand-written": ["Covered By Your Grace", 'san-serif'],
        "mystyle": ["Manrope", 'san-serif'],
        'Switzer': ["Switzer", 'san-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      }
    },
  },
  plugins: [],
}