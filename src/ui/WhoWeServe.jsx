import { MdOutlineArrowForwardIos } from "react-icons/md";
import ExtraSmallText from "../components/ExtraSmallText";
import SmallHeading from "../components/SmallHeading";
import Text from "../components/Text";
import { useNavigate } from "react-router-dom";

function WhoWeServe() {
  const navigate = useNavigate();
  return (
    <div className="flex items-start justify-normal gap-5">
      <div>
        <SmallHeading fontWeight={`font-bold`} align={`text-left w-max`}>
          Individual Investors
        </SmallHeading>
        <div
          onClick={() => navigate("/accredited-investors")}
          className="py-2 px-2.5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Accredited Investors</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-60`}>
              Accredited investors can invest in unregistered securities due to
              high income or net worth.
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
        <div
          onClick={() => navigate("/seeds-and-angel-investors")}
          className="py-2 px-2.5 mb-5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Seed & Angel Investors</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-60`}>
              Seed and angel investors fund early-stage startups for equity.
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
        <div
          onClick={() => navigate("/employee-shareholders")}
          className="flex items-center gap-1 group"
        >
          <Text
            fontWeight={`font-medium`}
            extraClass={`group-hover:pl-2 transition-all duration-300 pr-2.5 py-2.5 cursor-pointer`}
          >
            Employee Shareholders
          </Text>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
        <div
          onClick={() => navigate("/private-companies")}
          className="flex items-center gap-1 group"
        >
          <Text
            fontWeight={`font-medium`}
            extraClass={`group-hover:pl-2 transition-all duration-300 pr-2.5 py-2.5 cursor-pointer`}
          >
            Private Companies
          </Text>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
      </div>
      <div>
        <SmallHeading fontWeight={`font-bold`} align={`text-left w-max`}>
          Institutional Investors
        </SmallHeading>
        <div
          onClick={() => navigate("/assets-manager")}
          className="py-2 px-2.5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Asset Managers & Hedge Funds</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-60`}>
              Asset managers and hedge funds manage and invest large capital.
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
        <div
          onClick={() => navigate("/family-offices")}
          className="py-2 px-2.5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Family Offices</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-60`}>
              Family offices manage wealth and investments for high-net-worth
              families.
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
        <div
          onClick={() => navigate("/venture-capital-firms")}
          className="py-2 px-2.5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Venture Capital Firms</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-60`}>
              Venture capital firms invest in startups with high growth
              potential.
            </ExtraSmallText>
          </div>
          <div className="w-2">
            <MdOutlineArrowForwardIos className="hidden group-hover:block" />
          </div>
        </div>
        <div
          onClick={() => navigate("/wealth-managers")}
          className="py-2 px-2.5 cursor-pointer flex items-center gap-1 group"
        >
          <div>
            <Text fontWeight={`font-medium`}>Wealth Managers & RIAs</Text>
            <ExtraSmallText fontWeight={`font-normal`} extraClass={`w-60`}>
              Wealth managers and RIAs provide personalized financial and
              investment advice.
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

export default WhoWeServe;
