import CompanyDescription from "./CompanyDescription";
import CompanyDetailsHero from "./CompanyDetailsHero";
import CompanyFAQ from "./CompanyFAQ";
import CompanyStockPrice from "./CompanyStockPrice";
import FundingRounds from "./FundingRounds";
import Leadership from "./Leadership";
import MajorInvestors from "./MajorInvestors";
import MediaHighlights from "./MediaHighlights";
import SimilarCompanies from "./SimilarCompanies";
import WhyForge from "./WhyForge";
import NewsletterAndDisclosure from "../../ui/NewsletterAndDisclosure";
function CompanyDetails() {
  return (
    <>
      <CompanyDetailsHero />
      <CompanyStockPrice />
      <FundingRounds />
      <CompanyDescription />
      <CompanyFAQ />
      <MajorInvestors />
      <Leadership />
      <MediaHighlights />
      <SimilarCompanies />
      <WhyForge />
      <NewsletterAndDisclosure
        newsletter={false}
        disclosurelist={true}
        oneDisclosure={true}
      />
    </>
  );
}

export default CompanyDetails;
