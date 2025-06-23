import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import PrimaryButton from "../../components/PrimaryButton";
import LeadDeatailhero from "./LeadDeatailhero";
import CEOSmall from "../../assets/CEOSmall.png";
import CFO from "../../assets/CFO.jpg";
import CGO from "../../assets/CGO.jpg";
import CTO from "../../assets/CTO.jpg";
import TeamCard from "../leadership/TeamCard";

function LeadershipDeatil() {
  return (
    <>
      <LeadDeatailhero />
      <SectionLayout
        bg={`bg-backgroundCream`}
        bgDark={`dark:bg-backgroundCreamDark`}
      >
        <div className="w-full flex flex-col sm:flex-row items-end justify-between gap-4 sm:gap-0">
          <div className="w-full sm:w-[60%] tab:w-[45%]">
            <Title
              fontWeight={`font-medium`}
              align={`text-center sm:text-left`}
            >
              Meet More of Our{" "}
              <span className="font-semibold text-primary"> Leaders</span>
            </Title>
          </div>
          <div className="w-max m-auto sm:m-0">
            <PrimaryButton>View All</PrimaryButton>
          </div>
        </div>
        <div className="w-full mt-10 flex flex-wrap items-stretch justify-normal gap-6 tab:gap-5">
          <TeamCard
            image={CEOSmall}
            firstName={`Kelly`}
            lastName={`Rodriguez`}
            designation={`Chief Executive Officer`}
          />
          <TeamCard
            firstName={`James`}
            lastName={`Nevin`}
            image={CFO}
            designation={`Chief Financial Officer`}
          />
          <TeamCard
            image={CTO}
            firstName={`Vidya`}
            lastName={`Eashwer`}
            designation={`Chief Technology Officer`}
          />
          <TeamCard
            image={CGO}
            firstName={`Jennifer`}
            lastName={`Phillips`}
            designation={`Chief Growth Officer`}
          />
        </div>
      </SectionLayout>
    </>
  );
}

export default LeadershipDeatil;
