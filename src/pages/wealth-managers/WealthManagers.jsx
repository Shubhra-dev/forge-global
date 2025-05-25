import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import UnlockExclusive from "../assets-manger/UnlockExclusive";
import DiscoverCompanies from "../home/DiscoverCompanies";
import DeepDive from "../seed-investors/DeepDive";
import ProductAndSolution from "../seed-investors/ProductsAndSolution";
import HowWealthManUsing from "./HowWealthManUsing";
import WealthManagersHero from "./WealthManagersHero";

function WealthManagers() {
  return (
    <>
      <WealthManagersHero />
      <HowWealthManUsing />
      <ProductAndSolution />
      <UnlockExclusive />
      <DeepDive />
      <DiscoverCompanies />
      <NewsletterAndDisclosure newsletter={false} disclosureDetail={true} />
    </>
  );
}

export default WealthManagers;
