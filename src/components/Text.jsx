function Text({
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
    <h1
      className={`text-base ${fontWeight ? fontWeight : "font-normal"} ${
        font ? font : "font-workSans"
      } ${leading ? leading : " leading-normal"} ${
        textColor ? textColor : "text-textParagraph"
      } ${textColorDark ? { textColorDark } : "dark:text-textParagraphDark"} ${
        align ? align : "text-left"
      } ${extraClass ? extraClass : ""}`}
    >
      {children}
    </h1>
  );
}
export default Text;
