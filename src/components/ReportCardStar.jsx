import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Star from "../assets/Star.png";
import Logo from "../assets/icons/Logo.svg";

const ReportCardStar = ({ report }) => {
  return (
    <div className="relative w-full sm:w-[48%] tab:w-1/3 bg-backgroundBronzeDark text-white rounded-[24px] p-5 overflow-hidden flex flex-col justify-between h-[400px] sm:h-[500px]">
      {/* Title and Description */}
      <div>
        <h2 className="text-yellow-400 text-lg font-semibold mb-2">
          {report.short_title}
        </h2>
        <p className="text-sm">{report.title}</p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 z-10 relative">
        <div className="flex items-center gap-1 text-xs">
          <img src={Logo} alt="report" className="w-4 h-4" />
          <span>REPORT</span>
        </div>
        <button className="bg-white text-black p-2 rounded-full">
          <BsArrowUpRight />
        </button>
      </div>
      <img src={Star} className="absolute bottom-0 right-0 z-0" />
    </div>
  );
};

export default ReportCardStar;
