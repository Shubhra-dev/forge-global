import SubTitle from "../../components/SubTitle";
import { FiArrowUpRight } from "react-icons/fi";
import Text from "../../components/Text";
function TeamCard({ image, firstName, lastName, designation, onClick }) {
  return (
    <div
      onClick={onClick ? onClick : () => {}}
      className="w-full sm:w-[47%] tab:w-[23%] flex flex-col cursor-pointer dark:bg-backgroundDark rounded-[20px]"
    >
      <div className="py-5 px-2.5">
        <img
          src={image}
          alt="avatar"
          className="w-48 h-48 rounded-full object-cover object-center m-auto"
        />
      </div>
      <div className="p-[15px] flex-1">
        <div className="flex items-center justify-between pb-2.5 border-b border-dashed border-b-borderPrimary">
          <SubTitle font={`font-clash`}>
            {firstName}
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            {lastName}
          </SubTitle>
          <div className="p-2 dark:bg-backgroundTertiary rounded-full">
            <FiArrowUpRight className="text-2xl font-bold dark:text-white" />
          </div>
        </div>
        <Text extraClass={`uppercase tracking-wider pt-2.5`}>
          {designation}
        </Text>
      </div>
    </div>
  );
}

export default TeamCard;
