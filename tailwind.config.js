/** @type {import('tailwindcss').Config} */
export default {
    content: [],
    theme: {
        fontSize: {
            sm: "min(max(0.8rem, 0.08vi + 0.78rem), 0.08vb + 0.78rem)",
            base: "min(max(1rem, 0.23vi + 0.94rem), 0.23vb + 0.94rem)",
            md: "min(max(1.25rem, 0.45vi + 1.14rem), 0.45vb + 1.14rem)",
            lg: "min(max(1.56rem, 0.79vi + 1.36rem), 0.79vb + 1.36rem)",
            xl: "min(max(1.95rem, 1.29vi + 1.63rem), 1.29vb + 1.63rem)",
            "2xl": "min(max(2.44rem, 2.02vi + 1.94rem), 2.02vb + 1.94rem)",
            "3xl": "min(max(3.05rem, 3.06vi + 2.29rem), 3.06vb + 2.29rem)",
            "4xl": "min(max(3.81rem, 4.54vi + 2.68rem), 4.54vb + 2.68rem)",
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
