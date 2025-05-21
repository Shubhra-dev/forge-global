function Title({ textColor, textColorDark, leading, align, children }) {
  return (
    <h1
      className={`text-4xl sm:text-5xl tab:text-5xl font-bold font-clash ${
        leading ? leading : "sm:leading-[48px] tab:leading-[55px]"
      } ${textColor ? textColor : "text-textHeading"} ${
        textColorDark ? { textColorDark } : "dark:text-textHeadingDark"
      } ${align ? align : "text-center"}`}
    >
      {children}
    </h1>
  );
}

export default Title;
