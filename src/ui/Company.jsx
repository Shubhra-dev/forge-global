import { MdOutlineArrowForwardIos } from "react-icons/md";
import SmallHeading from "../components/SmallHeading";
import Text from "../components/Text";
import { useNavigate } from "react-router-dom";

function Company() {
  const navigate = useNavigate();
  return (
    <div>
      <SmallHeading fontWeight={`font-bold`} align={`text-left w-52`}>
        Company
      </SmallHeading>
      <div
        onClick={() => navigate(`/about-company`)}
        className="flex items-center gap-1 group"
      >
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
      <div
        onClick={() => navigate(`/leadership`)}
        className="flex items-center gap-1 group"
      >
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
      <div
        onClick={() => navigate(`/faq`)}
        className="flex items-center gap-1 group"
      >
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
      <div
        onClick={() => navigate(`/contact-us`)}
        className="flex items-center gap-1 group"
      >
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
      <div
        onClick={() => navigate(`/career`)}
        className="flex items-center gap-1 group"
      >
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
