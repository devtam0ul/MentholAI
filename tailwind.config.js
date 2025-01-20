/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 6s linear infinite',
        'orbit-1': 'orbit1 15s linear infinite',
        'orbit-2': 'orbit2 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delay-1': 'float 6s ease-in-out infinite 0.5s',
        'float-delay-2': 'float 6s ease-in-out infinite 1s',
        'particle-1': 'particle1 10s linear infinite',
        'particle-2': 'particle2 8s linear infinite',
        'particle-3': 'particle3 12s linear infinite',
      },
      keyframes: {
        orbit1: {
          '0%': { transform: 'rotate(0deg) translateX(200px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(200px) rotate(-360deg)' },
        },
        orbit2: {
          '0%': { transform: 'rotate(-0deg) translateX(200px) rotate(-0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(200px) rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        particle1: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: 0 },
          '50%': { transform: 'translate(100px, -100px) scale(2)', opacity: 1 },
          '100%': { transform: 'translate(200px, -200px) scale(1)', opacity: 0 },
        },
        particle2: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: 0 },
          '50%': { transform: 'translate(-150px, -120px) scale(2)', opacity: 1 },
          '100%': { transform: 'translate(-300px, -240px) scale(1)', opacity: 0 },
        },
        particle3: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: 0 },
          '50%': { transform: 'translate(120px, -80px) scale(2)', opacity: 1 },
          '100%': { transform: 'translate(240px, -160px) scale(1)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
} 