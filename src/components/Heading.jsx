function Heading({ children, textColor, textColorDark, leading, align, font }) {
  return (
    <h2
      className={`text-3xl sm:text-4xl font-semibold ${
        font ? font : "font-workSans"
      } ${leading ? leading : "leading-9 sm:leading-10 tab:leading-[48px]"} ${
        textColor ? textColor : "text-textHeading"
      } ${textColorDark ? { textColorDark } : "dark:text-textHeadingDark"} ${
        align ? align : "text-center"
      }`}
    >
      {children}
    </h2>
  );
}
export default Heading;
