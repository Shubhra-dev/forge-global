import PrimaryButton from "../../components/PrimaryButton";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import CompanyDescription from "./CompanyDescription";
import CompanyDetailsHero from "./CompanyDetailsHero";
import CompanyFAQ from "./CompanyFAQ";
import CompanyStockPrice from "./CompanyStockPrice";
import FundingRounds from "./FundingRounds";
import Leadership from "./Leadership";
import MajorInvestors from "./MajorInvestors";
import MediaHighlights from "./MediaHighlights";
import SimilarCompanies from "./SimilarCompanies";

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
      <SectionLayout id={`why-forge`}>
        <div className="flex items-start justify-normal gap-20">
          <div className="w-[40%]">
            <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
              Forge is your trusted partner to buy and sell “Company” stock
            </SubTitle>
            <Text extraClass={`py-5`}>
              Forge is the trusted platform for buying and selling private
              company stock. Investors and shareholders worldwide rely on our
              deep data insights, liquidity solutions, and tailored investment
              opportunities to navigate the private market. Register to get
              started.
            </Text>
            <PrimaryButton>Register</PrimaryButton>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default CompanyDetails;
