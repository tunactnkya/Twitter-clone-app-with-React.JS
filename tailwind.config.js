/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          base: "hsl(203, 89%, 53%)",
          dark: "hsl(203, 89%, 46%)",
          light: "hsl(203, 89%, 96%)"
        },
        gray: {
          dark: "#657786",
          light: "#AAB8C2",
          lightess: "E1E8ED",
          extralight: "F5F8FA"
        },
        black: "#14171A"
      }
    },
  },
  plugins: [],
}
