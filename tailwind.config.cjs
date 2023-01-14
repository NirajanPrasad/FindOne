/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00A8FF",
        secondary: "#1E88E5",
        tertiary: "#56aeeb",
        dimBlue: "#EEF8FF",
        white: "#fff",
        dimWhite: "#eee",
        onHover: "#aaa",
        greyPrimary: "#555",
        greySecondary: "#666",
        greyTertiary: "#777",
        greyLight: "#888",
        tagColor1: "#158212",
        tagColor2: "#15476d",
        tagColor3: "#784dc7",
        tagBg3: "#e9dffc",
        tagBg2: "#ebf6ff",
        tagBg1: "#e5ffe4",
        borderLight: "#eae4e4",
        testiColor: "#e7f5ff",
        ctaBg: "#f1f9ff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },

    letterSpacing: {
      heroSpacing: "0.5px",
    },

    lineHeight: {
      1.1: "1.1",
    },

    gridTemplateColumns: {
      custom_2: "48rem 1fr",
      custom_cta: "52rem 1fr",
      2: "repeat(2, 1fr)",
      4: "repeat(4, 1fr)",
      1: "auto",
      auto2: "auto 1fr",
    },

    gridTemplateRows: {
      custom_2: "48rem 1fr",
      custom_cta: "52rem 1fr",
      2: "repeat(2, 1fr)",
      4: "repeat(4, 1fr)",
      auto4: "repeat(4, auto)",
      custom_testimonial: "auto 5rem 1fr",
      hero2: "auto 1fr",
    },
    boxShadow: {
      p4: "0 4px 2px #eee",
    },

    screens: {
      desSt: "1219px",

      phone: { min: "375px", max: "1219px" },

      hamb: { min: "880px" },

      lag: { min: "998px", max: "1219px" },

      sm: "1000px",

      vsm: { max: "710px" },

      ssm: { max: "999px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { max: "1219px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1220px", max: "1350px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: "1351px" },
      // => @media (min-width: 1300px) { ... }
    },
  },
  plugins: [],
};
