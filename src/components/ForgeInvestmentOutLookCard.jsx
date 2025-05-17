import BlackBg from "../assets/BlackBg.jpg";
import ReportCardHeading from "./ReportCardHeading";
import SmallText from "./SmallText";
import Text from "./Text";
function ForgeInvestmentOutLookCard() {
  return (
    <div className="w-1/4 rounded-xl border border-borderPrimary dark:border-borderPrimaryDark">
      <div
        className="w-full h-40 bg-cover bg-center rounded-t-xl p-4 flex flex-col justify-end"
        style={{ backgroundImage: `url(${BlackBg})` }}
      >
        <div className="w-14 h-1 rounded-full bg-primary mb-2"></div>
        <ReportCardHeading>Forge Investment Outlook</ReportCardHeading>
        <SmallText
          extraClass={"py-2"}
          fontWeight={"font-medium"}
          textColor={`text-white`}
          textColorDark={"text-white"}
        >
          Q2 2025
        </SmallText>
      </div>
      <div className="px-[15px] pt-[30px] pb-[15px] h-48 flex flex-col justify-between">
        <div>
          <SmallText
            extraClass={`uppercase pb-[7px] tracking-wide`}
            fontWeight={"font-medium"}
          >
            Report
          </SmallText>
          <Text
            fontWeight={"font-medium"}
            textColor={"text-textHeading"}
            textColorDark={"text-white"}
          >
            Increased Private Market Optimism and AI’s Continued Surge
          </Text>
        </div>
        <SmallText extraClass={`uppercase pb-[7px]`}>
          January 20, 2025
        </SmallText>
      </div>
    </div>
  );
}

export default ForgeInvestmentOutLookCard;
