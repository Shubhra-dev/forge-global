function Heading({
  children,
  textColor,
  textColorDark,
  leading,
  align,
  font,
  fontWeight,
  extraClass,
}) {
  return (
    <h2
      className={`text-3xl sm:text-4xl  ${
        font ? font : "font-workSans"
      } ${fontWeight ? fontWeight : "font-semibold"} ${leading ? leading : "leading-9 sm:leading-10 tab:leading-[48px]"} ${
        textColor ? textColor : "text-textHeading"
      } ${textColorDark ? `dark:${textColorDark}` : "dark:text-textHeadingDark"} ${
        align ? align : "text-center"
      } ${extraClass ? extraClass : ""}`}
    >
      {children}
    </h2>
  );
}
export default Heading;
