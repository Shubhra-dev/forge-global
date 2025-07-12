import BlackBg from "../../assets/BlackBg.jpg";
import MonthlyInsightHeroBg from "../../assets/MonthlyInsightHeroBg.jpg";
import Heading from "../../components/Heading";
import SmallHeading from "../../components/SmallHeading";
import Text from "../../components/Text";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import PrimaryButton from "../../components/PrimaryButton";
import SectionLayout from "../../ui/SectionLayout";
import { useNavigate } from "react-router-dom";
function ReportCardSection({ post, isError, isLoading }) {
  const navigate = useNavigate();
  return (
    <SectionLayout>
      {isError && (
        <div className="p-4">
          <SmallHeading align={`text-center`}>
            Something went wrong!
          </SmallHeading>
        </div>
      )}
      {isLoading && (
        <div className="p-4">
          <SmallHeading align={`text-center`}>Loading...</SmallHeading>
        </div>
      )}
      {post && !isError && !isLoading && (
        <div className="py-7 pb-12 w-full flex flex-col-reverse sm:flex-row items-center justify-normal gap-10 tab:gap-16">
          <div className="w-full sm:w-[45%]">
            <SmallText extraClass={`uppercase`} fontWeight={`font-medium`}>
              {post.date}
            </SmallText>
            <SubHeading leading={`leading-7`} extraClass={`pt-4 pb-1`}>
              {post.title}
            </SubHeading>
            <Text extraClass={`pt-5 pb-6`}>{post.excerpt}</Text>
            <div className="w-max m-auto sm:m-0">
              <PrimaryButton
                onClick={() => navigate(`/insights/details/${post.slug}`)}
              >
                View {post.type}
              </PrimaryButton>
            </div>
          </div>
          <div
            className="w-full sm:w-[55%] h-72 bg-center bg-cover bg-no-repeat rounded-tr-[40px] px-10 py-7 flex flex-col justify-end items-start"
            style={{
              backgroundImage: `url(${post.post_category === "Forge Investment Outlook" ? BlackBg : MonthlyInsightHeroBg})`,
            }}
          >
            <div className="w-32 h-1 bg-secondary2 rounded-full"></div>
            <Heading
              font={`font-clash`}
              textColor={
                post.post_category === "Forge Investment Outlook"
                  ? `text-white`
                  : "text-textHeading"
              }
              textColorDark={" "}
              align={`text-left`}
              fontWeight={`font-medium`}
              leading={`leading-normal sm:leading-9 tab:leading-10`}
              extraClass={`pt-3 pb-4 sm:w-3/4`}
            >
              {post.post_category === "Forge Investment Outlook"
                ? "Forge Investment Outlook"
                : "Private Market Index"}
            </Heading>
            <SmallHeading
              textColor={
                post.post_category === "Forge Investment Outlook"
                  ? `text-white`
                  : "text-textHeading"
              }
              textColorDark={" "}
            >
              {post.post_category === "Forge Investment Outlook"
                ? `${post.quarter} ${post.quarter_year}`
                : post.date}
            </SmallHeading>
          </div>
        </div>
      )}
    </SectionLayout>
  );
}

export default ReportCardSection;
