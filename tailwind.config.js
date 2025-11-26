/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: '#C5A059',
                'gold-hover': '#B08D45',
                surface: '#F8F8F8',
                dark: '#1A1A1A',
            },
            fontFamily: {
                heading: ['"Playfair Display"', 'serif'],
                body: ['Lato', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
