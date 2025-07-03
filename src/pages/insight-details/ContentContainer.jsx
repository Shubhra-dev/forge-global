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
function ContentContainer({ contents = [] }) {
  console.log(contents);
  return (
    <SectionLayout bg={`bg-gray-100`} padding={`py-0`}>
      <div className="bg-white dark:bg-black/60 px-8 py-10 flex items-start justify-normal gap-10">
        <div className="w-full tab:w-[70%]">
          {contents.map((item, index) => (
            <React.Fragment key={index}>
              {item.content_type === `key-takeaways` && <KeyTakeaways />}
              {item.content_type === `text` && (
                <div className="mt-16">
                  <BigText
                    fontWeight={`font-semibold`}
                    textColor={`text-textHeading`}
                    textColorDark={`dark:text-textHeadingDark`}
                    extraClass={`uppercase`}
                  >
                    Overview
                  </BigText>
                  <Text extraClass={`mt-5`}>
                    March weather, at the tail end of winter, is known for
                    starting stormy before becoming mild as spring arrives;
                    hence, the saying “in like a lion, out like a lamb.” For
                    March 2025 in particular, the macro-economic environment
                    reversed this paradigm, as what seemed like ideal conditions
                    for upward momentum in the private market early in the
                    month, quickly turned volatile at the end of the month.
                    While private market performance held up compared to the
                    public market, the IPO market was hobbled. The arrival of
                    controversial U.S. tariffs also gave investors cause for
                    concern about how this will all play out.
                  </Text>
                </div>
              )}
              <div className="mt-16">
                {item.content_type === `graph` &&
                  item.data.chart_type === "line" && <PerformanceChart />}
                {item.content_type === `graph` &&
                  item.data.chart_type === "" && <AIPrimaryFundingChart />}
                {item.content_type === `graph` &&
                  item.data.chart_type === "bar" && <CoreWeavePriceChart />}
                {item.content_type === `graph` &&
                  item.data.chart_type === "bar_distributed" && (
                    <IOIDistributionChart />
                  )}
                {item.content_type === `graph` &&
                  item.data.chart_type === "pie" && <TradePremiumsChart />}
              </div>
            </React.Fragment>
          ))}
        </div>
        <SideView />
      </div>
    </SectionLayout>
  );
}

export default ContentContainer;
