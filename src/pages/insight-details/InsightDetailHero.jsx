import SmallHeading from "../../components/SmallHeading";
import MonthlyInsightHeroBg from "../../assets/MonthlyInsightHeroBg.jpg";
import BlackBg from "../../assets/BlackBg.jpg";
import Title from "../../components/Title";
import SubTitle from "../../components/SubTitle";
import Facebook from "../../assets/icons/Facebook2.svg";
import LinkedIn from "../../assets/icons/LinkedIn2.svg";
import X from "../../assets/icons/X2.svg";
function InsightDetailHero({
  category,
  title,
  author,
  date,
  quarter,
  quarterYear,
}) {
  if (category !== "Forge Investment Outlook") {
    return (
      <div
        className="pt-[100px] sm:pt-[65px] h-auto sm:h-[550px] w-full bg-backgroundPrimary dark:bg-backgroundDarkGeneral bg-center bg-cover bg-no-repeat flex items-end"
        style={{ backgroundImage: `url(${MonthlyInsightHeroBg})` }}
      >
        <div className="mx-auto max-w-content w-full">
          <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 mx-auto flex flex-col items-end gap-8 sm:gap-14">
            <div className="w-full">
              <Title textColorDark={` `} align={`text-left`}>
                {category === "Private Market Data & Analytics"
                  ? "Private Market Data & Analytics"
                  : "Private Market Update"}
              </Title>
              <div className="w-28 h-[5px] bg-primary rounded-[30px] my-2.5"></div>
              <SmallHeading
                extraClass={`tracking-widest uppercase`}
                textColor={`text-textParagraph`}
                fontWeight={`font-medium`}
                textColorDark={` `}
              >
                {new Date(date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </SmallHeading>
            </div>
            <div className="w-full bg-white/60 dark:bg-black/60 rounded-t-md pt-7 pb-10 px-4 flex items-center justify-between">
              <div className="w-[85%] sm:w-[75%]">
                <SubTitle fontWeight={`font-bold`}>{title}</SubTitle>
                <div className="pt-5">
                  <SmallHeading
                    textColor={`text-textHeading`}
                    fontWeight={`font-bold`}
                  >
                    {author}
                  </SmallHeading>
                  <SmallHeading textColor={`text-textHeading`}>
                    {date}
                  </SmallHeading>
                </div>
              </div>
              <div className="w-max">
                <div className="bg-blue-900 cursor-pointer rounded-md p-1.5">
                  <img src={Facebook} alt="facebook icon" />
                </div>
                <div className="bg-[#0077B5] cursor-pointer rounded-md p-1.5 my-2.5">
                  <img src={LinkedIn} alt="linkedin icon" />
                </div>
                <div className="bg-black cursor-pointer rounded-md p-1.5">
                  <img src={X} alt="x icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="pt-[100px] sm:pt-[65px] h-auto sm:h-[550px] w-full bg-backgroundPrimary dark:bg-backgroundDarkGeneral bg-center bg-cover bg-no-repeat flex items-end"
        style={{ backgroundImage: `url(${BlackBg})` }}
      >
        <div className="mx-auto max-w-content w-full">
          <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 mx-auto flex flex-col items-end gap-8 sm:gap-14">
            <div className="w-full">
              <Title
                textColor={`text-textHeadingDark`}
                textColorDark={` `}
                align={`text-left`}
              >
                Forge Investment Outlook
              </Title>
              <div className="w-28 h-[5px] bg-primary rounded-[30px] my-2.5"></div>
              <SmallHeading
                extraClass={`tracking-widest uppercase`}
                textColor={`text-textParagraphDark`}
                fontWeight={`font-medium`}
                textColorDark={` `}
              >
                {quarter} {quarterYear}
              </SmallHeading>
            </div>
            <div className="w-full bg-black/60 rounded-t-md pt-7 pb-10 px-4 flex items-center justify-between">
              <div className="w-[85%] sm:w-[75%]">
                <SubTitle
                  textColor={`text-textHeadingDark`}
                  fontWeight={`font-bold`}
                >
                  {title}
                </SubTitle>
                <div className="pt-5">
                  <SmallHeading
                    textColor={`text-textHeadingDark`}
                    fontWeight={`font-bold`}
                  >
                    {author}
                  </SmallHeading>
                  <SmallHeading textColor={`text-textHeadingDark`}>
                    {date}
                  </SmallHeading>
                </div>
              </div>
              <div className="w-max">
                <div className="bg-blue-900 cursor-pointer rounded-md p-1.5">
                  <img src={Facebook} alt="facebook icon" />
                </div>
                <div className="bg-[#0077B5] cursor-pointer rounded-md p-1.5 my-2.5">
                  <img src={LinkedIn} alt="linkedin icon" />
                </div>
                <div className="bg-black cursor-pointer rounded-md p-1.5">
                  <img src={X} alt="x icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InsightDetailHero;
