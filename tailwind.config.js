/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#710ba0",

          "secondary": "#2735ce",

          "accent": "#24f4e6",

          "neutral": "#2F2734",

          "base-100": "#F4F3F7",

          "info": "#92D3F6",

          "success": "#7BEAD4",

          "warning": "#FBC104",

          "error": "#F7558B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
