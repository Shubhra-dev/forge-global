import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import IconBox1 from "../../components/IconBox1";
import ThreeDBlock from "../../assets/icons/3DBlock.svg";
import PrimaryButton from "../../components/PrimaryButton";
function HowSeedInvestors() {
  return (
    <SectionLayout>
      <Heading align={`text-left`} font={`font-clash`}>
        How seed and angel investors use{" "}
        <span className="text-primary">Forge</span>
      </Heading>
      <div className="py-10 flex flex-col sm:flex-row flex-wrap gap-5">
        <IconBox1
          icon={ThreeDBlock}
          title={`Find new angel investments`}
          text={`Discover new investment opportunities in venture-backed, pre-IPO companies.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Manage your portfolio`}
          text={`Work with Forge’s industry-leading Private Market Specialists to manage your existing angel and seed investments via access to Forge’s broad-based investor network.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Real-time price discovery`}
          text={`Track closed transactions and real-time valuations for your portfolio companies as they trade in the secondary market.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Trade with conviction`}
          text={`Utilize Forge’s proprietary trading data, market insights, and analysis to help you navigate the pre-IPO market.`}
        />
      </div>
      <div className="w-max m-auto">
        <PrimaryButton>Start Accreditation Process</PrimaryButton>
      </div>
    </SectionLayout>
  );
}

export default HowSeedInvestors;
