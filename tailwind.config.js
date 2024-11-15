/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        sparkRed: {
          600: "rgb(242, 95, 58)",
          200: "rgb(255, 239, 234)",
        },
        darkBlue: {
          600: "rgb(35, 44, 81)",
          900: "rgb(29, 30, 37)",
        },
        darkGrayBlue: "rgb(143, 148, 167)",
        lightGrey: "rgb(249, 249, 249)",
      },
    },
  },
  plugins: [],
};
