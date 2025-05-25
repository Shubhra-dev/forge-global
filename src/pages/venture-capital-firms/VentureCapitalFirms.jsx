import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import UnlockExclusive from "../assets-manger/UnlockExclusive";
import DiscoverCompanies from "../home/DiscoverCompanies";
import DeepDive from "../seed-investors/DeepDive";
import ProductAndSolution from "../seed-investors/ProductsAndSolution";
import HowUsingForge from "./HowUsingForge";
import VentureCapitalHero from "./VentureCapitalHero";

function VentureCapitalFirms() {
  return (
    <>
      <VentureCapitalHero />
      <HowUsingForge />
      <ProductAndSolution />
      <UnlockExclusive />
      <DeepDive />
      <DiscoverCompanies />
      <NewsletterAndDisclosure newsletter={false} disclosurelist={true} />
    </>
  );
}

export default VentureCapitalFirms;
