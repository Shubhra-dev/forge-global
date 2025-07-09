import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import BlackBg from "../../assets/BlackBg.jpg";
import MonthlyInsight from "../../assets/MonthlyInsight.jpg";
import SmallHeading from "../../components/SmallHeading";
import SubHeading from "../../components/SubHeading";
import SmallText from "../../components/SmallText";
import Text from "../../components/Text";
import MonthlyInsightBigCard from "../../components/MonthlyInsightBigCard";
import { useNavigate } from "react-router-dom";
import ForgeOutlook from "../../components/ForgeOutlook";

function DeepDive({ data, isLoaing, isError = true }) {
  const navigate = useNavigate();
  return (
    <SectionLayout>
      <Heading align={`text-center sm:text-left`} font={`font-clash`}>
        Dive deeper into{" "}
        <span className="text-primary">private market trends</span>
      </Heading>
      {isError && (
        <div className="p-4">
          <SmallHeading align={`text-center`}>
            Something went wrong!
          </SmallHeading>
        </div>
      )}
      {isLoaing && (
        <div className="p-4">
          <SmallHeading align={`text-center`}>Loading...</SmallHeading>
        </div>
      )}
      {data && !isError && !isLoaing && (
        <>
          <div
            onClick={() => navigate(`/insights/details/${data[0].slug}`)}
            className="cursor-pointer py-7 pb-12 w-full flex flex-col sm:flex-row items-center justify-normal gap-10 tab:gap-16"
          >
            <div
              className="w-full sm:w-[55%] h-72 bg-center bg-cover bg-no-repeat rounded-tr-[40px] sm:rounded-tr-none sm:rounded-bl-[40px] px-10 py-7 flex flex-col justify-end items-start"
              style={{
                backgroundImage: `url(${data[0].post_category === "Forge Investment Outlook" ? BlackBg : MonthlyInsight})`,
              }}
            >
              <div className="w-32 h-1 bg-secondary2 rounded-full"></div>
              <Heading
                font={`font-clash`}
                textColor={
                  data[0].post_category === "Forge Investment Outlook"
                    ? `text-white`
                    : `text-textHeading`
                }
                textColorDark={" "}
                align={`text-left`}
                fontWeight={`font-medium`}
                leading={`leading-normal sm:leading-9 tab:leading-10`}
                extraClass={`pt-3 pb-4 sm:w-3/4`}
              >
                {data[0].post_category === "Forge Investment Outlook"
                  ? "Forge Investment Outlook"
                  : "Private Market Updates"}
              </Heading>
              <SmallHeading
                textColorDark={" "}
                textColor={
                  data[0].post_category === "Forge Investment Outlook"
                    ? `text-white`
                    : `text-textHeading`
                }
              >
                {data[0].post_category === "Forge Investment Outlook"
                  ? `${data[0].quarter} ${data[0].quarter_year}`
                  : data[0].date}
              </SmallHeading>
            </div>
            <div className="w-full sm:w-[45%]">
              <SmallText extraClass={`uppercase`} fontWeight={`font-medium`}>
                {data[0].type}
              </SmallText>
              <SubHeading leading={`leading-7`} extraClass={`pt-4 pb-1`}>
                {data[0].title}
              </SubHeading>
              <SmallText fontWeight={`font-medium`}>{data[0].date}</SmallText>
              <Text extraClass={`pt-5`}>{data[0].excerpt}</Text>
            </div>
          </div>
          <div className="w-full flex flex-col tab:flex-row items-center justify-normal gap-5">
            {data.slice(1).map((item, index) => {
              // Use conditional rendering with proper return statements
              if (item.post_category !== "Forge Investment Outlook") {
                return (
                  <MonthlyInsightBigCard
                    onClick={() => navigate(`/insights/details/${item.slug}`)}
                    key={index}
                    title={item.title}
                    date={item.date}
                    month={new Date(item.date).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                    type={item.type}
                  />
                );
              }

              if (item.post_category === "Forge Investment Outlook") {
                return (
                  <ForgeOutlook
                    key={index}
                    onClick={() => navigate(`/insights/details/${item.slug}`)}
                    title={item.title}
                    date={item.date}
                    quarter={`${item.quarter} ${item.quarter_year}`}
                    type={item.type}
                  />
                );
              }

              // Return null if neither condition is met
              return null;
            })}
          </div>
        </>
      )}
    </SectionLayout>
  );
}

export default DeepDive;
