/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'soft-mint': '#B9FAF8',
        'soft-blue': '#E3F3FF',
        'light-blue': '#90CAF9',
        'primary-blue': '#0090F2',
        'secondary-blue': '#0079DD',
        'dark-blue': '#03045E'
      }
    },
  },
  plugins: [],
}
