function SectionLayout({ children, bg, padding, bgDark }) {
  return (
    <div
      className={`w-full ${bg ? bg : "bg-white"} ${bgDark ? bgDark : "dark:bg-backgroundDarkGeneral"}`}
    >
      <div className={`max-w-content m-auto`}>
        <div
          className={`px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto ${
            padding ? padding : "py-12 sm:py-16 tab:py-24"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default SectionLayout;
