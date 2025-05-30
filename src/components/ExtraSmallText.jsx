function ExtraSmallText({
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
    <p
      className={`text-xs ${fontWeight ? fontWeight : "font-medium"} ${
        font ? font : "font-workSans"
      } ${leading ? leading : " leading-tight"} ${
        textColor ? textColor : "text-textParagraph"
      } ${textColorDark ? { textColorDark } : "dark:text-textParagraphDark"} ${
        align ? align : "text-left"
      } ${extraClass ? extraClass : ""}`}
    >
      {children}
    </p>
  );
}
export default ExtraSmallText;
