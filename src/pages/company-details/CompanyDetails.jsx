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
import { useEffect, useState } from "react";
import { showCompany } from "../../services/companyDetails";
function CompanyDetails() {
  const [companyData, setCompanyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchCompanyData = async () => {
      setIsLoading(true);
      try {
        const data = await showCompany(`company-b`);
        setCompanyData(data.result.company);
        console.log("Company Data:", data.result.company);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCompanyData();
  }, []);
  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <p>Loading...</p>
        </div>
      )}
      {isError && (
        <div className="flex items-center justify-center h-screen">
          <p>Sorry! Something is wrong.</p>
        </div>
      )}
      {!isError && !isLoading && (
        <>
          <CompanyDetailsHero companyData={companyData} />
          <CompanyStockPrice companyData={companyData} />
          <FundingRounds companyName={companyData.name} id={companyData.id} />
          <CompanyDescription id={companyData.id} />
          <CompanyFAQ companyName={companyData.name} id={companyData.id} />
          <MajorInvestors companyName={companyData.name} id={companyData.id} />
          <Leadership id={companyData.id} />
          <MediaHighlights companyName={companyData.name} id={companyData.id} />
          <SimilarCompanies
            companyName={companyData.name}
            id={companyData.id}
          />
          <WhyForge />
          <NewsletterAndDisclosure
            newsletter={false}
            disclosurelist={true}
            oneDisclosure={true}
          />
        </>
      )}
    </>
  );
}

export default CompanyDetails;
