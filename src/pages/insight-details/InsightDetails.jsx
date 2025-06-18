import BigText from "../../components/BigText";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import AIPrimaryFundingChart from "./AIPrimaryFundingChart";
import CoreWeavePriceChart from "./CoreWeavePriceChart";
import InsightDetailHero from "./InsightDetailHero";
import IOIDistributionChart from "./IOIDistributionChart";
import KeyTakeaways from "./KeyTakeaways";
import PerformanceChart from "./PerformanceChart";
import PerformanceTable from "./PerformanceTable";
import SideView from "./SideView";
import TradePremiumsChart from "./TradePremiumsChart";

function InsightDetails() {
  return (
    <>
      <InsightDetailHero />
      <SectionLayout bg={`bg-gray-100`} padding={`py-0`}>
        <div className="bg-white dark:bg-black/60 px-8 py-10 flex items-start justify-normal gap-10">
          <div className="w-full tab:w-[70%]">
            <KeyTakeaways />
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
                March weather, at the tail end of winter, is known for starting
                stormy before becoming mild as spring arrives; hence, the saying
                “in like a lion, out like a lamb.” For March 2025 in particular,
                the macro-economic environment reversed this paradigm, as what
                seemed like ideal conditions for upward momentum in the private
                market early in the month, quickly turned volatile at the end of
                the month. While private market performance held up compared to
                the public market, the IPO market was hobbled. The arrival of
                controversial U.S. tariffs also gave investors cause for concern
                about how this will all play out.
              </Text>
            </div>
            <div className="mt-16">
              <BigText
                fontWeight={`font-semibold`}
                textColor={`text-textHeading`}
                textColorDark={`dark:text-textHeadingDark`}
                extraClass={`uppercase`}
              >
                Taking a look back at March
              </BigText>
              <Text extraClass={`mt-5`}>
                At the outset of March, IPO filings gained steam, and the AI
                fundraising bonanza continued. There were several public IPO
                filings which suggested optimism that the dormant IPO market
                would awaken. Riding February’s momentum, companies raised new
                funding rounds in March at attractive valuations.
              </Text>
              <PerformanceTable />
              <Text extraClass={`py-3`}>
                The chart below further highlights that the private market held
                up through the early-April storm.
              </Text>
              <PerformanceChart />
              <AIPrimaryFundingChart />
              <CoreWeavePriceChart />
              <IOIDistributionChart />
              <TradePremiumsChart />
            </div>
          </div>
          <SideView />
        </div>
      </SectionLayout>
    </>
  );
}

export default InsightDetails;
