/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      container: {
        center: true, // Always center the container
        padding: {
          DEFAULT: '1rem', // Default padding for all devices
          sm: '2rem', // Small devices
          lg: '4rem', // Large devices
          xl: '6rem', // Extra-large devices
        },
      },
    },
  },
  plugins: [],
}

