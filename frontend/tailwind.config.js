/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html", 
      "./frontend./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    // darkMode: "class", // If you plan to use dark mode
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
  