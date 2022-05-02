module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["0.65rem", "0.75rem"],
      sm: ["0.75rem", "0.75rem"],
      base: ["0.875rem", "0.875rem"],
      lg: ["1rem", "1rem"],
      xl: ["1.125rem", "1.125rem"],
      "2xl": ["1.25rem", "1.25rem"],
    },
    extend: {
      fontFamily: {
        sans: ["Roboto"],
      },
      colors: {
        primary: "#cc6464",
        textDefault: "#555",
        textDate: "#888",
      },
    },
  },
  plugins: [],
};
