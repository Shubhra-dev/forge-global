import FAQSection from "../../ui/FAQContainer";
import HowBuyIPO from "./HowBuyIPO";
import PreIPOInvesting from "./PreIPOInvesting";
import WhoBuyIPO from "./WhoBuyIPO";
import DiscoverCompanies from "../home/DiscoverCompanies";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import AccreditedInvestorsHero from "./AccreditedInvestorsHero";

function AccreditedInvestors() {
  return (
    <>
      <AccreditedInvestorsHero />
      <PreIPOInvesting />
      <WhoBuyIPO />
      <HowBuyIPO />
      <FAQSection />
      <DiscoverCompanies />
      <NewsletterAndDisclosure />
    </>
  );
}

export default AccreditedInvestors;
