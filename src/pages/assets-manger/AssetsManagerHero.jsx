import AssetManHeroBg from "../../assets/AssetManHeroBg.jpg";
import BigText from "../../components/BigText";
import PrimaryButton from "../../components/PrimaryButton";
import Title from "../../components/Title";
function AssetsManagerHero() {
  return (
    <div
      className="pt-[65px] h-[600px] relative sm:h-[550px] w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${AssetManHeroBg})` }}
    >
      <div className="m-auto max-w-content w-full z-20">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto z-20">
          <div className="m-0 sm:m-auto w-full sm:w-[75%]">
            <Title align={`text-center`} textColor={`text-textHeadingDark`}>
              Enhance client portfolios with access to pre-IPO companies
            </Title>
            <BigText
              extraClass={`pt-2.5`}
              align={`text-center`}
              textColor={`text-textHeadingDark`}
            >
              Forge gives asset managers and hedge funds access to unique deal
              flow so you can cover more opportunities when building private
              company portfolios for clients.
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

export default AssetsManagerHero;
