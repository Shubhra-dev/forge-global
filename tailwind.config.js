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
        textSubTitle: "#0B0C0E",
        textSubTitleDark: "#FFFFFF",
        textParagraph: "#535B6A",
        textParagraphDark: "#8790A1",
        backgroundTertiaryLight: "#E0E2E6",
        backgroundTertiary: "#22252B",
        backgroundDark: "#000000",
        backgroundPrimary: "#F6F5F2",
        backgroundPrimaryDark: "#1C1C1A",
        backgroundBronze: "#ECD1B6",
        backgroundBronzeDark: "#815222",
        backgroundBronzeLight: "#F5E8DB",
        backgroundBronzeLightDark: "#593818",
        backgroundCream: "#F6F5F2",
        backgroundCreamDark: "#1C1C1A",
        borderPrimary: "#A4AAB7",
        borderPrimaryDark: "#535B6A",
        backgroundDarkGeneral: "#121212",
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
        mobile: "376px",
        tab: "821px",
        smLap: "1025px",
        bgLap: "1250px",
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
