import DotsCircle from "../assets/icons/DotsCircle.svg";
import PrimaryButton from "./PrimaryButton";
import SmallHeading from "./SmallHeading";
import Text from "./Text";
function IconBox3({ title, detail, buttonText }) {
  return (
    <div className="w-full sm:w-1/2 p-10 rounded-[15px]  shadow-lg bg-backgroundCream dark:bg-backgroundCreamDark">
      <div className="py-1 px-3">
        <img src={DotsCircle} alt="icon" />
      </div>
      <div className="pt-7">
        <SmallHeading fontWeight={`font-bold`}>{title}</SmallHeading>
        <Text fontWeight={`font-medium`} extraClass={`pt-2.5 pb-7`}>
          {detail}
        </Text>
        <PrimaryButton textSize={`text-sm tab:text-base`}>
          {buttonText}
        </PrimaryButton>
      </div>
    </div>
  );
}

export default IconBox3;
