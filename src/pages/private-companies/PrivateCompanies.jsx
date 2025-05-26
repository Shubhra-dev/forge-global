import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import CompanyLiquidity from "./CompanyLiquidity";
import ImageCardSection from "./ImageCardSection";
import PrivateCompaniesHero from "./PrivateCompaniesHero";
import PrivateStatistics from "./PrivateStatistics";

function PrivateCompanies() {
  return (
    <>
      <PrivateCompaniesHero />
      <CompanyLiquidity />
      <PrivateStatistics />
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
