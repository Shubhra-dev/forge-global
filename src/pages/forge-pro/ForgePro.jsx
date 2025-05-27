import SectionLayout from "../../ui/SectionLayout";
import ForgeProHero from "./ForgeProHero";
import ImageBgSection from "./ImageBgSection";
import PrivateMarket from "./PrivateMarket";
import ReportCardSection from "./ReportCardSection";
import WhoWeServeSection from "./WhoWeServeSection";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";

function ForgePro() {
  return (
    <>
      <ForgeProHero />
      <ImageBgSection />
      <PrivateMarket />
      <WhoWeServeSection />
      <ReportCardSection />
      <NewsletterAndDisclosure
        oneDisclosure={true}
        newsletter={false}
        disclosurelist={false}
      />
    </>
  );
}

export default ForgePro;
