import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import IconCard from "../../components/IconCard";
function WhyUse() {
  return (
    <SectionLayout>
      <Heading font={`font-clash`} extraClass={`pb-10`}>
        Why use <span className="text-primary">Forge Price</span>
      </Heading>
      <div className=" space-y-5">
        <IconCard
          title={`Access current and historical pricing`}
          text={`Daily and historical time series pricing data to value private companies, mark-to-market existing positions and build financial products.`}
        />
        <IconCard
          title={`Improved visibility into a generally opaque markets`}
          text={`More frequent pricing updates compared to other pricing sources such as funding rounds.`}
        />
        <IconCard
          title={`Flexible delivery methods`}
          text={`Delivery methods that match your needs: use a user-friendly web application or an institutional-grade API connection or file-based delivery.`}
        />
        <IconCard
          title={`Reliability from a publicly traded financial services company`}
          text={`Powered by the only publicly traded company focused on private market trading and data analytics.`}
        />
      </div>
    </SectionLayout>
  );
}

export default WhyUse;
