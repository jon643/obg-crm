import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // OBG Brand Colors
        obg: {
          blue: {
            DEFAULT: '#2c334e',   // Primary navy blue
            dark: '#1a1f36',      // Darker navy (hero bg, sections)
            darker: '#0f1225',    // Deepest navy
            light: '#3d4666',     // Lighter navy for cards/hover
            muted: '#4a5280',     // Muted blue for borders
          },
          orange: {
            DEFAULT: '#ff795e',   // Primary orange/coral accent
            light: '#ff9580',     // Lighter orange
            dark: '#e85d42',      // Darker orange for hover
          },
          white: '#ffffff',
          offwhite: '#f0f2f8',    // Soft white for text on dark
          gray: '#9aa3c0',        // Muted text color
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #0f1225 0%, #1a1f36 50%, #2c334e 100%)',
        'gradient-section': 'linear-gradient(180deg, #1a1f36 0%, #0f1225 100%)',
        'gradient-card': 'linear-gradient(135deg, #2c334e 0%, #1a1f36 100%)',
        'gradient-orange': 'linear-gradient(135deg, #ff795e 0%, #e85d42 100%)',
      },
      boxShadow: {
        'glow-orange': '0 0 30px rgba(255, 121, 94, 0.3)',
        'glow-blue': '0 0 40px rgba(44, 51, 78, 0.8)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 48px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      spacing: {
        'section': '5rem',
        'section-lg': '7.5rem',
      },
    },
  },
  plugins: [],
}

export default config
