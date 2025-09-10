module.exports = {
  theme: {
    extend: {
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        dropIn: {
          "0%": { transform: "translateY(-100vh)" },
          "70%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        slideRight: "slideRight 0.8s ease-out forwards",
        dropIn: "dropIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        fadeIn: "fadeIn 0.5s ease-in forwards",
      },
    },
  },
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#f5f1e7",
          "primary-content": "#1c1c1c",
          secondary: "#d0ba98",
          "secondary-content": "#1c1c1c",
          accent: "#e2ff99",
          "accent-content": "#1c1c1c",
          neutral: "#1c1c1c",
          "neutral-content": "#f5f1e7",
          "base-100": "#ffffff",
          "base-content": "#1c1c1c",
        },
      },
    ],
  },
};
