import Heading from "../../components/Heading";
import SectionLayout from "../../ui/SectionLayout";
import ReportCardGeneral from "../../components/ReportCardGeneral";
import ReportCardStar from "../../components/ReportCardStar";
function PrivateMarketTrend() {
  return (
    <SectionLayout>
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
        <ReportCardGeneral />
        <ReportCardStar />
        <ReportCardGeneral />
      </div>
    </SectionLayout>
  );
}

export default PrivateMarketTrend;
