import DotsCircle from "../../assets/icons/DotsCircle.svg";
import BigText from "../../components/BigText";
import SmallHeading from "../../components/SmallHeading";
function IconBox5({ title, text }) {
  return (
    <div className="w-full sm:w-[48%] tab:w-[33%] sm:h-[450px] tab:h-[520px] laptop:h-[480px] flex flex-col justify-between p-2.5 border border-borderPrimary dark:border-borderPrimaryDark rounded-3xl hover:bg-secondary2 transform transition-all duration-500 ease-in-out">
      <div className="h-[25%] smLap:h-[27%] laptop:h-[30%]">
        <img src={DotsCircle} alt="dot circle" />
      </div>
      <div className="h-[75%] smLap:h-[73%] laptop:h-[70%] mt-16 sm:mt-0 p-2 laptop:p-5 bg-backgroundPrimary dark:bg-backgroundPrimaryDark rounded-xl">
        <BigText font={`font-semibold`}>{title}</BigText>
        <SmallHeading
          fontWeight={`font-normal`}
          extraClass={`pt-5`}
          textColor={`text-textParagraph`}
          textColorDark={`dark:text-textParagraphDark`}
        >
          {text}
        </SmallHeading>
      </div>
    </div>
  );
}

export default IconBox5;
