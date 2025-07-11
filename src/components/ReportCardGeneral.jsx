import { BsArrowUpRight } from "react-icons/bs";
import BlogGraph from "../assets/BlogGraph.jpg";
import ExtraSmallText from "../components/ExtraSmallText";
import SmallHeading from "../components/SmallHeading";

const ReportCardGeneral = ({ blog }) => {
  return (
    <div className="relative w-full sm:w-[48%] tab:w-1/3 bg-white shadow-borderPrimary/20 shadow-allSide dark:shadow-none dark:bg-backgroundDark text-white rounded-[24px] p-5 overflow-hidden flex flex-col justify-between h-[400px] sm:h-[500px]">
      {/* Title and Description */}
      <div className="h-[80%]">
        <div className="h-[60%] w-full">
          <img
            src={blog.image}
            alt="blog image"
            className="w-full h-full rounded-t-md"
          />
        </div>
        <div className="pt-3.5">
          <ExtraSmallText
            textColor={"text-primary uppercase"}
            textColorDark={"text-primary"}
          >
            {blog.short_title}
          </ExtraSmallText>
          <SmallHeading extraClass={"pt-2"}>{blog.title}</SmallHeading>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end z-10 relative">
        <button className="bg-white dark:bg-textSubheading text-black p-2 rounded-full">
          <BsArrowUpRight className="text-black dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default ReportCardGeneral;
