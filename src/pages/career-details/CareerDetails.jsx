import SmallText from "../../components/SmallText";
import SectionLayout from "../../ui/SectionLayout";
import ApplyForm from "./ApplyForm";
import JobTitle from "./JobTitle";
import JobDetails from "./JobDetails";
import RoleAndResponsibilities from "./RoleAndResponsibilities";

function CareerDetails() {
  function handleClick(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <>
      <SectionLayout
        padding={`pt-24 pb-12 sm:pt-16 sm:pb-16 tab:pt-32 tab:pb-14`}
      >
        <JobTitle />
        <JobDetails />
        <RoleAndResponsibilities />
        <div className="mt-10 py-3 border-y border-y-borderPrimary">
          <SmallText>
            For residents of Denver, CO the annual salary range for this role is
            $150,000 + annual bonus. Final offers may vary from the amount
            listed based on geography, candidate experience and expertise,
            bonus, and other factors
          </SmallText>
        </div>
        <div className="mt-10 pb-[15px] border-b border-b-borderPrimary">
          <SmallText fontWeight={`font-bold`}>
            Forge is proud to be an equal opportunity employer and values
            diversity at our company. We do not discriminate on the basis of
            race, religion, color, national origin, gender, sexual orientation,
            age, marital status, veteran status, or disability status.
          </SmallText>
        </div>
        <ApplyForm />
      </SectionLayout>
    </>
  );
}

export default CareerDetails;
