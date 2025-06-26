import Heading from "../../components/Heading";
import ShadowButton from "../../components/ShadowButton";
import SmallText from "../../components/SmallText";
import LocationOn from "../../assets/icons/LocationOn.svg";
function JobTitle() {
  return (
    <div className="w-full flex flex-col sm:flex-row items-end justify-between gap-5 tab:gap-0 pt-5 tab:pt-0">
      <div className="w-full sm:w-[85%] tab:w-[45%]">
        <Heading align={`text-left`} font={`font-clash`}>
          Director, Product Marketing, Custody & Wealth
        </Heading>
        <div className="mt-2.5 flex items-center justify-normal gap-2">
          <img src={LocationOn} alt="location" />
          <SmallText>Banani, Dhaka, Bangladesh</SmallText>
        </div>
      </div>
      <div className="w-max m-auto sm:m-0">
        <ShadowButton onClick={() => handleClick(`apply`)} text={`Apply`} />
      </div>
    </div>
  );
}

export default JobTitle;
