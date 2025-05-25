import FamOffHeroBg from "../../assets/FamOffHeroBg.jpg";
import BigText from "../../components/BigText";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
function FamilyOfficesHero() {
  return (
    <div
      className="pt-[65px] h-[600px] relative sm:h-[550px] w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${FamOffHeroBg})` }}
    >
      <div className="m-auto max-w-content w-full z-20">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto z-20">
          <div className="m-0 sm:m-auto w-full sm:w-[75%]">
            <Title align={`text-center`} textColor={`text-textHeadingDark`}>
              Enhance your portfolio by investing in venture backed private
              companies
            </Title>
            <BigText
              extraClass={`pt-2.5`}
              align={`text-center`}
              textColor={`text-textHeadingDark`}
            >
              With Forge’s platform, family offices can tap into an uncorrelated
              asset class and navigate highly vetted deal flow to differentiate
              portfolios and seek new sources of growth.
            </BigText>
            <div className="pt-10 w-max m-auto">
              <PrimaryButton>Sign Up for Forge</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FamilyOfficesHero;
