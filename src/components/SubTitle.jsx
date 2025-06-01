function SubTitle({
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
    <h3
      className={`text-2xl sm:text-3xl ${font ? font : "font-workSans"} ${
        fontWeight ? fontWeight : "font-semibold"
      } ${leading ? leading : "leading-normal sm:leading-9 tab:leading-10"} ${
        textColor ? textColor : "text-textHeading"
      } ${textColorDark ? { textColorDark } : "dark:text-textHeadingDark"} ${
        align ? align : "text-left"
      } ${extraClass ? extraClass : ""}`}
    >
      {children}
    </h3>
  );
}
export default SubTitle;
