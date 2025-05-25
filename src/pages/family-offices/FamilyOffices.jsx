import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import UnlockExclusive from "../assets-manger/UnlockExclusive";
import DiscoverCompanies from "../home/DiscoverCompanies";
import DeepDive from "../seed-investors/DeepDive";
import ProductAndSolution from "../seed-investors/ProductsAndSolution";
import FamilyOfficesHero from "./FamilyOfficesHero";
import HowUseForge from "./HowUseForge";

function FamilyOffices() {
  return (
    <>
      <FamilyOfficesHero />
      <HowUseForge />
      <ProductAndSolution />
      <UnlockExclusive />
      <DeepDive />
      <DiscoverCompanies />
      <NewsletterAndDisclosure newsletter={false} disclosureDetail={true} />
    </>
  );
}

export default FamilyOffices;
