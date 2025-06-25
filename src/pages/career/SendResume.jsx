import Heading from "../../components/Heading";
import PrimaryButton from "../../components/PrimaryButton";
import SmallHeading from "../../components/SmallHeading";
import SectionLayout from "../../ui/SectionLayout";

function SendResume() {
  return (
    <SectionLayout
      bg={`bg-backgroundPrimary`}
      bgDark={`dark:bg-backgroundPrimaryDark`}
    >
      <SmallHeading align={`text-center`} extraClass={`pt-2.5`}>
        Don’t see what you’re looking for?
      </SmallHeading>
      <Heading font={`font-clash`}>
        We’re always looking for talented people
      </Heading>
      <div className="mt-7 w-max m-auto">
        <PrimaryButton>Send My Resume</PrimaryButton>
      </div>
    </SectionLayout>
  );
}

export default SendResume;
