import { useEffect, useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
import { privateCompanies } from "../../services/privateCompanies";
import SectionLayout from "../../ui/SectionLayout";
import CompanyLiquidity from "./CompanyLiquidity";
import ImageCardSection from "./ImageCardSection";
import PrivateCompaniesHero from "./PrivateCompaniesHero";
import PrivateStatistics from "./PrivateStatistics";

function PrivateCompanies() {
  const [companyData, setCompanyData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchCompanyData = async () => {
      setIsLoading(true);
      try {
        const data = await privateCompanies();
        setCompanyData(data.result.private_company);
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
      <PrivateCompaniesHero />
      <CompanyLiquidity />
      <PrivateStatistics
        companyData={companyData}
        isError={isError}
        isLoading={isLoading}
      />
      <ImageCardSection />
      <SectionLayout>
        <Title>Connect with our experts to learn more</Title>
        <div className="w-max m-auto pt-10">
          <PrimaryButton>Connect With Our Experts</PrimaryButton>
        </div>
      </SectionLayout>
    </>
  );
}

export default PrivateCompanies;
