/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        colors: {
            black: {
                950: "#111111",
            },
            grey: {
                // hover
                100: "#e2e2e2",
                150: "#dadada",
                200: "#767676",
                // active
                300: "#828282",
                // hover
                400: "#878787",
                950: "#5f5f5f",
            },
            transparent: "transparent",
            purple: "#3f3cbb",
            midnight: "#121063",
            metal: "#565584",
            tahiti: "#3ab7bf",
            silver: "#ecebff",
            "bubble-gum": "#ff77e9",
            bermuda: "#78dcca",
        },
        extend: {
            textColor: {
                white: "#ffffff",
                dark: "#000000",
            },
        },
    },
    plugins: [],
};
