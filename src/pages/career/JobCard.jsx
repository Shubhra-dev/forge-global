import BigText from "../../components/BigText";
import SmallHeading from "../../components/SmallHeading";
import { ArrowUpRight } from "lucide-react";

function JobCard({ jobName, location, borderY }) {
  return (
    <div
      className={`flex items-center justify-between mt-3 gap-4 p-2.5 ${borderY ? "border-y border-y-white" : ""}`}
    >
      <BigText
        fontWeight={`font-medium`}
        textColor={`text-white`}
        textColorDark={` `}
      >
        {jobName}
      </BigText>
      <div className="flex items-center gap-2.5 cursor-pointer">
        <SmallHeading
          fontWeight={`font-normal`}
          textColor={`text-white`}
          textColorDark={` `}
        >
          {location}
        </SmallHeading>
        <div className="p-1.5">
          <ArrowUpRight className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default JobCard;
