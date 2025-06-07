import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
import FundingChart from "./FundingChart";
import FundingDetailsTable from "./FundingDetailsTable";
function FundingRounds() {
  return (
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
  );
}

export default FundingRounds;
