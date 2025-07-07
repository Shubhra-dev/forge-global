import MonthlyInsight from "../assets/MonthlyInsight.jpg";
import SmallHeading from "../components/SmallHeading";
import SmallText from "../components/SmallText";
import ExtraSmallText from "../components/ExtraSmallText";
import Text from "../components/Text";
function MonthlyInsightBigCard({ title, date, month, type, onClick }) {
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
        style={{ backgroundImage: `url(${MonthlyInsight})` }}
      >
        <div className="w-11 h-0.5 bg-primary rounded-full"></div>
        <Text
          textColor={`text-textHeading`}
          textColorDark={`text-textHeading`}
          fontWeight={`font-bold`}
          extraClass={`pt-1 pb-[5px]`}
        >
          {month}
        </Text>
        <ExtraSmallText
          textColor={`text-textHeading`}
          textColorDark={`text-textHeading`}
          extraClass={`uppercase tracking-wide`}
        >
          Private Market Update
        </ExtraSmallText>
      </div>
    </div>
  );
}

export default MonthlyInsightBigCard;
