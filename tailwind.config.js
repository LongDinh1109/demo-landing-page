export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      fontSize: {
        xs: ["10px", { lineHeight: "0.75rem" }],
        sm: ["12px", { lineHeight: "1rem" }],
        md: ["14px", { lineHeight: "1.25rem" }],
        base: ["18px", { lineHeight: "1.5rem" }],
        lg: ["20px", { lineHeight: "1.75rem" }],
        xl: ["36px", { lineHeight: "3.25rem" }],
        "2xl": ["48px", { lineHeight: "3.6rem" }],
      },
      colors: {
        primary: "#676FC5",
        secondary: "#787EA2",
        gray: "#2E324ECC",
      },
      backgroundImage: {
        "purple-gradient":
          "linear-gradient(90deg, rgba(103, 111, 197, 0.5) 0%, #676FC5 47.5%)",
        "white-gradient":
          "linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, #FFFFFF 33.5%)",
        "white-gradient-1":
          "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
        "white-gradient-2":
          "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
      },
      backdropBlur: {
        32: "32px", // Custom blur value
      },
    },
  },
  plugins: [],
};
