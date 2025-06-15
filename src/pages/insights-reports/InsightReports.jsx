import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import SectionLayout from "../../ui/SectionLayout";
import DeepDive from "../seed-investors/DeepDive";
import InsightsHero from "./InsightsHero";
import ForgeOutlook from "../../assets/BlackBg.jpg";
import MonthlyInsight from "../../assets/MonthlyInsight.jpg";
import BigText from "../../components/BigText";
import SmallText from "../../components/SmallText";
import Text from "../../components/Text";
import initialData from "./data";

function InsightReports() {
  const [active, setActive] = useState("all");
  const [insightData, setInsightData] = useState(initialData);
  useEffect(() => {
    if (active === "all") {
      setInsightData(initialData);
    }
    if (active === "forge-outlook") {
      setInsightData(initialData.filter((report) => report.type === "forge"));
    }
    if (active === "private-market") {
      setInsightData(initialData.filter((report) => report.type !== "forge"));
    }
  }, [active]);
  return (
    <>
      <InsightsHero />
      <DeepDive />
      <SectionLayout>
        <div className="flex items-center justify-normal gap-5 sm:gap-10">
          <Heading
            align={`text-left`}
            font={`font-clash`}
            extraClass={`w-[80%] sm:w-auto`}
          >
            Browse Insights
          </Heading>
          <div className="relative w-[45%] sm:w-[55%] tab:w-[65%]">
            <div className="absolute h-4 w-4 -top-1.5 rotate-45 bg-secondary2"></div>
            <div className="w-full h-1 bg-secondary2 rounded"></div>
          </div>
        </div>
        <div className="py-5 flex items-center justify-normal gap-5 flex-wrap">
          <button
            onClick={() => setActive("all")}
            className={`${active === "all" ? "bg-secondary2 shadow-md text-textSubTitle font-bold" : "text-textSubheading dark:text-textSubheadingDark dark:bg-backgroundDark"} px-5 py-2.5 border border-borderPrimary dark:border-borderPrimaryDark  rounded-md`}
          >
            All Topic
          </button>
          <button
            onClick={() => setActive("forge-outlook")}
            className={`${active === "forge-outlook" ? "bg-secondary2 shadow-md text-textSubTitle font-bold" : "text-textSubheading dark:text-textSubheadingDark dark:bg-backgroundDark"} px-5 py-2.5 border border-borderPrimary dark:border-borderPrimaryDark  rounded-md`}
          >
            Forge Investment Outlook
          </button>
          <button
            onClick={() => setActive("private-market")}
            className={`${active === "private-market" ? "bg-secondary2 shadow-md text-textSubTitle font-bold" : "text-textSubheading dark:text-textSubheadingDark dark:bg-backgroundDark"} px-5 py-2.5 border border-borderPrimary dark:border-borderPrimaryDark  rounded-md`}
          >
            Private Market Updates
          </button>
        </div>
        <div className="flex items-start justify-between flex-wrap gap-5">
          {insightData.map((item, index) => (
            <React.Fragment key={index}>
              {item.type === "forge" && (
                <div className="w-[47%] sm:w-[31%] tab:w-[23%] cursor-pointer h-[350px] rounded-md overflow-hidden border border-borderPrimary dark:border-borderPrimaryDark">
                  <div
                    className="w-full h-40 bg-center bg-cover p-5 flex flex-col justify-end"
                    style={{ backgroundImage: `url(${ForgeOutlook})` }}
                  >
                    <div className="w-14 h-1 bg-primary rounded"></div>
                    <p
                      className={`font-bold text-lg text-white pt-0.5 leading-normal pb-1`}
                    >
                      Forge Investment Outlook
                    </p>
                    <SmallText
                      fontWeight={`font-medium`}
                      textColor={`text-textSubTitleDark`}
                      textColorDark={` `}
                      extraClass={`tracking-wide`}
                    >
                      {item.month}
                    </SmallText>
                  </div>
                  <div className="h-[190px] pt-[30px] px-[15px] pb-[15px] flex flex-col justify-between">
                    <div>
                      <SmallText
                        extraClass={`uppercase tracking-wide`}
                        fontWeight={`font-medium`}
                      >
                        report
                      </SmallText>
                      <Text
                        fontWeight={`font-medium`}
                        textColor={`text-textSubTitle`}
                        extraClass={`py-2`}
                      >
                        {item.title}
                      </Text>
                    </div>
                    <SmallText fontWeight={`font-medium`}>
                      {item.date}
                    </SmallText>
                  </div>
                </div>
              )}

              {item.type !== "forge" && (
                <div className="w-[47%] sm:w-[31%] tab:w-[23%] cursor-pointer h-[350px] rounded-md overflow-hidden border border-borderPrimary dark:border-borderPrimaryDark">
                  <div
                    className="w-full h-40 bg-center bg-cover p-5 flex flex-col justify-end"
                    style={{ backgroundImage: `url(${MonthlyInsight})` }}
                  >
                    <div className="w-14 h-1 bg-primary rounded"></div>
                    <p
                      className={`font-bold text-lg text-textHeading pt-0.5 leading-normal pb-1`}
                    >
                      {item.month}
                    </p>
                    <SmallText
                      fontWeight={`font-medium`}
                      textColor={`text-textSubTitle`}
                      textColorDark={` `}
                      extraClass={`tracking-wide uppercase`}
                    >
                      Private Market Update
                    </SmallText>
                  </div>
                  <div className="h-[190px] flex flex-col justify-between pt-[30px] px-[15px] pb-[15px]">
                    <div>
                      {" "}
                      <SmallText
                        extraClass={`uppercase tracking-wide`}
                        fontWeight={`font-medium`}
                      >
                        report
                      </SmallText>
                      <Text
                        fontWeight={`font-medium`}
                        textColor={`text-textSubTitle`}
                        extraClass={`py-2`}
                      >
                        {item.title}
                      </Text>
                    </div>
                    <SmallText fontWeight={`font-medium`}>
                      {item.date}
                    </SmallText>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </SectionLayout>
    </>
  );
}

export default InsightReports;
