/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0A234A',
        electric: '#0587CA',
        brand: '#3DCE39',
        teal: '#09A173',
        mint: '#EAF8E9',
        softblue: '#EEF7FC',
        ink: '#1E3250',
        muted: '#5B6B82',
        line: '#D8E4EE',
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
        display: ['"Bricolage Grotesque"', '"Instrument Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #3DCE39 0%, #09A173 50%, #0587CA 100%)',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(10, 35, 74, 0.18)',
      },
    },
  },
  plugins: [],
}