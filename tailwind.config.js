/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                void: '#030303',
                noise: '#666666',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
                inter: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
