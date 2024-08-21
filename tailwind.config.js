/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        fontSize: {
            sm: "max(0.8rem, 0.08vi + 0.78rem)",
            base: "max(1rem, 0.23vi + 0.94rem)",
            md: "max(1.25rem, 0.45vi + 1.14rem)",
            lg: "max(1.56rem, 0.79vi + 1.36rem)",
            xl: "max(1.95rem, 1.29vi + 1.63rem)",
            "2xl": "max(2.44rem, 2.02vi + 1.94rem)",
            "3xl": "max(3.05rem, 3.06vi + 2.29rem)",
            "4xl": "max(3.81rem, 4.54vi + 2.68rem)",
        },
        extend: {
            colors: {
                transparent: "transparent",
                current: "currentColor",
                white: "#E7EFEE",
                black: "#0D171A",
                primary: "#FFDA29",
            },
        },
    },
    plugins: [],
};
