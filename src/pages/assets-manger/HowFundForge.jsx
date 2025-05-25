import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import IconBox1 from "../../components/IconBox1";
import ThreeDBlock from "../../assets/icons/3DBlock.svg";
import PrimaryButton from "../../components/PrimaryButton";
function HowFundForge() {
  return (
    <SectionLayout>
      <Heading align={`text-left`} font={`font-clash`}>
        How asset managers and hedge funds use{" "}
        <span className="text-primary">Forge</span>
      </Heading>
      <div className="py-10 flex flex-col sm:flex-row flex-wrap gap-5">
        <IconBox1
          icon={ThreeDBlock}
          title={`Integrate an uncorrelated asset class`}
          text={`Private, pre-IPO companies can provide an important source of growth and diversification for client portfolios.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Enhance decision making`}
          text={`Forge’s proprietary secondary market data makes it easy to understand the live market for specific companies as you make investment decisions. `}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Uncover new opportunities`}
          text={`Work with Forge’s team of institutional private market specialists to see unique deal flow so you can invest in the next generation of companies before they go public.`}
        />
        <IconBox1
          icon={ThreeDBlock}
          title={`Explore primary markets`}
          text={`Along with secondary trading, Forge can help you access opportunities in the primary markets for private companies.`}
        />
      </div>
      <div className="w-max m-auto">
        <PrimaryButton>Start Accreditation Process</PrimaryButton>
      </div>
    </SectionLayout>
  );
}

export default HowFundForge;
