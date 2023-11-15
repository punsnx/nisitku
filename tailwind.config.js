/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "top-md": "0 -4px 6px -3px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
