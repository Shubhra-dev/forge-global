import Heading from "../../components/Heading";
import SmallHeading from "../../components/SmallHeading";
import SectionLayout from "../../ui/SectionLayout";
import InsightsBanner from "../../assets/icons/InsightsBanner.png";
function InsightsHero() {
  return (
    <>
      <SectionLayout
        padding={`pt-24 pb-12 sm:pt-16 sm:pb-16 tab:pt-32 tab:pb-14`}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-7 tab:gap-10 w-full">
          <Heading
            align={`text-center sm:text-left`}
            font={`font-clash`}
            extraClass={`w-full sm:w-[40%]`}
          >
            Forge Insights Reports
          </Heading>
          <SmallHeading
            align={`text-center sm:text-left`}
            extraClass={`w-full sm:w-[60%]`}
          >
            Our monthly Private Market Update Reports feature data, trends and
            insights that you can not find anywhere else.
          </SmallHeading>
        </div>
      </SectionLayout>
      <div
        className="w-full bg-cover bg-center bg-no-repeat rounded-[40px]"
        style={{ backgroundImage: `url(${InsightsBanner})` }}
      >
        <div className="m-auto max-w-content">
          <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto h-[300px] flex items-center justify-normal"></div>
        </div>
      </div>
    </>
  );
}

export default InsightsHero;
