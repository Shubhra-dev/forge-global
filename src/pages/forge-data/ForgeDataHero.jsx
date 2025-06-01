import PrimaryButton from "../../components/PrimaryButton";
import SmallHeading from "../../components/SmallHeading";
import ForgeDataHeroBg from "../../assets/ForgeDataHeroBg.jpg";
import ForgeDataHeroSide from "../../assets/ForgeDataHeroSide.jpg";
import BigText from "../../components/BigText";
import SubTitle from "../../components/SubTitle";

function ForgeDataHero() {
  return (
    <div
      className="pt-[65px] h-auto relative sm:h-[600px] w-full bg-backgroundPrimary dark:bg-backgroundDarkGeneral bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${ForgeDataHeroBg})` }}
    >
      <div className="m-auto max-w-content w-full">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto flex items-center justify-between">
          <div className="w-full tab:w-[50%]">
            <BigText
              extraClass={`pt-5 sm:pt-0 pb-2.5 uppercase tracking-wide`}
              font={`font-semibold`}
              textColorDark={`dark:text-textSubheading`}
              align={`text-center sm:text-left`}
            >
              forge data
            </BigText>
            <SubTitle
              align={`text-center sm:text-left`}
              font={`font-clash w-full`}
              leading={`leading-normal sm:leading-9 tab:leading-10`}
              textColorDark={`dark:text-textHeading`}
            >
              Find your competitive edge to navigate the private market
            </SubTitle>
            <SmallHeading
              extraClass={`pt-2.5`}
              align={`text-center sm:text-left`}
              textColorDark={`dark:text-textParagraph`}
            >
              Private market assets can provide investors with potential new
              sources of return and portfolio diversification. Forge Data can
              help to inform your investing strategy through live private market
              pricing information for use in trading and portfolio construction.
            </SmallHeading>
            <div className="pt-10 pb-5 w-max m-auto sm:m-0">
              <PrimaryButton>Connect With Our Experts</PrimaryButton>
            </div>
          </div>
          <img
            src={ForgeDataHeroSide}
            alt="force price"
            className="w-[50%] tab:w-[45%] hidden tab:block"
          />
        </div>
      </div>
    </div>
  );
}

export default ForgeDataHero;
