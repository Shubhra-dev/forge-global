import { RiArrowRightDownLine } from "react-icons/ri";

function SecondaryButton({ children, onClick, type, icon }) {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      type={type ? type : "button"}
      className="py-3 px-6 flex justify-center items-center gap-2 bg-white dark:bg-backgroundDark border-2 border-borderPrimary dark:border-borderPrimaryDark text-textHeading dark:text-white rounded-full"
    >
      <p className="text-base font-medium leading-normal">{children}</p>
      {icon && (
        <RiArrowRightDownLine className="text-textHeading dark:text-white text-xl" />
      )}
    </button>
  );
}

export default SecondaryButton;
