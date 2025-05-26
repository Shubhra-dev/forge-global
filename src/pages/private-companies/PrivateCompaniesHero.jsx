import PriComHeroBg from "../../assets/PriComHeroBg.jpg";
import BigText from "../../components/BigText";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
function PrivateCompaniesHero() {
  return (
    <div
      className="pt-[65px] h-[600px] relative sm:h-[550px] w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${PriComHeroBg})` }}
    >
      <div className="m-auto max-w-content w-full z-20">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto z-20">
          <div className="m-0 sm:m-auto w-full sm:w-[75%]">
            <Title align={`text-center`} textColor={`text-textHeadingDark`}>
              The IPO window may be closed, but the private market is open
            </Title>
            <BigText
              extraClass={`pt-2.5`}
              align={`text-center`}
              textColor={`text-textHeadingDark`}
            >
              Now more than ever, companies need to stay attuned to the needs of
              their employees. With Forge Private Company Solutions, you can
              offer liquidity options that work for your employees and for your
              long-term approach for retaining the best talent.
            </BigText>
            <div className="pt-10 w-max m-auto">
              <PrimaryButton>Let's Talk</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateCompaniesHero;
