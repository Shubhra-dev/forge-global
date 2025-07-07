import React from "react";
import BigText from "../../components/BigText";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import AIPrimaryFundingChart from "./AIPrimaryFundingChart";
import CoreWeavePriceChart from "./CoreWeavePriceChart";
import IOIDistributionChart from "./IOIDistributionChart";
import KeyTakeaways from "./KeyTakeaways";
import PerformanceChart from "./PerformanceChart";
import PerformanceTable from "./PerformanceTable";
import SideView from "./SideView";
import TradePremiumsChart from "./TradePremiumsChart";
import BarChartComponent from "./BarChartComponent";
import PieDistributionChart from "./PieDistributionChart";
import DOMPurify from "dompurify";

function ContentContainer({ contents = [] }) {
  return (
    <SectionLayout bg={`bg-gray-100`} padding={`py-0`}>
      <div className="bg-white dark:bg-black/60 px-8 py-10 flex items-start justify-normal gap-10">
        <div className="w-full tab:w-[70%]">
          {contents.map((item, index) => (
            <React.Fragment key={index}>
              {item.content_type === `key_takeaways` && (
                <KeyTakeaways
                  editorData={item.data}
                  title={item.title}
                  id={index}
                />
              )}
              {item.content_type === `text` && (
                <div className="mt-16" id={index}>
                  <BigText
                    fontWeight={`font-semibold`}
                    textColor={`text-textHeading`}
                    textColorDark={`dark:text-textHeadingDark`}
                    extraClass={`uppercase`}
                  >
                    {item.title}
                  </BigText>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(item.data),
                    }}
                    className="mt-5 text-textParagraph dark:text-textParagraphDark font-normal text-base font-workSans"
                  ></div>
                </div>
              )}
              <div className="mt-16">
                {item.content_type === `graph` &&
                  item.data.chart_type === "line" && (
                    <PerformanceChart content={item} id={index} />
                  )}
                {item.content_type === `graph` &&
                  item.data.chart_type === "" && (
                    <AIPrimaryFundingChart id={index} />
                  )}
                {item.content_type === `graph` &&
                  item.data.chart_type === "bar" && (
                    <BarChartComponent
                      data={item.data}
                      title={item.title}
                      id={index}
                    />
                  )}
                {item.content_type === `graph` &&
                  item.data.chart_type === "bar_distributed" && (
                    <IOIDistributionChart
                      data={item.data}
                      title={item.title}
                      id={index}
                    />
                  )}
                {item.content_type === `graph` &&
                  item.data.chart_type === "pie" && (
                    <PieDistributionChart
                      data={item.data}
                      title={item.title}
                      id={index}
                    />
                  )}
              </div>
            </React.Fragment>
          ))}
        </div>
        <SideView contents={contents} />
      </div>
    </SectionLayout>
  );
}

export default ContentContainer;
