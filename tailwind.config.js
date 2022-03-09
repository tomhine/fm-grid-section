module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          violet: "hsl(263, 55%, 52%)",
          background: "hsl(210, 46%, 95%)",
        },
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },

      fontSize: {
        "1xl": ["1.3rem", "1.4rem"],
      },
    },
  },
  plugins: [],
};
