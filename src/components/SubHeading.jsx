function SubHeading({
  textColor,
  textColorDark,
  leading,
  align,
  font,
  fontWeight,
  children,
  extraClass,
}) {
  return (
    <h2
      className={`text-xl tab:text-2xl ${
        fontWeight ? fontWeight : "font-semibold"
      } ${font ? font : "font-workSans"} ${
        leading ? leading : "leading-7 sm:leading-loose"
      } ${textColor ? textColor : "text-textSubheading"} ${
        textColorDark ? { textColorDark } : "dark:text-textSubheadingDark"
      } ${align ? align : "text-left"} ${extraClass ? extraClass : ""}`}
    >
      {children}
    </h2>
  );
}
export default SubHeading;
