/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'doodle': "url('../public/assets/doodle_bg.png')",
        'header-bg': "url('../public/assets/view_bg.png')",
        'details-bg': "url('../public/assets/courseDetail_bg.png')"
      },
    },
  },
  plugins: [],
}
