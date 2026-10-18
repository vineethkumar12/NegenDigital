/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#071B38',
        electric: '#1677E8',
        brand: '#12B76A',
        teal: '#087F8C',
        mint: '#EAF5F0',
        softblue: '#F2F7FC',
        ink: '#243449',
        muted: '#64748B',
        line: '#DCE6F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #12B76A 0%, #087F8C 55%, #1677E8 100%)',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(7, 27, 56, 0.18)',
      },
    },
  },
  plugins: [],
}
