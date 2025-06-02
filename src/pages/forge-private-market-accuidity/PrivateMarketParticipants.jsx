import PrimaryButton from "../../components/PrimaryButton";
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
          height={`sm:h-[270px] smLap:h-[250px]`}
          text={`Customizable private market solutions based on investment needs and designed with the same rigorous calculation and maintenance methodology as our core offerings.`}
        />
        <IconBox3D
          height={`sm:h-[270px] smLap:h-[250px]`}
          text={`End to end index production including periodic index calculations, corporate action handling, index reconstitution and rebalance.`}
        />
        <IconBox3D
          height={`sm:h-[270px] smLap:h-[250px]`}
          text={`Technology infrastructure to generate and deliver index data for you to replicate Forge private market indices in your investment products.
`}
        />
      </div>
      <div className="pt-10 w-full sm:w-max m-auto">
        <PrimaryButton icon={true}>
          Learn More About Custom Index Soutions
        </PrimaryButton>
      </div>
    </SectionLayout>
  );
}

export default PrivateMarketParticipants;
