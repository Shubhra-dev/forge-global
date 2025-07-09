import { useEffect, useState } from "react";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import UnlockExclusive from "../assets-manger/UnlockExclusive";
import DiscoverCompanies from "../home/DiscoverCompanies";
import DeepDive from "../seed-investors/DeepDive";
import ProductAndSolution from "../seed-investors/ProductsAndSolution";
import HowUsingForge from "./HowUsingForge";
import VentureCapitalHero from "./VentureCapitalHero";
import { getVentureCapital } from "../../services/pageAPI";

function VentureCapitalFirms() {
  const [ventureCapital, setVentureCapital] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchVentureCapitalData = async () => {
      setIsLoading(true);
      try {
        const data = await getVentureCapital();
        setVentureCapital(data.result.venture_capital_firms);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchVentureCapitalData();
  }, []);
  return (
    <>
      <VentureCapitalHero />
      <HowUsingForge />
      <ProductAndSolution />
      <UnlockExclusive />
      <DeepDive
        isLoaing={isLoading}
        isError={isError}
        data={ventureCapital?.private_market_trends}
      />
      <DiscoverCompanies />
      <NewsletterAndDisclosure
        newsletter={false}
        disclosure={ventureCapital?.disclosure}
        legalNotice={ventureCapital?.legal_notices}
      />
    </>
  );
}

export default VentureCapitalFirms;
