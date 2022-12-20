/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        backgroundImage: {
            'footer-pattern': "url('/footer.png')",
          }
    },
  },
  plugins: [],
};
