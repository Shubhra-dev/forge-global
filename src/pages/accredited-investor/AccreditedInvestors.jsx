import FAQSection from "../../ui/FAQContainer";
import HowBuyIPO from "./HowBuyIPO";
import PreIPOInvesting from "./PreIPOInvesting";
import WhoBuyIPO from "./WhoBuyIPO";
import DiscoverCompanies from "../home/DiscoverCompanies";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
import AccreditedInvestorsHero from "./AccreditedInvestorsHero";
import { useEffect, useState } from "react";
import { getAccreditedInvestor } from "../../services/pageAPI";

function AccreditedInvestors() {
  const [accreditedInvestor, setAccreditedInvestor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchAccreditedInvestorData = async () => {
      setIsLoading(true);
      try {
        const data = await getAccreditedInvestor();
        setAccreditedInvestor(data.result.accredited_investors);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAccreditedInvestorData();
  }, []);
  return (
    <>
      <AccreditedInvestorsHero />
      <PreIPOInvesting />
      <WhoBuyIPO />
      <HowBuyIPO />
      <FAQSection />
      <DiscoverCompanies />
      {accreditedInvestor && !isLoading && !isError && (
        <NewsletterAndDisclosure
          disclosure={accreditedInvestor?.disclosures}
          legalNotice={accreditedInvestor?.legal_notices}
        />
      )}
    </>
  );
}

export default AccreditedInvestors;
