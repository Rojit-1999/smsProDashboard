/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#53389E',
        secondary:'#7F56D9',
        text1:'#475467',
        text2:'#667085',
        pending:'#B54708',
        success:'#12B76A'
      }
    },
  },
  plugins: [],
}