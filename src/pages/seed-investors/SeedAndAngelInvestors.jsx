import HowSeedInvestors from "./HowSeedInvestors";
import ProductAndSolution from "./ProductsAndSolution";
import SeedAndAngelInvestorsHero from "./SeedAndAngelInvestorsHero";
import UnlockCompanies from "../home/UnlockCompanies";
import DeepDive from "./DeepDive";
import DiscoverCompanies from "../home/DiscoverCompanies";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";

function SeedAndAngelInvestors() {
  return (
    <>
      <SeedAndAngelInvestorsHero />
      <HowSeedInvestors />
      <ProductAndSolution />
      <UnlockCompanies />
      <DeepDive />
      <DiscoverCompanies />
      <NewsletterAndDisclosure newsletter={false} disclosureDetail={true} />
    </>
  );
}

export default SeedAndAngelInvestors;
