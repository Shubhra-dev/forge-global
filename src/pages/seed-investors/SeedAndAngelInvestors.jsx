import HowSeedInvestors from "./HowSeedInvestors";
import ProductAndSolution from "./ProductsAndSolution";
import SeedAndAngelInvestorsHero from "./SeedAndAngelInvestorsHero";
import UnlockCompanies from "../home/UnlockCompanies";
import DeepDive from "./DeepDive";
import DiscoverCompanies from "../home/DiscoverCompanies";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import { useEffect, useState } from "react";
import { getAngleInvestor } from "../../services/pageAPI";

function SeedAndAngelInvestors() {
  const [angleInvestor, setAngleInvestor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchAngleInvestorData = async () => {
      setIsLoading(true);
      try {
        const data = await getAngleInvestor();
        setAngleInvestor(data.result.seed_and_angel_investors);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAngleInvestorData();
  }, []);
  return (
    <>
      <SeedAndAngelInvestorsHero />
      <HowSeedInvestors />
      <ProductAndSolution />
      <UnlockCompanies />
      <DeepDive
        data={angleInvestor?.private_market_trends}
        isLoaing={isLoading}
        isError={isError}
      />
      <DiscoverCompanies />
      {angleInvestor && !isError && !isLoading && (
        <NewsletterAndDisclosure
          newsletter={false}
          disclosure={angleInvestor?.disclosures}
          legalNotice={angleInvestor?.legal_notices}
        />
      )}
    </>
  );
}

export default SeedAndAngelInvestors;
