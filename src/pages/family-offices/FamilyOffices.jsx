import { useEffect, useState } from "react";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import UnlockExclusive from "../assets-manger/UnlockExclusive";
import DiscoverCompanies from "../home/DiscoverCompanies";
import DeepDive from "../seed-investors/DeepDive";
import ProductAndSolution from "../seed-investors/ProductsAndSolution";
import FamilyOfficesHero from "./FamilyOfficesHero";
import HowUseForge from "./HowUseForge";
import { getFamilyOffices } from "../../services/pageAPI";

function FamilyOffices() {
  const [familyOffices, setFamilyOffices] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchFamilyOfficesData = async () => {
      setIsLoading(true);
      try {
        const data = await getFamilyOffices();
        setFamilyOffices(data.result.family_offices);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFamilyOfficesData();
  }, []);
  return (
    <>
      <FamilyOfficesHero />
      <HowUseForge />
      <ProductAndSolution />
      <UnlockExclusive />
      <DeepDive
        isLoaing={isLoading}
        isError={isError}
        data={familyOffices?.private_market_trends}
      />
      <DiscoverCompanies />
      <NewsletterAndDisclosure
        newsletter={false}
        disclosure={familyOffices?.disclosure}
        legalNotice={familyOffices?.legal_notices}
      />
    </>
  );
}

export default FamilyOffices;
