import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import IconBox1 from "../../components/IconBox1";
import ThreeDBlock from "../../assets/icons/3DBlock.svg";
import PrimaryButton from "../../components/PrimaryButton";
function HowWealthManUsing() {
  return (
    <SectionLayout>
      <Heading align={`text-left`} font={`font-clash`}>
        How wealth managers are using
        <span className="text-primary"> Forge</span>
      </Heading>
      <div className="py-10 flex flex-col sm:flex-row flex-wrap gap-5">
        <IconBox1
          icon={ThreeDBlock}
          title={`Invest in private companies`}
          text={`Explore pre-IPO investment opportunities, including diversified and single asset funds, offering clients a broader range of investing options.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Enhance client liquidity`}
          text={`Generate liquidity for your client’s current private holdings by accessing Forge’s network of buyers.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Understand the value of private assets`}
          text={`Forge’s real-time secondary market pricing and transaction data helps you accurately value clients’ private market investments.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Tailored investments solutions`}
          text={`Work with Forge to customize private market investment strategies that align with your clients’ specific mandates, risk tolerances, and financial goals.`}
        />
      </div>
      <div className="w-max m-auto">
        <PrimaryButton>Start Accreditation Process</PrimaryButton>
      </div>
    </SectionLayout>
  );
}

export default HowWealthManUsing;
