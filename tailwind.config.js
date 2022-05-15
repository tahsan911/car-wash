module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FF013E",
          "secondary": "white",
          "accent": "#F3B10B",
          "neutral": "#1DABF2",
          "base-100": "#212121",
          "info": "#2463EB",
          "success": "#46D68C",
          "warning": "#DB7706",
          "error": "#DC2828",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}