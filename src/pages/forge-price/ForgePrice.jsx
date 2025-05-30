import ForgePriceHero from "./ForgePriceHro";
import IconBoxes from "./IconBoxes";
import SectionLayout from "../../ui/SectionLayout";
import HowToUseForgePrice from "./HowToUseForgePrice";
import PhotoInfoCard2 from "../../components/PhotoInfoCard2";
import ForgePricePI1 from "../../assets/ForgePricePI1.png";
import ForgePricePI2 from "../../assets/ForgePricePI2.png";
import Text from "../../components/Text";

function ForgePrice() {
  return (
    <>
      <ForgePriceHero />
      <IconBoxes />
      <HowToUseForgePrice />
      <SectionLayout>
        <PhotoInfoCard2
          image={ForgePricePI1}
          heading={`Forge Markets`}
          buttonText={`Browse Companies`}
        >
          <Text extraClass={`pb-5`}>
            Find new private company investment opportunities and connect with a
            Specialist.
          </Text>
        </PhotoInfoCard2>
        <PhotoInfoCard2
          image={ForgePricePI2}
          imagePosition="right"
          heading={`Forge Pro`}
          buttonText={`Get Access`}
          extraClass={`pt-10 tab:pt-16`}
        >
          <Text extraClass={`pb-5`}>
            Find new private company investment opportunities and connect with a
            Specialist.
          </Text>
        </PhotoInfoCard2>
      </SectionLayout>
    </>
  );
}

export default ForgePrice;
