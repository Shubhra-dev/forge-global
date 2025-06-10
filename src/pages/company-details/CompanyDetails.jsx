import SmallHeading from "../../components/SmallHeading";
import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
import CompanyDescription from "./CompanyDescription";
import CompanyDetailsHero from "./CompanyDetailsHero";
import CompanyFAQ from "./CompanyFAQ";
import CompanyStockPrice from "./CompanyStockPrice";
import FundingRounds from "./FundingRounds";
import MajorInvestors from "./MajorInvestors";

function CompanyDetails() {
  return (
    <>
      <CompanyDetailsHero />
      <CompanyStockPrice />
      <FundingRounds />
      <CompanyDescription />
      <CompanyFAQ />
      <MajorInvestors />
      <SectionLayout id={`leadership`}>
        <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
          Leadership and board
        </SubTitle>
        <div className="pt-5 flex items-center justify-between gap-3">
          <SmallHeading fontWeight={`font-bold`} extraClass={`w-[13%]`}>
            Leadership
          </SmallHeading>
          <div className="border-t w-[87%] border-t-borderPrimary dark:border-t-borderPrimaryDark"></div>
        </div>
      </SectionLayout>
    </>
  );
}

export default CompanyDetails;
