import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import BlackBg from "../../assets/BlackBg.jpg";
import SmallHeading from "../../components/SmallHeading";
import SubHeading from "../../components/SubHeading";
import SmallText from "../../components/SmallText";
import Text from "../../components/Text";
import MonthlyInsightBigCard from "../../components/MonthlyInsightBigCard";
import SubTitle from "../../components/SubTitle";
import BlogCards from "./BlogCard";
import { useEffect, useState } from "react";
import { getCompanyMedia } from "../../services/companyDetails";

function MediaHighlights({ companyName, id }) {
  const [companyMedia, setCompanyMedia] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCompanyMedia = async () => {
      setIsLoading(true);
      try {
        const data = await getCompanyMedia(id);
        setCompanyMedia(data.result);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCompanyMedia();
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
        <SectionLayout id={`stock-news`}>
          <SubTitle
            align={`text-center sm:text-left`}
            font={`font-clash`}
            fontWeight={`font-medium`}
          >
            {companyName} news and media highlights
          </SubTitle>

          <div className="w-full pt-8 flex flex-wrap items-center justify-normal gap-5">
            {companyMedia.blogs.map((blog, index) => (
              <BlogCards
                key={index}
                id={blog.id}
                title={blog.headline}
                date={blog.published_date}
                image={blog.thumbnail_image}
              />
            ))}
          </div>
          <div className="w-full pt-10 flex flex-wrap items-center justify-normal gap-5">
            {companyMedia.external_news.map((news, index) => (
              <div
                key={index}
                onClick={() => window.open(news.url, "_blank")}
                className="cursor-pointer p-[15px] rounded-3xl w-full tab:w-[47%] flex items-start justify-normal gap-7 border border-borderPrimary dark:border-borderPrimaryDark hover:shadow-md"
              >
                <div className="w-full">
                  <SmallText
                    extraClass={`uppercase tracking-wide`}
                    fontWeight={`font-medium`}
                  >
                    {news.source}
                  </SmallText>
                  <SmallHeading
                    extraClass={`py-[7px]`}
                    leading={`leading-tight`}
                    fontWeight={`font-semibold`}
                  >
                    {news.headline}
                  </SmallHeading>
                  <SmallText
                    extraClass={`tracking-wide`}
                    fontWeight={`font-medium`}
                  >
                    {news.published_date}
                  </SmallText>
                </div>
              </div>
            ))}
          </div>
        </SectionLayout>
      )}
    </>
  );
}

export default MediaHighlights;
