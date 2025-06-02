import SmallHeading from "../../components/SmallHeading";
import PriMarIndAudHeroBg from "../../assets/PriMarIndAudHeroBg.jpg";
import Title from "../../components/Title";
import BigText from "../../components/BigText";

function ForgePrivateMarketIndexAccuidityHero() {
  return (
    <div
      className="pt-[100px] sm:pt-[65px] pb-16 sm:pb-0 h-auto relative sm:h-[550px] w-full bg-backgroundPrimary dark:bg-backgroundDarkGeneral bg-center bg-cover bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${PriMarIndAudHeroBg})` }}
    >
      <div className="m-auto max-w-content w-full">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto flex flex-col tab:flex-row items-center justify-between gap-10">
          <div className="w-full tab:w-[65%]">
            <Title
              align={`text-center sm:text-left`}
              font={`font-clash w-full`}
              textColor={`text-textHeadingDark`}
              textColorDark={` `}
            >
              Forge Accuidity Private Market Index
            </Title>
            <BigText
              align={`text-center sm:text-left`}
              textColor={`text-textSubTitleDark`}
              textColorDark={` `}
              extraClass={`py-2.5`}
              fontWeight={`font-semibold`}
            >
              The Forge Accuidity Private Market Index was developed to track 60
              privately held, late-stage venture-backed US companies.
            </BigText>
            <SmallHeading
              align={`text-center sm:text-left`}
              textColor={`text-textSubTitleDark`}
              textColorDark={` `}
            >
              The Forge Private Market Index reflects the up-to-date performance
              and pricing activity of venture-backed, late-stage companies that
              are actively traded in the private market.
            </SmallHeading>
          </div>
          <div className="w-full tab:w-[35%] flex flex-col sm:flex-row tab:flex-col gap-5 justify-center">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="bg-white p-3 border border-borderPrimary w-full sm:w-[60%] tab:w-full rounded-md"
            />
            <button className="w-full sm:w-[40%] tab:w-full px-6 py-3 text-center text-white font-medium bg-primary rounded-md">
              Explore the Private Market
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgePrivateMarketIndexAccuidityHero;
