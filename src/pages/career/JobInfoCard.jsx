import lightIcon from "../../assets/icons/lightIcon.svg";
import SmallHeading from "../../components/SmallHeading";
import Text from "../../components/Text";
function JobInfoCard({ title, detail }) {
  return (
    <div className="p-2.5 sm:w-[47%] tab:w-[31%] rounded-3xl border border-borderPrimary gap-2.5 dark:border-borderPrimaryDark flex flex-col hover:bg-secondary2 transform transition-all duration-500 ease-in-out">
      <div className="w-full pb-20">
        <img src={lightIcon} alt="pattern icon" />
      </div>
      <div className="w-full flex-1 p-5 rounded-[15px] bg-backgroundPrimary dark:bg-backgroundPrimaryDark">
        <SmallHeading extraClass={"pb-4"}>{title}</SmallHeading>
        <Text>{detail}</Text>
      </div>
    </div>
  );
}

export default JobInfoCard;
