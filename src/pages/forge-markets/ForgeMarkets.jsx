import SectionLayout from "../../ui/SectionLayout";
import ForgeMarketsHero from "./ForgeMarketsHero";
import HowGetStarted from "./HowGetStarted";
import ImageSection from "./ImageSection";
import FAQContainer from "../../ui/FAQContainer";
import WhyForge from "./WhyForge";
import IconBox3 from "../../components/IconBox3";

function ForgeMarkets() {
  return (
    <>
      <ForgeMarketsHero />
      <ImageSection />
      <HowGetStarted />
      <WhyForge />
      <FAQContainer />
      <SectionLayout>
        <div className="flex flex-col sm:flex-row items-center justify-normal gap-10 tab:gap-16">
          <IconBox3
            title={`Explore Forge For Shareholders`}
            detail={`Forge provides a runway for employee shareholders to sell private stock. Learn more about unlocking liquidity on the private market.`}
            buttonText={`Explore Forge For Shareholders`}
          />
          <IconBox3
            title={`Seeking access to a new asset class?`}
            detail={`Enhance investment strategies on the pre-IPO market using the platform with capacity to manage the multifaceted institutional investing process.`}
            buttonText={`Explore Forge For Institutions`}
          />
        </div>
      </SectionLayout>
    </>
  );
}

export default ForgeMarkets;
