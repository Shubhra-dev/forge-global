function SubTitle({
  children,
  textColor,
  textColorDark,
  leading,
  align,
  font,
}) {
  return (
    <h3
      className={`text-2xl sm:text-3xl font-semibold ${
        font ? font : "font-workSans"
      } ${leading ? leading : "leading-loose sm:leading-9 tab:leading-10"} ${
        textColor ? textColor : "text-textHeading"
      } ${textColorDark ? { textColorDark } : "dark:text-textHeadingDark"} ${
        align ? align : "text-left"
      }`}
    >
      {children}
    </h3>
  );
}
export default SubTitle;
