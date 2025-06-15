import { MdOutlineArrowForwardIos } from "react-icons/md";
import ExtraSmallText from "../components/ExtraSmallText";
import SmallHeading from "../components/SmallHeading";
import Text from "../components/Text";
import { useNavigate } from "react-router-dom";

function WhatWeDo() {
  const navigate = useNavigate();
  return (
    <div className="flex items-start justify-normal gap-5">
      <div>
        <SmallHeading fontWeight={`font-bold`} align={`text-left w-max`}>
          Trading
        </SmallHeading>
        <div
          onClick={() => navigate("/forge-pro")}
          className="py-2 px-2.5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Forge Pro</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-56`}>
              Trade private companies with Forge’s institutional brokerage tool
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
        <div
          onClick={() => navigate("/forge-markets")}
          className="py-2 px-2.5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Forge Markets</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-56`}>
              Find new private company investment opportunities
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
        <div
          onClick={() => navigate("/browse-companies")}
          className="py-2 px-2.5 mb-5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Browse Companies</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-56`}>
              Lets investors explore and research private companies investment.
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
        <SmallHeading fontWeight={`font-bold`} align={`text-left w-max`}>
          Liquidity Programs
        </SmallHeading>
        <div
          onClick={() => navigate("/liquidity-program")}
          className="py-2 px-2.5 mb-5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Liquidity Programs</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-56`}>
              Retain and reward employees with company-sponsored liquidity
              solutions like tender offers and customized programs
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
      </div>
      <div>
        <SmallHeading fontWeight={`font-bold`} align={`text-left w-max`}>
          Data
        </SmallHeading>
        <div
          onClick={() => navigate("/forge-price")}
          className="py-2 px-2.5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Forge Price</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-60`}>
              A proprietary indicative price, calculated daily, for
              approximately 200 pre-IPO companies
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
        <div
          onClick={() => navigate("/forge-private-market")}
          className="py-2 px-2.5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Forge Private Market Index</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-60`}>
              Monitor a benchmark for actively traded private companies
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
        <div
          onClick={() => navigate("/forge-data")}
          className="py-2 px-2.5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Forge Data</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-60`}>
              Analyze private markets via Forge’s intuitive web application
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
        <div
          onClick={() => navigate("/forge-accuidity-private-market")}
          className="py-2 px-2.5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>
              Forge Accuidity Private Market Index
            </Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-60`}>
              Invest in an institutionally-managed diversified basket of private
              Companies (QPs only)
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
