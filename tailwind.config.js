/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: {
                    DEFAULT: '#0B0B0C', // Primary background
                    2: '#1A1A1D',       // Secondary surfaces
                },
                divider: '#2A2F36',     // Separation
                white: {
                    DEFAULT: '#F5F5F5', // Headlines
                },
                gray: {
                    high: '#8A8F98',    // Body text
                    mid: '#7A8087',     // Labels, metadata
                },
                orange: {
                    DEFAULT: '#C56A1A', // Decision trigger
                }
            },
            fontFamily: {
                helvetica: ['"Helvetica Now"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
            },
            letterSpacing: {
                brutal: '-0.06em',
                label: '0.18em',
            },
            fontWeight: {
                light: '300',
                regular: '400',
                medium: '500',
                bold: '700',
            },
        },
    },
    plugins: [],
}
