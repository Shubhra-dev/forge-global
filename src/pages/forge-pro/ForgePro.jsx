import SectionLayout from "../../ui/SectionLayout";
import ForgeProHero from "./ForgeProHero";
import ImageBgSection from "./ImageBgSection";
import PrivateMarket from "./PrivateMarket";
import ReportCardSection from "./ReportCardSection";
import WhoWeServeSection from "./WhoWeServeSection";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import { useEffect, useState } from "react";
import { getForgePro } from "../../services/pageAPI";

function ForgePro() {
  const [forgePro, setForgePro] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchForgeProData = async () => {
      setIsLoading(true);
      try {
        const data = await getForgePro();
        setForgePro(data.result.forge_pro);
        console.log("kire");
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchForgeProData();
  }, []);
  return (
    <>
      <ForgeProHero />
      <ImageBgSection />
      <PrivateMarket />
      <WhoWeServeSection />
      <ReportCardSection
        post={forgePro?.post}
        isError={isError}
        isLoading={isLoading}
      />
      <NewsletterAndDisclosure
        newsletter={false}
        legalNotice={forgePro?.legal_notices}
        disclosure={forgePro?.disclosure}
      />
    </>
  );
}

export default ForgePro;
