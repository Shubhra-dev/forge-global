import { FiArrowUpRight } from "react-icons/fi";
import BigText from "../../components/BigText";
import Heading from "../../components/Heading";
import SectionLayout from "../../ui/SectionLayout";
import CareerHero from "./CareerHero";
import CompetitiveBenefits from "./CompetitiveBenefits";
import JobLists from "./JobLists";
import SmallHeading from "../../components/SmallHeading";
import PrimaryButton from "../../components/PrimaryButton";

function Career() {
  return (
    <>
      <CareerHero />
      <JobLists />
      <CompetitiveBenefits />
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
    </>
  );
}

export default Career;
