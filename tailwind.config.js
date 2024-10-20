/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      animation: {
        'ping': `ping 1s cubic-bezier(0, 0, 0.2, 1)`
      },
      keyframes: {
        ping: {
          '75%, 100%': { transform: 'scale(2)', transform: 'translate-x(50%)', transform: 'translate-y(`-50%)', opacity: 0 }
        }
      }
    },
  },
  plugins: [],
}

