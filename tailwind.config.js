export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#CE8946",
        secondary: "#815222",
        secondary2: "#EFBF04",
        textHeading: "#22252B",
        textHeadingDark: "#E0E2E6",
        textSubheading: "#3A404A",
        textSubheadingDark: "#A4AAB7",
        textParagraph: "#535B6A",
        textParagraphDark: "#8790A1",
        backgroundTertiary: "#22252B",
        backgroundDark: "#000000",
        borderPrimary: "#A4AAB7",
        borderPrimaryDark: "#535B6A",
      },
      fontFamily: {
        clash: ["Clash Grotesk", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
      },
      boxShadow: {
        allSide: "0 0 10px 5px rgba(0, 0, 0, 0.5)", // Example custom shadow
        allSide2: "0 0 30px 15px rgba(0, 0, 0, 0.5)", // Example custom shadow
      },
      maxWidth: {
        content: "1750px", // perfect for readable text
      },
      screens: {
        tab: "770px",
        smLap: "1025px",
        laptop: "1285px",
        content: "1750px",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #E7EEEE 0%, #FFF 68.9%)",
      },
      borderRadius: {
        md: "10px", // Customize the rounded-md value (default is 0.375rem or 6px)
      },
    },
  },
  plugins: [],
};
