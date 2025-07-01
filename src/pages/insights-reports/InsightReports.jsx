import { useEffect, useState } from "react";
import { featuredPosts } from "../../services/insights";
import DeepDive from "../seed-investors/DeepDive";
import InsightsHero from "./InsightsHero";
import ReportsContainer from "./ReportsContainer";

function InsightReports() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchFeaturedPosts = async () => {
      setIsLoading(true);
      try {
        const data = await featuredPosts();
        setData(data.result.featured_posts);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeaturedPosts();
  }, []);
  return (
    <>
      <InsightsHero />
      <DeepDive data={data} isLoading={isLoading} isError={isError} />
      <ReportsContainer />
    </>
  );
}

export default InsightReports;
