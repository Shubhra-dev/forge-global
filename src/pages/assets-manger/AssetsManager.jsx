import AssetsManagerHero from "./AssetsManagerHero";
import HowFundForge from "./HowFundForge";
import ProductsAndSolution from "../seed-investors/ProductsAndSolution";
import UnlockExclusive from "./UnlockExclusive";
import DeepDive from "../seed-investors/DeepDive";
import DiscoverCompanies from "../home/DiscoverCompanies";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
function AssetsManager() {
  return (
    <>
      <AssetsManagerHero />
      <HowFundForge />
      <ProductsAndSolution />
      <UnlockExclusive />
      <DeepDive />
      <DiscoverCompanies />
      <NewsletterAndDisclosure newsletter={false} disclosureDetail={true} />
    </>
  );
}

export default AssetsManager;
