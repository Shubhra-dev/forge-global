import BigText from "../../components/BigText";
import SectionLayout from "../../ui/SectionLayout";
import LeadershipHero from "./LeadershipHero";
import TeamCard from "./TeamCard";
import CEOSmall from "../../assets/CEOSmall.png";
import CFO from "../../assets/CFO.jpg";
import CGO from "../../assets/CGO.jpg";
import CTO from "../../assets/CTO.jpg";
import CAOAvatar from "../../assets/CAOAvatar.png";
import OfAvatar1 from "../../assets/OfAvatar1.png";

function Leadership() {
  return (
    <>
      <LeadershipHero />
      <SectionLayout>
        <div className="pb-[60px] border-b border-b-borderPrimary">
          <BigText extraClass={`uppercase tracking-widest`}>
            Executive Leadership Team
          </BigText>
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
            <TeamCard
              image={CAOAvatar}
              firstName={`Victoria`}
              lastName={`Huges`}
              designation={`Chief People Officer`}
            />
            <TeamCard
              image={OfAvatar1}
              firstName={`Jennifer`}
              lastName={`Phillips`}
              designation={`Chief Revenue & Growth Officer`}
            />
          </div>
        </div>
        <div className="mt-[60px]">
          <BigText extraClass={`uppercase tracking-widest`}>
            Board Members
          </BigText>
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
            <TeamCard
              image={CAOAvatar}
              firstName={`Victoria`}
              lastName={`Huges`}
              designation={`Chief People Officer`}
            />
            <TeamCard
              image={OfAvatar1}
              firstName={`Jennifer`}
              lastName={`Phillips`}
              designation={`Chief Revenue & Growth Officer`}
            />
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default Leadership;
