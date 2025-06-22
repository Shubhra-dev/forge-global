import { FiArrowUpRight } from "react-icons/fi";
import BigText from "../../components/BigText";

function LinkButton({ text, onClick }) {
  return (
    <div
      onClick={onClick ? onClick : () => {}}
      className="py-[15px] cursor-pointer dark:bg-backgroundTertiary w-[46%] tab:w-[25%] px-4 sm:px-5 rounded-xl flex items-center justify-center gap-4 sm:justify-between group hover:bg-secondary2"
    >
      <BigText
        fontWeight={`font-semibold`}
        extraClass={`group-hover:animate-shake`}
      >
        {text}
      </BigText>
      <div className="p-2 bg-primary group-hover:bg-white rounded-full hidden sm:block">
        <FiArrowUpRight className="text-white text-xl group-hover:text-textHeading" />
      </div>
    </div>
  );
}

export default LinkButton;
