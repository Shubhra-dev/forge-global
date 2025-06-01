import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
import IconBox3D from "./IconBox3D";
function PrivateMarketParticipants() {
  return (
    <SectionLayout
      bg={`bg-backgroundTertiaryLight`}
      bgDark={`dark:bg-backgroundTertiary`}
    >
      <SubTitle font={`font-clash`}>
        Designed for both existing and new private market participants
      </SubTitle>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-10 mt-7">
        <IconBox3D
          text={`Benchmark for actively traded private companies with secondary
                liquidity.`}
        />
        <IconBox3D
          text={`Measure the performance of venture backed, late-stage companies relative to other asset classes.`}
        />
        <IconBox3D
          text={`Research new investment ideas and manage existing private positions.`}
        />
      </div>
    </SectionLayout>
  );
}

export default PrivateMarketParticipants;
