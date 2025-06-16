import { useEffect, useState } from "react";
import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
import FundingChart from "./FundingChart";
import FundingDetailsTable from "./FundingDetailsTable";
import { fundingRoundDetails } from "../../services/companyDetails";
function FundingRounds({ companyName, id }) {
  const [fundingRoundData, setFundingRoundData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchFundingRoundData = async () => {
      setIsLoading(true);
      try {
        const data = await fundingRoundDetails(id);
        setFundingRoundData(data.result);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFundingRoundData();
  }, []);
  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center py-10">
          <p>Loading...</p>
        </div>
      )}
      {isError && (
        <div className="flex items-center justify-center py-10">
          <p>Sorry! Something is wrong.</p>
        </div>
      )}
      {!isError && !isLoading && (
        <SectionLayout id={`financing`}>
          <SubTitle
            fontWeight={`font-medium`}
            font={`font-clash`}
            extraClass={`pb-5`}
          >
            {companyName} funding rounds and valuation
          </SubTitle>
          <FundingChart historyChart={fundingRoundData.history_chart} />
          <FundingDetailsTable
            fundingRoundDetails={fundingRoundData.funding_round_details}
          />
        </SectionLayout>
      )}
    </>
  );
}

export default FundingRounds;
