/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        musictheme: {
        
              primary: "#FECD70",        
              secondary: "#FFAE6D",
              accent: "#E3C770",       
              "neutral": "#F3E0B5",        
              "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
