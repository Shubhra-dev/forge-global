import { useEffect, useState } from "react";
import { getWealthManager } from "../../services/pageAPI";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import UnlockExclusive from "../assets-manger/UnlockExclusive";
import DiscoverCompanies from "../home/DiscoverCompanies";
import DeepDive from "../seed-investors/DeepDive";
import ProductAndSolution from "../seed-investors/ProductsAndSolution";
import HowWealthManUsing from "./HowWealthManUsing";
import WealthManagersHero from "./WealthManagersHero";

function WealthManagers() {
  const [wealthManager, setWealthManager] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchWealthManagerData = async () => {
      setIsLoading(true);
      try {
        const data = await getWealthManager();
        setWealthManager(data.result.wealth_managers);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWealthManagerData();
  }, []);
  return (
    <>
      <WealthManagersHero />
      <HowWealthManUsing />
      <ProductAndSolution />
      <UnlockExclusive />
      <DeepDive
        isLoaing={isLoading}
        isError={isError}
        data={wealthManager?.private_market_trends}
      />
      <DiscoverCompanies />
      <NewsletterAndDisclosure
        newsletter={false}
        disclosure={wealthManager?.disclosure}
        legalNotice={wealthManager?.legal_notices}
      />
    </>
  );
}

export default WealthManagers;
