import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import IconBox1 from "../../components/IconBox1";
import ThreeDBlock from "../../assets/icons/3DBlock.svg";
import PrimaryButton from "../../components/PrimaryButton";
function HowUseForge() {
  return (
    <SectionLayout>
      <Heading align={`text-left`} font={`font-clash`}>
        How family offices are using
        <span className="text-primary"> Forge</span>
      </Heading>
      <div className="py-10 flex flex-col sm:flex-row flex-wrap gap-5">
        <IconBox1
          icon={ThreeDBlock}
          title={`Invest in pre-IPO companies`}
          text={`Identify promising private investments and increase growth potential by integrating an uncorrelated asset class into your portfolios.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Sell highly concentrated client positions`}
          text={`Clients may have highly concentrated positions, and Forge helps to generate liquidity by finding buyers for private company shares.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Evaluate co-investment opportunities`}
          text={`Review Forge’s real-time secondary market pricing data to more accurately value co-investment opportunities.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Access market perspective`}
          text={`Stay updated on the private market and unicorn company trends that are relevant to your practice.`}
        />
      </div>
      <div className="w-max m-auto">
        <PrimaryButton>Start Accreditation Process</PrimaryButton>
      </div>
    </SectionLayout>
  );
}

export default HowUseForge;
