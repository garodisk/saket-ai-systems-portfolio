/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#10131A',
        orange: {
          DEFAULT: '#FF5A36',
          signal: '#FF5A36'
        },
        paper: {
          DEFAULT: '#F4F1EA',
          warm: '#F4F1EA'
        },
        graphite: '#6F737C'
      },
      fontFamily: {
        heading: ['Manrope', 'sans-serif'],
        drama: ['"Instrument Serif"', 'serif'],
        technical: ['"IBM Plex Mono"', 'monospace'],
        body: ['Manrope', 'sans-serif']
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
        '4xl': '4rem',
      }
    },
  },
  plugins: [],
}
