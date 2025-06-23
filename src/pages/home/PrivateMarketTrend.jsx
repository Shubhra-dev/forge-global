import Heading from "../../components/Heading";
import SectionLayout from "../../ui/SectionLayout";
import ReportCardGeneral from "../../components/ReportCardGeneral";
import ReportCardStar from "../../components/ReportCardStar";
import React, { useEffect, useState } from "react";
import { privateMarketTrends } from "../../services/privateMarketTrends";
function PrivateMarketTrend() {
  const [blogAndReports, setBlogAndReports] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPrivateMarketTrend = async () => {
      setIsLoading(true);
      try {
        const data = await privateMarketTrends();
        setBlogAndReports(data.result.private_market_trends);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPrivateMarketTrend();
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
        <SectionLayout
          bg={`bg-backgroundPrimary`}
          bgDark={`dark:bg-backgroundPrimaryDark`}
        >
          <div className="w-full pb-[30px]">
            <Heading
              align={`text-center sm:text-left`}
              font={`font-clash`}
              leading={`leading-normal`}
            >
              Dive deeper into
            </Heading>
            <Heading
              align={`text-center sm:text-left`}
              font={`font-clash`}
              textColor={`text-backgroundBronzeDark`}
              textColorDark={`dark:text-backgroundBronze`}
            >
              private market trends
            </Heading>
          </div>
          <div className="w-full flex flex-wrap tab:flex-nowrap items-center justify-normal gap-5">
            {blogAndReports.map((item, index) => (
              <React.Fragment key={index}>
                {item.type === "blog" && <ReportCardGeneral blog={item} />}
                {item.type === "report" && <ReportCardStar report={item} />}
              </React.Fragment>
            ))}
          </div>
        </SectionLayout>
      )}
    </>
  );
}

export default PrivateMarketTrend;
