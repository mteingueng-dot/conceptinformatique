module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Palette claire de la refonte, tirée du logo (bleu + vert)
        ci: {
          navy: '#0b1f3a',
          blue: {
            50: '#eef5ff',
            100: '#d9e8ff',
            200: '#b6d3ff',
            500: '#1f6feb',
            600: '#1559d1',
            700: '#1146a6',
          },
          green: {
            50: '#ecfdf3',
            100: '#d1fadf',
            400: '#34d17f',
            500: '#16b364',
            600: '#0a7a43', // assombri pour un contraste suffisant sur fond blanc (≥ 4,5:1)
          },
        },
        ink: {
          950: '#04070d',
          900: '#080d16',
          800: '#0d1522',
          700: '#142033',
          600: '#1e2d45',
          500: '#2b3d5c',
        },
        brand: {
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
        accent: {
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      backgroundImage: {
        'grid-lines': 'linear-gradient(to right, rgba(34,211,238,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.07) 1px, transparent 1px)',
        'glow-radial': 'radial-gradient(ellipse at top, rgba(34,211,238,0.18), transparent 60%)',
        'brand-gradient': 'linear-gradient(135deg, #22d3ee 0%, #8b5cf6 100%)',
      },
      backgroundSize: { grid: '48px 48px' },
      boxShadow: {
        glow: '0 0 24px rgba(34,211,238,0.35)',
        'glow-lg': '0 0 48px rgba(34,211,238,0.45)',
        'glow-accent': '0 0 32px rgba(139,92,246,0.4)',
      },
      keyframes: {
        'pulse-glow': { '0%, 100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};