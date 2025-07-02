function Title({
  textColor,
  textColorDark,
  leading,
  align,
  children,
  fontWeight,
  font,
}) {
  return (
    <h1
      className={`text-4xl sm:text-5xl  ${font ? font : "font-clash"} ${
        leading ? leading : "sm:leading-[48px] tab:leading-[55px]"
      } ${textColor ? textColor : "text-textHeading"} ${
        textColorDark ? { textColorDark } : "dark:text-textHeadingDark"
      } ${align ? align : "text-center"} ${fontWeight ? fontWeight : "font-bold"}  `}
    >
      {children}
    </h1>
  );
}

export default Title;
