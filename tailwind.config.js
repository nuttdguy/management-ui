/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html, js, ts}", "./src/**/*.{html, js, ts}"],
  theme: {
    extend: {},
  },
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
