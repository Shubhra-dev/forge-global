import { RiArrowRightDownLine } from "react-icons/ri";

function PrimaryButton({ children, onClick, type, icon, padding }) {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      type={type ? type : "button"}
      className={`group ${padding ? padding : "py-3 px-6"} flex justify-center items-center gap-2 bg-primary text-white hover:bg-secondary2  duration-300 ease-in-out rounded-full`}
    >
      <p className="group-hover:text-textHeading text-base font-medium leading-normal">
        {children}
      </p>
      {icon && (
        <RiArrowRightDownLine className="text-white text-xl group-hover:text-textHeading" />
      )}
    </button>
  );
}

export default PrimaryButton;
