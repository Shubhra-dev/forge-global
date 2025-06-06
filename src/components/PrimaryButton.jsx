import { FaCaretRight } from "react-icons/fa";
import { RiArrowRightDownLine } from "react-icons/ri";

function PrimaryButton({
  children,
  onClick,
  type,
  icon,
  padding,
  rightIcon,
  rounded,
  textSize,
  extraClass,
}) {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      type={type ? type : "button"}
      className={`group ${extraClass ? extraClass : ""} ${padding ? padding : "py-3 px-6"} flex justify-center items-center gap-2 bg-primary text-white hover:bg-secondary2  duration-300 ease-in-out ${rounded ? rounded : "rounded-full"}`}
    >
      <p
        className={`group-hover:text-textHeading ${textSize ? textSize : "text-base"} font-medium leading-normal`}
      >
        {children}
      </p>
      {icon && (
        <RiArrowRightDownLine className="text-white text-xl group-hover:text-textHeading" />
      )}
      {rightIcon && (
        <FaCaretRight className="text-white text-xl group-hover:text-textHeading" />
      )}
    </button>
  );
}

export default PrimaryButton;
