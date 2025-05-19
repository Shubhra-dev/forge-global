import IndInvHeroBg from "../../assets/IndInvHeroBg.jpg";
import BigText from "../../components/BigText";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
function IndividualInvestors() {
  return (
    <div
      className="pt-[65px] h-[600px] sm:h-[550px] w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${IndInvHeroBg})` }}
    >
      <div className="m-auto max-w-content w-full">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto">
          <div className="m-auto sm:m-0 sm:w-4/5 tab:w-3/5">
            <Title align={`text-left`} textColor={`text-textHeadingDark`}>
              Accreditation unlocks opportunities
            </Title>
            <BigText
              extraClass={`pt-2.5`}
              textColor={`text-textHeadingDark`}
              textColorDark={`dark:text-textHeadingDark`}
            >
              In a dynamic market, intelligence is vital. Forge equips
              accredited investors with the insights, data and tools to help
              them act decisively. Rely on Forge’s proven platform to identify
              new ways to participate in pre-IPO investing.
            </BigText>
            <div className="pt-10">
              <PrimaryButton>Start Investing</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualInvestors;
