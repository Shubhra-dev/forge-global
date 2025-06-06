import BigText from "./BigText";
import Abstract6 from "../assets/icons/Abstract6.svg";
import SmallHeading from "./SmallHeading";
function IconCard({ height, title, text, width }) {
  return (
    <div
      className={`${width ? width : "w-full"} ${height ? height : ""} rounded-3xl p-[10px] flex items-start justify-normal gap-2.5 border border-borderPrimary dark:border-borderPrimaryDark hover:bg-secondary2 transform transition-all duration-500 ease-in-out`}
    >
      <div className="p-2.5 w-[15%] sm:w-[10%]">
        <img src={Abstract6} alt="abstract element" className="" />
      </div>
      <div className="w-[85%] sm:w-[90%] h-full p-5 bg-backgroundCream dark:bg-backgroundCreamDark rounded-3xl">
        <BigText
          fontWeight={`font-semibold`}
          textColor={`text-textHeading`}
          extraClass={"pb-4"}
        >
          {title}
        </BigText>
        <SmallHeading
          fontWeight={`font-normal`}
          textColor={`text-textParagraph`}
        >
          {text}
        </SmallHeading>
      </div>
    </div>
  );
}

export default IconCard;
