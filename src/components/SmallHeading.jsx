function SmallHeading({
  children,
  textColor,
  textColorDark,
  leading,
  fontWeight,
  align,
  font,
  extraClass,
}) {
  return (
    <h2
      className={`text-lg sm:text-xl ${fontWeight ? fontWeight : "font-medium"} ${
        font ? font : "font-workSans"
      } ${leading ? leading : "leading-relaxed tab:leading-7"} ${
        textColor ? textColor : "text-textHeading"
      } ${textColorDark ? { textColorDark } : "dark:text-textHeadingDark"} ${
        align ? align : "text-left"
      } ${extraClass ? extraClass : ""}`}
    >
      {children}
    </h2>
  );
}
export default SmallHeading;
