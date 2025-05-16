import { RiArrowRightDownLine, RiArrowRightUpLine } from "react-icons/ri";

function SecondaryButton({
  children,
  onClick,
  type,
  iconUp,
  iconDown,
  padding,
}) {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      type={type ? type : "button"}
      className={`${padding ? padding : "py-3 px-6"} flex justify-normal items-center gap-2 bg-white dark:bg-backgroundDark border-2 w-max border-borderPrimary dark:border-borderPrimaryDark text-textHeading dark:text-white rounded-full`}
    >
      <p className="text-base font-medium leading-normal">{children}</p>
      {iconUp && (
        <RiArrowRightUpLine className="text-textHeading dark:text-white text-xl" />
      )}
      {iconDown && (
        <RiArrowRightDownLine className="text-textHeading dark:text-white text-xl" />
      )}
    </button>
  );
}

export default SecondaryButton;
