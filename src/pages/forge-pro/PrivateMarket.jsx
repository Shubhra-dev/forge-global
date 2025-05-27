import PrivateMarketPanel from "../../components/PrivateMarketPanel";
import PrivateMarketAccordion from "../../components/PrivateMarketAccordion";
import Heading from "../../components/Heading";
import SectionLayout from "../../ui/SectionLayout";
function PrivateMarket() {
  return (
    <SectionLayout>
      <Heading align={`tab:text-left`} font={`font-clash`}>
        Stay one step ahead in the{" "}
        <span className="text-primary">private market</span>
      </Heading>
      <div className="w-full pt-7 hidden tab:block">
        <PrivateMarketPanel />
      </div>
      <div className="w-full pt-5 tab:hidden">
        <PrivateMarketAccordion />
      </div>
    </SectionLayout>
  );
}

export default PrivateMarket;
