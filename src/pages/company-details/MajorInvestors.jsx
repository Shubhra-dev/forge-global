import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
import Text from "../../components/Text";
import { useEffect, useState } from "react";
import { getInvestors } from "../../services/companyDetails";
function MajorInvestors({ companyName, id }) {
  const [majorInvestor, setMajorInvestor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMajorInvestor = async () => {
      setIsLoading(true);
      try {
        const data = await getInvestors(id);
        setMajorInvestor(data.result.company_investors);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMajorInvestor();
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
        <SectionLayout id={`major-investor`}>
          <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
            {companyName} investors also invested in these private companies
          </SubTitle>
          <div className="pt-5 flex flex-wrap items-start justify-between">
            {majorInvestor.map((item, index) => (
              <div key={index} className="w-full sm:w-[47%] tab:w-[30%] pb-5">
                <Text
                  textColor={`text-textHeading`}
                  textColorDark={`text-textHeadingDark`}
                  fontWeight={`font-medium`}
                >
                  {item.company_name}
                </Text>
                <Text>
                  {item.investments.map((invest, idx) => (
                    <span
                      key={idx}
                      className="cursor-pointer"
                      onClick={() => {}}
                    >{`${invest.name}, `}</span>
                  ))}
                </Text>
              </div>
            ))}
          </div>
        </SectionLayout>
      )}
    </>
  );
}

export default MajorInvestors;
