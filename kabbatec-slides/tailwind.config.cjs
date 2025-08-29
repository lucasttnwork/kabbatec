/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0f172a',
        foreground: '#ffffff',
        primary: { DEFAULT: '#667eea' },
        'primary-foreground': '#ffffff',
        secondary: { DEFAULT: '#1f2937' },
        'secondary-foreground': '#ffffff',
        destructive: { DEFAULT: '#ef4444' },
        accent: { DEFAULT: '#764ba2' },
        ring: '#7c3aed',
        input: '#1f2937',
        card: { DEFAULT: 'rgba(255,255,255,0.08)' },
        'card-foreground': '#ffffff',
        'muted-foreground': '#94a3b8',
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      animation: {
        'float': 'float 10s ease-in-out infinite',
        'liquid': 'liquid 14s ease-in-out infinite',
        'liquid-float': 'liquid-float 30s ease-in-out infinite',
        'liquid-float-reverse': 'liquid-float 35s ease-in-out infinite reverse',
        'glow': 'glow 4s ease-in-out infinite alternate',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        liquid: {
          '0%, 100%': {
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            transform: 'rotate(0deg) scale(1)'
          },
          '50%': {
            borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
            transform: 'rotate(180deg) scale(1.1)'
          }
        },
        'liquid-float': {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1) rotate(0deg)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'
          },
          '25%': {
            transform: 'translate(10px, -15px) scale(1.05) rotate(90deg)',
            borderRadius: '70% 30% 30% 70% / 30% 70% 70% 30%'
          },
          '50%': {
            transform: 'translate(-5px, -25px) scale(0.95) rotate(180deg)',
            borderRadius: '50% 50% 30% 70% / 70% 30% 50% 50%'
          },
          '75%': {
            transform: 'translate(-15px, -10px) scale(1.02) rotate(270deg)',
            borderRadius: '30% 70% 50% 50% / 50% 50% 70% 30%'
          }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(147, 51, 234, 0.8)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 14px rgba(59, 130, 246, 0.18), 0 0 28px rgba(59, 130, 246, 0.12)'
          },
          '50%': {
            boxShadow: '0 0 18px rgba(59, 130, 246, 0.24), 0 0 36px rgba(59, 130, 246, 0.16)'
          }
        }
      },
      colors: {
        glass: {
          50: 'rgba(255, 255, 255, 0.06)',
          100: 'rgba(255, 255, 255, 0.12)',
          200: 'rgba(255, 255, 255, 0.18)',
        }
      },
      backgroundImage: {
        'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 256 256\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"4\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}


