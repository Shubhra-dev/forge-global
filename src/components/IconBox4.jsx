import TrianglePair from "../assets/icons/trianglePair.svg";
import SmallHeading from "./SmallHeading";
function IconBox4({ detail, height, width }) {
  return (
    <div
      className={`${width ? width : "w-full sm:w-1/2"} ${height ? height : "sm:h-[420px] smLap:h-[350px] laptop:h-[300px]"} p-6 sm:p-8 tab:p-10 rounded-[15px]  shadow-lg bg-backgroundCream dark:bg-backgroundCreamDark flex items-start gap-1.5 justify-normal`}
    >
      <div className="w-[8%]">
        <img src={TrianglePair} alt="icon" />
      </div>
      <div className="w-[92%]">
        <SmallHeading
          fontWeight={`font-medium`}
          textColor={`text-textParagraph`}
        >
          {detail}
        </SmallHeading>
      </div>
    </div>
  );
}

export default IconBox4;
