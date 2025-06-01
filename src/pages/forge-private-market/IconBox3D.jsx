import Block3D from "../../assets/icons/3DBlock.svg";
import Text from "../../components/Text";
function IconBox3D({ text }) {
  return (
    <div className="sm:h-[220px] smLap:h-[210px] w-full sm:w-1/3 rounded-md p-3 tab:p-5 bg-white dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark">
      <div className="px-3">
        <img src={Block3D} alt="icon" />
      </div>
      <div className="mt-6">
        <Text>{text}</Text>
      </div>
    </div>
  );
}

export default IconBox3D;
