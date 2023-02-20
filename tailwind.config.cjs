/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ubuntu-mono": ["Ubuntu Mono"]
      },
      colors: {
        "monokai-bg-1": "#363537",
        "monokai-bg-2": "#908e8f",
        "monokai-red": "#ff6188",
        "monokai-green": "#a9dc76",
        "monokai-yellow": "#ffd866",
        "monokai-orange": "#fc9867",
        "monokai-purple": "#ab9df2",
        "monokai-blue": "#78dce8",
        "monokai-fg": "#fdf9f3",
      }
    },
  },
  plugins: [],
}
