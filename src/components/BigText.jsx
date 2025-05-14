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
      className={`text-2xl sm:text-3xl ${
        fontWeight ? fontWeight : "font-medium"
      } ${font ? font : "font-workSans"} ${
        leading ? leading : " leading-relaxed tab:leading-7"
      } ${textColor ? textColor : "text-textParagraph"} ${
        textColorDark ? { textColorDark } : "dark:text-textParagraphDark"
      } ${align ? align : "text-left"}`}
    >
      {children}
    </h6>
  );
}
export default BigText;
