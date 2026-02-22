/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                terracotta: {
                    DEFAULT: '#c25b3f',
                    light: '#e07a5f',
                    dark: '#8c3a25',
                },
                gold: {
                    DEFAULT: '#d4a017',
                    light: '#f0c040',
                    dark: '#a07810',
                },
                'andean-indigo': {
                    DEFAULT: '#3b2f6e',
                    light: '#5a4898',
                    dark: '#251e4a',
                },
                mountain: {
                    DEFAULT: '#2d5a3d',
                    light: '#4a8a5f',
                    dark: '#1a3825',
                },
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'shimmer': 'shimmer 2.5s linear infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(24px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 8px rgba(212,160,23,0.4)' },
                    '50%': { opacity: '0.7', boxShadow: '0 0 20px rgba(212,160,23,0.8)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
            },
            backgroundImage: {
                'andean-gradient': 'linear-gradient(135deg, #c25b3f 0%, #d4a017 50%, #2d5a3d 100%)',
                'andean-warm': 'linear-gradient(135deg, #8c3a25 0%, #3b2f6e 100%)',
            },
        },
    },
    plugins: [],
}
