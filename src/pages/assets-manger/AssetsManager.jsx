import AssetsManagerHero from "./AssetsManagerHero";
import HowFundForge from "./HowFundForge";
import ProductsAndSolution from "../seed-investors/ProductsAndSolution";
import UnlockExclusive from "./UnlockExclusive";
import DeepDive from "../seed-investors/DeepDive";
import DiscoverCompanies from "../home/DiscoverCompanies";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import { useEffect, useState } from "react";
import { getAssetManager } from "../../services/pageAPI";
function AssetsManager() {
  const [assetManager, setAssetManager] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchAssetManagerData = async () => {
      setIsLoading(true);
      try {
        const data = await getAssetManager();
        setAssetManager(data.result.asset_manager);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAssetManagerData();
  }, []);
  return (
    <>
      <AssetsManagerHero />
      <HowFundForge />
      <ProductsAndSolution />
      <UnlockExclusive />
      <DeepDive
        isLoaing={isLoading}
        isError={isError}
        data={assetManager.private_market_trends}
      />
      <DiscoverCompanies />
      <NewsletterAndDisclosure
        newsletter={false}
        disclosure={assetManager.asset_manager_page_disclosures}
        legalNotice={assetManager.asset_manager_page_legal_notices}
      />
    </>
  );
}

export default AssetsManager;
