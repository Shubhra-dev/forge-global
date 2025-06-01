import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import PhotoInfoCard2 from "../../components/PhotoInfoCard2";
import HowToPrice from "../../assets/HowToPrice.png";
import Text from "../../components/Text";
function HowToIntegrate() {
  return (
    <SectionLayout>
      <Heading font={`font-clash`} extraClass={`pb-10`}>
        How to integrate <span className="text-primary">Forge Price</span>
      </Heading>
      <div>
        <PhotoInfoCard2
          buttonText={`Learn More`}
          image={HowToPrice}
          imagePosition="left"
          heading={`API and file-based delivery `}
        >
          <Text extraClass={"pb-5"}>
            Investors and financial institutions can integrate the Forge Data
            API—with same-day trade pricing, indications of interest,
            valuations, and more—into their existing investment process,
            including portfolio and risk management tools. Customers can also
            receive the data via a file-based format.
          </Text>
        </PhotoInfoCard2>
      </div>
    </SectionLayout>
  );
}

export default HowToIntegrate;
