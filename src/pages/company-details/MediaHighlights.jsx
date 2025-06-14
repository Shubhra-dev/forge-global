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

function MediaHighlights() {
  return (
    <SectionLayout id={`stock-news`}>
      <SubTitle
        align={`text-center sm:text-left`}
        font={`font-clash`}
        fontWeight={`font-medium`}
      >
        “Company Name” news and media highlights
      </SubTitle>
      <div className="py-7 pb-12 w-full flex flex-col sm:flex-row items-center justify-normal gap-10 tab:gap-16">
        <div
          className="w-full sm:w-[55%] h-72 bg-center bg-cover bg-no-repeat rounded-tr-[40px] sm:rounded-tr-none sm:rounded-bl-[40px] px-10 py-7 flex flex-col justify-end items-start"
          style={{ backgroundImage: `url(${BlackBg})` }}
        ></div>
        <div className="w-full sm:w-[45%]">
          <SmallText extraClass={`uppercase`} fontWeight={`font-medium`}>
            blog
          </SmallText>
          <SubHeading leading={`leading-7`} extraClass={`pt-4 pb-1`}>
            As the IPO pipeline strengthens, will tariffs crash the party?
          </SubHeading>
          <SmallText fontWeight={`font-medium`}>April 18, 2025</SmallText>
          <Text extraClass={`pt-5`}>
            Before global tariffs rattled markets, a surge in S-1 filings during
            Q1 2025 signaled a potential rebound in the IPO market after a
            multi-year drought.
          </Text>
        </div>
      </div>
      <div className="w-full flex flex-col tab:flex-row items-center justify-normal gap-5">
        <BlogCards
          title={
            "More Companies prep for the return of the regular IPO session"
          }
          date={"March 18, 2025"}
          month={"March 2025"}
        />
        <BlogCards
          title={"The private market swells with a optimistic IPO pipeline"}
          date={"February 18, 2025"}
          month={"February 2025"}
        />
      </div>
    </SectionLayout>
  );
}

export default MediaHighlights;
