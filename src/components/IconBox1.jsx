import SmallHeading from "./SmallHeading";
import Text from "./Text";
function IconBox1({ icon, title, text }) {
  return (
    <div className="w-full sm:w-[48%] h-auto sm:h-[280px] tab:h-56 smLap:h-52 rounded-3xl p-[10px] flex items-start justify-normal gap-2.5 border border-borderPrimary dark:border-borderPrimaryDark hover:bg-secondary2 transform transition-all duration-500 ease-in-out">
      <div className="p-2.5 w-[15%]">
        <img src={icon} alt="abstract element" className="" />
      </div>
      <div className="w-[85%] h-full p-5 bg-backgroundCream dark:bg-backgroundCreamDark rounded-3xl">
        <SmallHeading extraClass={"pb-4"}>{title}</SmallHeading>
        <Text>{text}</Text>
      </div>
    </div>
  );
}

export default IconBox1;
