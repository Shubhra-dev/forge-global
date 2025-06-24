import Heading from "../../components/Heading";
import SectionLayout from "../../ui/SectionLayout";
import JobInfoCard from "./JobInfoCard";
function CompetitiveBenefits() {
  return (
    <SectionLayout>
      <div className="w-full sm:w-3/4 tab:w-1/2">
        <Heading
          align={`text-left`}
          font={`font-clash`}
          fontWeight={`font-medium`}
        >
          We offer competitive compensation, benefits, and perks so our people
          can thrive
        </Heading>
      </div>
      <div className="mt-[60px] flex items-stretch justify-between flex-wrap gap-8">
        <JobInfoCard
          title={`Health and wellness`}
          detail={`Medical, dental, and vision are available to all employees.`}
        />
        <JobInfoCard
          title={`Smart savings`}
          detail={`401k plan, life insurance, HSA and FSA, and pre-tax mass transit and parking benefits .`}
        />
        <JobInfoCard
          title={`Health and wellness`}
          detail={`Medical, dental, and vision are available to all employees.`}
        />
        <JobInfoCard
          title={`Health and wellness`}
          detail={`Medical, dental, and vision are available to all employees.`}
        />
        <JobInfoCard
          title={`Health and wellness`}
          detail={`Medical, dental, and vision are available to all employees.`}
        />
        <JobInfoCard
          title={`Health and wellness`}
          detail={`Medical, dental, and vision are available to all employees.`}
        />
        <JobInfoCard
          title={`Health and wellness`}
          detail={`Medical, dental, and vision are available to all employees.`}
        />
        <JobInfoCard
          title={`Health and wellness`}
          detail={`Medical, dental, and vision are available to all employees.`}
        />
        <JobInfoCard
          title={`Health and wellness`}
          detail={`Medical, dental, and vision are available to all employees.`}
        />
      </div>
    </SectionLayout>
  );
}

export default CompetitiveBenefits;
