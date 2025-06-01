import Heading from "../../components/Heading";
import SectionLayout from "../../ui/SectionLayout";
import IconBox5 from "./IconBox5";
function IntegrateForgeData() {
  return (
    <SectionLayout>
      <Heading font={`font-clash`}>
        Integrate Forge Data into your workflow
      </Heading>
      <div className="mt-10 flex flex-wrap tab:flex-nowrap items-center justify-between gap-5">
        <IconBox5
          title={`Web application`}
          text={`Forge Intelligence is an interactive web-based application that visualizes trading activity in the private market and provides investors with a detailed view into private market activity.`}
        />
        <IconBox5
          title={`API`}
          text={`Investors and financial institutions can integrate the Forge Data API – with same-day trade pricing, indications of interest, valuations, and more – into their existing investment, portfolio management, and risk analysis tools.`}
        />
        <IconBox5
          title={`File Based`}
          text={`Forge Data is also available in a file-based format for investors and financial institutions seeking to integrate within their existing investment processes and systems.

`}
        />
      </div>
    </SectionLayout>
  );
}

export default IntegrateForgeData;
