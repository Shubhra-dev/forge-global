import Text from "../../components/Text";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import About1 from "../../assets/Laptop.jpg";
import SmallHeading from "../../components/SmallHeading";
import SmallText from "../../components/SmallText";
function WeOperate() {
  return (
    <SectionLayout>
      <div className="flex flex-col sm:flex-row items-end justify-between gap-5 sm:gap-8 tab:gap-20">
        <div className="w-full sm:w-1/2">
          <Title fontWeight={`font-medium`} align={`text-left`}>
            We Operate with Unwavering{" "}
            <span className="text-primary font-semibold">Honesty</span> &
            Integrity
          </Title>
        </div>
        <div className="w-full sm:w-1/2">
          <Text>
            We offer a deeply personalized approach, providing objective,
            customized advice, seamless wealth management, and exclusive access
            to private investments, all designed to help clients reach their
            goals and build lasting wealth.
          </Text>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch justify-between gap-5 mt-14">
        <div className="flex flex-col w-full sm:w-1/3 rounded-md border border-borderPrimary/50 overflow-hidden">
          <img
            src={About1}
            alt="blog image"
            className="h-72 sm:h-40 tab:h-64"
          />
          <div className="flex flex-col flex-1 mt-3.5 p-2.5">
            <SmallHeading>Ideas demand investment</SmallHeading>
            <SmallText fontWeight={`font-medium`} extraClass={`pt-4`}>
              Every day, high-growth technology companies drive innovations that
              have revolutionized how we work and live. These advances demand
              enormous amounts of time, ingenuity and funding to succeed.
            </SmallText>
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/3 rounded-md border border-borderPrimary/50 overflow-hidden">
          <img
            src={About1}
            alt="blog image"
            className="h-72 sm:h-40 tab:h-64"
          />
          <div className="flex flex-col flex-1 mt-3.5 p-2.5">
            <SmallHeading>Ideas demand investment</SmallHeading>
            <SmallText fontWeight={`font-medium`} extraClass={`pt-4`}>
              Every day, high-growth technology companies drive innovations that
              have revolutionized how we work and live. These advances demand
              enormous amounts of time, ingenuity and funding to succeed.
            </SmallText>
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/3 rounded-md border border-borderPrimary/50 overflow-hidden">
          <img
            src={About1}
            alt="blog image"
            className="h-72 sm:h-40 tab:h-64"
          />
          <div className="flex flex-col flex-1 mt-3.5 p-2.5">
            <SmallHeading>Capital needs credibility</SmallHeading>
            <SmallText fontWeight={`font-medium`} extraClass={`pt-4`}>
              Forge’s technology, data and deep experience enables institutions,
              investors, companies and shareholders to access, gain insight into
              and participate in the private market. With innovative products
              and solutions, we are bringing new transparency and new
              possibility to this rapidly-evolving asset class.
            </SmallText>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default WeOperate;
