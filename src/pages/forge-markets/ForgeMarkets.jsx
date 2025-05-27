import SectionLayout from "../../ui/SectionLayout";
import ForgeMarketsHero from "./ForgeMarketsHero";
import ImageSection from "./ImageSection";
import WhyInvestPrivate from "../../assets/WhyInvestPrivate.png";
import HowGetStarted from "../../assets/HowGetStarted.png";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import Text from "../../components/Text";
import SecondaryButton from "../../components/SecondaryButton";
import PrimaryButton from "../../components/PrimaryButton";

function ForgeMarkets() {
  return (
    <>
      <ForgeMarketsHero />
      <ImageSection />
      <SectionLayout>
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-10 tab:gap-16">
          <div className="w-full sm:w-1/2">
            <img
              src={WhyInvestPrivate}
              alt="why invest"
              className="w-full h-56 tab:h-96 object-cover"
            />
            <div className="pt-10">
              <SmallText>Private Company Investment</SmallText>
              <SubHeading extraClass={`py-4`}>
                Why invest in the private market?
              </SubHeading>
              <Text extraClass={`pb-5`}>
                The private market represents potential opportunities for
                investors and shareholders alike. In a market where timing can
                be important, Forge is an avenue to potentially achieve
                diversification, outsized returns and liquidity.
              </Text>
              <div className="w-full">
                <SecondaryButton iconDown={true} extraClass={`w-full`}>
                  Learn More About Trading Private Company Shares
                </SecondaryButton>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <img
              src={HowGetStarted}
              alt="how to get started"
              className="w-full h-56 tab:h-96 object-cover"
            />
            <div className="pt-10">
              <SmallText>Start Your Business</SmallText>
              <SubHeading extraClass={`py-4`}>How to get started</SubHeading>
              <Text extraClass={`pb-5`}>
                Accredited individuals that meet specific net worth or income
                requirements are invited to access Forge’s private stock market.
                Create a free account to connect with a Private Market
                Specialist to determine qualification.
              </Text>
              <div className="w-max m-auto sm:m-0">
                <PrimaryButton icon={true}>Create an Account</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default ForgeMarkets;
