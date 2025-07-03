import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import SectionLayout from "../../ui/SectionLayout";
import ForgeOutlook from "../../assets/BlackBg.jpg";
import MonthlyInsight from "../../assets/MonthlyInsight.jpg";
import SmallText from "../../components/SmallText";
import Text from "../../components/Text";
import { allPosts, postCategories } from "../../services/insights";
import SmallHeading from "../../components/SmallHeading";
import { useNavigate } from "react-router-dom";
function ReportsContainer() {
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  const [categories, setCategories] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isDataError, setIsDataError] = useState(false);
  const [insightData, setInsightData] = useState(null);

  useEffect(() => {
    const fetchFeaturedPostCategories = async () => {
      setIsLoading(true);
      try {
        const data = await postCategories();
        setCategories(data.result.post_categories);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeaturedPostCategories();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      setIsDataLoading(true);
      try {
        const data = await allPosts(active);
        setInsightData(data.result.posts);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsDataError(true);
      } finally {
        setIsDataLoading(false);
      }
    };
    fetchPosts();
  }, [active]);
  return (
    <SectionLayout>
      <div className="flex items-center justify-normal gap-5 sm:gap-10">
        <Heading
          align={`text-left`}
          font={`font-clash`}
          extraClass={`w-[80%] sm:w-auto`}
        >
          Browse Insights
        </Heading>
        <div className="relative w-[45%] sm:w-[55%] tab:w-[65%]">
          <div className="absolute h-4 w-4 -top-1.5 rotate-45 bg-secondary2"></div>
          <div className="w-full h-1 bg-secondary2 rounded"></div>
        </div>
      </div>
      <div className="py-5 flex items-center justify-normal gap-5 flex-wrap">
        <button
          onClick={() => setActive("")}
          className={`${active === "" ? "bg-secondary2 shadow-md text-textSubTitle font-bold" : "text-textSubheading dark:text-textSubheadingDark dark:bg-backgroundDark"} px-5 py-2.5 border border-borderPrimary dark:border-borderPrimaryDark  rounded-md`}
        >
          All
        </button>
        {categories &&
          !isError &&
          !isLoading &&
          categories.map((item, index) => (
            <button
              key={index}
              onClick={() => setActive(item.id)}
              className={`${active === item.id ? "bg-secondary2 shadow-md text-textSubTitle font-bold" : "text-textSubheading dark:text-textSubheadingDark dark:bg-backgroundDark"} px-5 py-2.5 border border-borderPrimary dark:border-borderPrimaryDark  rounded-md`}
            >
              {item.name}
            </button>
          ))}
      </div>
      <div className="flex items-start justify-between flex-wrap gap-5">
        {isDataError && (
          <div className="p-4 w-full">
            <SmallHeading align={`text-center`}>
              Something Went Wrong !
            </SmallHeading>
          </div>
        )}
        {isDataLoading && (
          <div className="p-4 w-full">
            <SmallHeading align={`text-center`}>Fetching Data...</SmallHeading>
          </div>
        )}
        {insightData &&
          !isDataError &&
          !isDataLoading &&
          insightData.map((item, index) => (
            <React.Fragment key={index}>
              {item.post_category.id === 1 && (
                <div
                  onClick={() => navigate(`/insights/details/${item.slug}`)}
                  className="w-[47%] sm:w-[31%] tab:w-[23%] cursor-pointer h-[350px] rounded-md overflow-hidden border border-borderPrimary dark:border-borderPrimaryDark"
                >
                  <div
                    className="w-full h-40 bg-center bg-cover p-5 flex flex-col justify-end"
                    style={{ backgroundImage: `url(${ForgeOutlook})` }}
                  >
                    <div className="w-14 h-1 bg-primary rounded"></div>
                    <p
                      className={`font-bold text-lg text-white pt-0.5 leading-normal pb-1`}
                    >
                      Forge Investment Outlook
                    </p>
                    <SmallText
                      fontWeight={`font-medium`}
                      textColor={`text-textSubTitleDark`}
                      textColorDark={` `}
                      extraClass={`tracking-wide`}
                    >
                      {item.quarter + " 2025"}
                    </SmallText>
                  </div>
                  <div className="h-[190px] pt-[30px] px-[15px] pb-[15px] flex flex-col justify-between">
                    <div>
                      <SmallText
                        extraClass={`uppercase tracking-wide`}
                        fontWeight={`font-medium`}
                      >
                        {item.type}
                      </SmallText>
                      <Text
                        fontWeight={`font-medium`}
                        textColor={`text-textSubTitle`}
                        extraClass={`py-2`}
                      >
                        {item.title}
                      </Text>
                    </div>
                    <SmallText fontWeight={`font-medium`}>
                      {item.date}
                    </SmallText>
                  </div>
                </div>
              )}
              {(item.post_category.id === 2 || item.post_category.id === 3) && (
                <div
                  onClick={() => navigate(`/insights/details/${item.slug}`)}
                  className="w-[47%] sm:w-[31%] tab:w-[23%] cursor-pointer h-[350px] rounded-md overflow-hidden border border-borderPrimary dark:border-borderPrimaryDark"
                >
                  <div
                    className="w-full h-40 bg-center bg-cover p-5 flex flex-col justify-end"
                    style={{ backgroundImage: `url(${MonthlyInsight})` }}
                  >
                    <div className="w-14 h-1 bg-primary rounded"></div>
                    <p
                      className={`font-bold text-lg text-textHeading pt-0.5 leading-normal pb-1`}
                    >
                      {new Date(item.date).toLocaleDateString("en-US", {
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <SmallText
                      fontWeight={`font-medium`}
                      textColor={`text-textSubTitle`}
                      textColorDark={` `}
                      extraClass={`tracking-wide uppercase`}
                    >
                      {item.post_category.id === 2
                        ? "Private Market Data"
                        : "Private Market Update"}
                    </SmallText>
                  </div>
                  <div className="h-[190px] flex flex-col justify-between pt-[30px] px-[15px] pb-[15px]">
                    <div>
                      {" "}
                      <SmallText
                        extraClass={`uppercase tracking-wide`}
                        fontWeight={`font-medium`}
                      >
                        report
                      </SmallText>
                      <Text
                        fontWeight={`font-medium`}
                        textColor={`text-textSubTitle`}
                        extraClass={`py-2`}
                      >
                        {item.title}
                      </Text>
                    </div>
                    <SmallText fontWeight={`font-medium`}>
                      {item.date}
                    </SmallText>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
      </div>
    </SectionLayout>
  );
}

export default ReportsContainer;
