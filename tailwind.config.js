/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',           // Enables dark: prefix – perfect for your ThemeContext
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ─── YOUR EXACT COLOR SYSTEM ──────────────────────────────────────
        primary:        "#8750f7",     // main brand color (purple/violet)
        secondary:      "#2a1454",     // deep purple background accent
        white:          "#ffffff",
        dark:           "#0f0715",     // main dark background
        black:          "#050709",     // deepest black for gradients
        gray:           "#636363",     // neutral text/subtitles
        border:         "#d9d9d9",     // light mode borders
        creamLight:     "#f6f3fc",     // light mode subtle background

        // Optional semantic aliases (makes code cleaner & more maintainable)
        // You can use bg-dark, text-primary, border-border etc.
        'brand-primary': "#8750f7",
        'bg-dark':       "#0f0715",
        'bg-deep':       "#050709",
        'text-light':    "#ffffff",
        'text-muted':    "#636363",
      },

      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacOS',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        heading: ['Inter', 'sans-serif'], // or use a premium font later
      },

      // Better spacing scale for enterprise feel (larger comfortable rhythm)
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '88': '22rem',
      },

      // Subtle shadows for premium cards / dropdowns
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(135, 80, 247, 0.15)',
        'premium-dark': '0 25px 50px -12px rgba(135, 80, 247, 0.25)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.15)',
        'card-dark': '0 10px 30px -10px rgba(135, 80, 247, 0.08)',
      },

      // Smooth animations for hero / nav
      animation: {
        'fade-in-up': 'fadeInUp 1.1s ease-out forwards',
        'bounce-slow': 'bounce 4s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },

      // Better border radius scale for modern UI
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}