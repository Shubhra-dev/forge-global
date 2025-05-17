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
    <p
      className={`text-base ${fontWeight ? fontWeight : "font-normal"} ${
        font ? font : "font-workSans"
      } ${leading ? leading : " leading-normal"} ${
        textColor ? textColor : "text-textParagraph"
      } ${textColorDark ? `dark:${textColorDark}` : "dark:text-textParagraphDark"} ${
        align ? align : "text-left"
      } ${extraClass ? extraClass : ""}`}
    >
      {children}
    </p>
  );
}
export default Text;
