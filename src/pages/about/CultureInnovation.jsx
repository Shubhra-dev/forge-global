import Heading from "../../components/Heading";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import CultureInnovationImg from "../../assets/CultureInnovation.jpg";
import SecondaryButton from "../../components/SecondaryButton";
function CultureInnovation() {
  return (
    <SectionLayout>
      <div className="w-full flex flex-col sm:flex-row items-stretch justify-between gap-6 tab:gap-10">
        <div
          className="w-full h-64 sm:h-auto sm:w-1/2 tab:w-2/3 flex flex-col bg-center bg-cover overflow-hidden rounded-[20px]"
          style={{ backgroundImage: `url(${CultureInnovationImg})` }}
        ></div>
        <div className="w-full sm:w-1/2 tab:w-1/3 flex flex-col">
          <Heading
            font={`font-clash`}
            fontWeight={`font-medium`}
            align={`text-center sm:text-left`}
          >
            A culture of <span className="text-primary">innovation</span>
          </Heading>
          <Text
            align={`text-center sm:text-left`}
            extraClass={`my-4 sm:my-0 sm:mt-5 sm:mb-8`}
          >
            Forge is built by people who value collaboration, growth and impact
            in everything they do.
          </Text>
          <div className="w-max sm:w-auto m-auto sm;m-0">
            <SecondaryButton extraClass={`text-wrap`}>
              Learn More About Lite at Forge
            </SecondaryButton>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default CultureInnovation;
