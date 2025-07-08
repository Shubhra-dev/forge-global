import BlackBg from "../assets/BlackBg.jpg";
import SmallHeading from "../components/SmallHeading";
import SmallText from "../components/SmallText";
import ExtraSmallText from "../components/ExtraSmallText";
import Text from "../components/Text";
function ForgeOutlook({ title, date, quarter, type, onClick }) {
  return (
    <div
      onClick={onClick ? onClick : () => {}}
      className="cursor-pointer p-[15px] rounded-3xl w-full tab:w-1/2 flex items-center justify-normal gap-7 border border-borderPrimary dark:border-borderPrimaryDark hover:shadow-md"
    >
      <div className="w-[50%] sm:w-[60%]">
        <SmallText
          extraClass={`uppercase tracking-wide`}
          fontWeight={`font-medium`}
        >
          {type}
        </SmallText>
        <SmallHeading
          extraClass={`py-[7px]`}
          leading={`leading-tight`}
          fontWeight={`font-semibold`}
        >
          {title}
        </SmallHeading>
        <SmallText extraClass={`tracking-wide`} fontWeight={`font-medium`}>
          {date}
        </SmallText>
      </div>
      <div
        className="w-[50%] sm:w-[40%] h-36 bg-center bg-cover bg-no-repeat rounded-xl p-[15px] flex flex-col justify-end items-start"
        style={{ backgroundImage: `url(${BlackBg})` }}
      >
        <div className="w-11 h-0.5 bg-primary rounded-full"></div>
        <Text
          textColor={`text-textHeadingDark`}
          textColorDark={` `}
          fontWeight={`font-bold`}
          extraClass={`pt-1 pb-[5px]`}
        >
          {quarter}
        </Text>
        <ExtraSmallText
          textColor={`text-textHeadingDark`}
          textColorDark={` `}
          extraClass={`uppercase tracking-wide`}
        >
          Forge Investment Outlook
        </ExtraSmallText>
      </div>
    </div>
  );
}

export default ForgeOutlook;
