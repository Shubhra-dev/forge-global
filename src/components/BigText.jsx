function BigText({
  textColor,
  textColorDark,
  leading,
  align,
  font,
  fontWeight,
  children,
}) {
  return (
    <h6
      className={`text-xl sm:text-2xl ${
        fontWeight ? fontWeight : "font-medium"
      } ${font ? font : "font-workSans"} ${
        leading ? leading : " leading-relaxed tab:leading-7"
      } ${textColor ? textColor : "text-textSubheading"} ${
        textColorDark ? { textColorDark } : "dark:text-textSubheadingDark"
      } ${align ? align : "text-left"}`}
    >
      {children}
    </h6>
  );
}
export default BigText;
