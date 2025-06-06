import ArrowUpRight from "../../assets/icons/ArrowUpRight.svg";
import BigText from "../../components/BigText";
import Text from "../../components/Text";

export default function ImageBoxRounded({ image, title, details, height }) {
  return (
    <div
      className={`w-full ${height ? height : ""} sm:w-[48%] tab:w-[31%] laptop:h-[550px] p-3 sm:p-4 tab:p-6 flex flex-col justify-end sm:justify-normal rounded-3xl bg-backgroundCream dark:bg-backgroundCreamDark relative overflow-hidden`}
    >
      <img
        src={image}
        alt="people"
        className="w-[250px] h-[250px] tab:w-[280px] tab:h-[280px] object-cover object-center -left-16 -top-20 absolute rounded-full outline outline-[30px] outline-backgroundBronze dark:outline-backgroundBronzeDark"
      />
      <div className="h-[50%] sm:h-[45%] laptop:h-[50%]"></div>
      <div className="w-full">
        <div>
          <BigText font={`font-semibold`}>{title}</BigText>
          <Text extraClass={`pt-1`}>{details}</Text>
        </div>
      </div>
    </div>
  );
}
