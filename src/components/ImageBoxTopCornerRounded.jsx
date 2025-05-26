import ArrowUpRight from "../assets/icons/ArrowUpRight.svg";
import SubTitle from "./SubTitle";
import Text from "./Text";

export default function ImageBoxTopCornerRounded({ image, title, details }) {
  return (
    <div className="w-full sm:w-[47%] tab:w-[48%] h-[450px] sm:h-[480px] tab:h-[480px] p-4 sm:p-6 tab:p-8 flex flex-col justify-end rounded-3xl bg-backgroundCream dark:bg-backgroundCreamDark relative overflow-hidden">
      <img
        src={image}
        alt="people"
        className="w-[300px] h-[300px] tab:w-[350px] tab:h-[350px] object-cover object-center -left-16 -top-20 absolute rounded-full outline outline-[30px] outline-backgroundBronze dark:outline-backgroundBronzeDark"
      />
      <div className="flex items-center justify-between gap-4 w-full">
        <div>
          <SubTitle leading={`leading-normal sm:leading-9 tab:leading-10`}>
            {title}
          </SubTitle>
          <Text>{details}</Text>
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
