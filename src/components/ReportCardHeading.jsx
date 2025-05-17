function ReportCardHeading({
  children,
  textColor,
  textColorDark,
  leading,
  align,
  font,
  extraClass,
}) {
  return (
    <h2
      className={`text-2xl sm:text-xl tab:text-lg font-bold ${
        font ? font : "font-workSans"
      } ${leading ? leading : "leading-7"} ${
        textColor ? textColor : "text-white"
      } ${textColorDark ? `dark:${textColorDark}` : ""} ${
        align ? align : "text-left"
      } ${extraClass ? extraClass : ""}`}
    >
      {children}
    </h2>
  );
}
export default ReportCardHeading;
