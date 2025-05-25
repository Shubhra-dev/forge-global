import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import IconBox1 from "../../components/IconBox1";
import ThreeDBlock from "../../assets/icons/3DBlock.svg";
import PrimaryButton from "../../components/PrimaryButton";
function HowUsingForge() {
  return (
    <SectionLayout>
      <Heading align={`text-left`} font={`font-clash`}>
        How venture capital firms are using
        <span className="text-primary"> Forge</span>
      </Heading>
      <div className="py-10 flex flex-col sm:flex-row flex-wrap gap-5">
        <IconBox1
          icon={ThreeDBlock}
          title={`Portfolio management`}
          text={`Generate liquidity, in the absence of an exit event, enabling more efficient investment management.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Identify new investments`}
          text={`Use Forge Pro to identify new private market investment opportunities and work with Forge’s Private Market Specialists to execute transactions.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Access competitive pricing`}
          text={`Forge’s real-time price monitoring and company valuation capabilities offer investors transparent price discovery.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Portfolio valuation and insights`}
          text={`Forge’s data enables you to value portfolio companies using live secondary market pricing data.`}
        />
      </div>
      <div className="w-max m-auto">
        <PrimaryButton>Start Accreditation Process</PrimaryButton>
      </div>
    </SectionLayout>
  );
}

export default HowUsingForge;
