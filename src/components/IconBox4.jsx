import TrianglePair from "../assets/icons/trianglePair.svg";
import SmallHeading from "./SmallHeading";
function IconBox4({ detail }) {
  return (
    <div className="w-full sm:w-1/2 sm:h-[420px] smLap:h-[350px] laptop:h-[300px] p-6 sm:p-8 tab:p-10 rounded-[15px]  shadow-lg bg-backgroundCream dark:bg-backgroundCreamDark flex items-start gap-1.5 justify-normal">
      <div className="w-[8%]">
        <img src={TrianglePair} alt="icon" />
      </div>
      <div className="w-[92%]">
        <SmallHeading fontWeight={`font-medium`}>{detail}</SmallHeading>
      </div>
    </div>
  );
}

export default IconBox4;
