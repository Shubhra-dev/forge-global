import { MdOutlineArrowForwardIos } from "react-icons/md";
import ExtraSmallText from "../components/ExtraSmallText";
import SmallHeading from "../components/SmallHeading";
import Text from "../components/Text";

function Company() {
  return (
    <div>
      <SmallHeading fontWeight={`font-bold`} align={`text-left w-52`}>
        Company
      </SmallHeading>
      <div className="flex items-center gap-1 group">
        <Text
          fontWeight={`font-medium`}
          extraClass={`group-hover:pl-2 transition-all duration-300 pr-2.5 py-2.5 cursor-pointer`}
        >
          Who We Are?
        </Text>
        <div className="w-2">
          <MdOutlineArrowForwardIos className="hidden group-hover:block" />
        </div>
      </div>
      <div className="flex items-center gap-1 group">
        <Text
          fontWeight={`font-medium`}
          extraClass={`group-hover:pl-2 transition-all duration-300 pr-2.5 py-2.5 cursor-pointer`}
        >
          Leadership
        </Text>
        <div className="w-2">
          <MdOutlineArrowForwardIos className="hidden group-hover:block" />
        </div>
      </div>
      <div className="flex items-center gap-1 group">
        <Text
          fontWeight={`font-medium`}
          extraClass={`group-hover:pl-2 transition-all duration-300 pr-2.5 py-2.5 cursor-pointer`}
        >
          FAQ’s
        </Text>
        <div className="w-2">
          <MdOutlineArrowForwardIos className="hidden group-hover:block" />
        </div>
      </div>
      <div className="flex items-center gap-1 group">
        <Text
          fontWeight={`font-medium`}
          extraClass={`group-hover:pl-2 transition-all duration-300 pr-2.5 py-2.5 cursor-pointer`}
        >
          Contact Us
        </Text>
        <div className="w-2">
          <MdOutlineArrowForwardIos className="hidden group-hover:block" />
        </div>
      </div>
      <div className="flex items-center gap-1 group">
        <Text
          fontWeight={`font-medium`}
          extraClass={`group-hover:pl-2 transition-all duration-300 pr-2.5 py-2.5 cursor-pointer`}
        >
          Career
        </Text>
        <div className="w-2">
          <MdOutlineArrowForwardIos className="hidden group-hover:block" />
        </div>
      </div>
    </div>
  );
}

export default Company;
