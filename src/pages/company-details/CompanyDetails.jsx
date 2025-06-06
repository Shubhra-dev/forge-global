import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
import CompanyDetailsHero from "./CompanyDetailsHero";
import CompanyStockPrice from "./CompanyStockPrice";
import FundingChart from "./FundingChart";
import FundingDetailsTable from "./FundingDetailsTable";

function CompanyDetails() {
  return (
    <>
      <CompanyDetailsHero />
      <CompanyStockPrice />
      <SectionLayout id={`financing`}>
        <SubTitle
          fontWeight={`font-medium`}
          font={`font-clash`}
          extraClass={`pb-5`}
        >
          “Company Name” funding rounds and valuation
        </SubTitle>
        <FundingChart />
        <FundingDetailsTable />
      </SectionLayout>
    </>
  );
}

export default CompanyDetails;
