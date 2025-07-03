import { useParams } from "react-router-dom";
import InsightDetailHero from "./InsightDetailHero";
import { useEffect, useState } from "react";
import { postDetails } from "../../services/insights";
import SmallHeading from "../../components/SmallHeading";
import ContentContainer from "./ContentContainer";
function InsightDetails() {
  const { insight_slug } = useParams();
  console.log(insight_slug);
  const [insightDetail, setInsightDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchinsightDetailData = async () => {
      setIsLoading(true);
      try {
        const data = await postDetails(insight_slug);
        setInsightDetail(data.result.post);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchinsightDetailData();
  }, []);
  return (
    <>
      {isLoading && (
        <div className="w-full h-screen my-auto flex justify-center items-center">
          <SmallHeading align={`text-center`}>Loading Data...</SmallHeading>
        </div>
      )}
      {insightDetail && !isError && !isLoading && (
        <>
          <InsightDetailHero
            category={insightDetail.category.name}
            title={insightDetail.title}
            date={insightDetail.date}
            quarter={insightDetail.quarter}
            author={insightDetail.author}
          />
          <ContentContainer contents={insightDetail.contents} />
        </>
      )}
    </>
  );
}

export default InsightDetails;
