import TwoPeople from "../assets/TwoPeople.jpg";
import ArrowUpRight from "../assets/icons/ArrowUpRight.svg";
import SubTitle from "./SubTitle";
import { RiArrowRightUpLine } from "react-icons/ri";
import Text from "./Text";

export default function ImageBoxTopCornerRounded() {
  return (
    <div className="w-1/2 h-[450px] p-8 flex flex-col justify-end rounded-3xl bg-backgroundCream dark:bg-backgroundCreamDark relative overflow-hidden">
      <img
        src={TwoPeople}
        alt="people"
        className="w-[350px] h-[350px] object-cover object-center -left-16 -top-20 absolute rounded-full outline outline-[30px] outline-backgroundBronze dark:outline-backgroundBronzeDark"
      />
      <div className="flex items-center justify-between gap-4 w-full">
        <div>
          <SubTitle>Case study</SubTitle>
          <Text>
            How DocuSign used employee liquidity programs to stay private for 15
            years and support talent along the way.
          </Text>
        </div>

        <img
          src={ArrowUpRight}
          alt="arrow up"
          className="outline outline-[5px] outline-backgroundCream rounded-full bg-backgroundCream"
        />
      </div>
    </div>
  );
}
