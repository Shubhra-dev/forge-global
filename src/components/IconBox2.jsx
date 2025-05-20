import SmallHeading from "./SmallHeading";
import Text from "./Text";
function IconBox2({ lightIcon, title, details }) {
  return (
    <div className="p-2.5 rounded-3xl border border-borderPrimary flex flex-col gap-2.5 dark:border-borderPrimaryDark h-[500px] sm:h-[350px] tab:h-[480px] laptop:h-[400px] hover:bg-secondary2 transform transition-all duration-500 ease-in-out">
      <div className="w-full h-[40%]">
        <img src={lightIcon} alt="pattern icon" />
      </div>
      <div className="w-full h-[60%] p-5 rounded-[15px] bg-backgroundPrimary dark:bg-backgroundPrimaryDark">
        <SmallHeading extraClass={"pb-6"}>{title}</SmallHeading>
        <Text>{details}</Text>
      </div>
    </div>
  );
}

export default IconBox2;
