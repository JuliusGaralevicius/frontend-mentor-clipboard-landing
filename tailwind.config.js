/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary-strong-cyan': '#26baa4',
        'primary-light-blue': '#6173ff',
        'neutral-dark-grayish-blue': '#4c545d',
        'neutral-grayish-blue': '#9fabb2',
      },
      fontFamily: {
        'ba-jamjuree': ['"Bai Jamjuree", "sans-serif"'],
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
}
