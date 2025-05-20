import { BiCheck } from "react-icons/bi";
import SmallHeading from "../../components/SmallHeading";

function CheckText({ padding, text }) {
  return (
    <div
      className={`w-full flex items-start justify-start gap-2 ${padding ? padding : "pb-2.5"}`}
    >
      <BiCheck className="text-3xl w-[5%] text-left" />
      <SmallHeading align={`text-left`} extraClass={`w-[95%]`}>
        {text}
      </SmallHeading>
    </div>
  );
}

export default CheckText;
