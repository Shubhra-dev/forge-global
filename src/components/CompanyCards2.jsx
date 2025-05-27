import Company1 from "../assets/icons/Company1.svg";
import SmallHeading from "./SmallHeading";
import SmallText from "./SmallText";
function CompanyCards2() {
  return (
    <div className="w-full sm:w-full  shadow-md p-[15px] bg-white dark:bg-backgroundDark border border-borderPrimary">
      <div className="w-full">
        <img src={Company1} alt="company logo" className="w-max m-auto" />
        <div className="mt-5 mb-3">
          <SmallHeading align={`text-center`}>Company Name</SmallHeading>
          <SmallText extraClass={"pt-1"} align={`text-center`}>
            $517.24 <span className="text-[#027A48]">+$219.48 (73.71%)</span>
          </SmallText>
        </div>
      </div>
      <div>
        <SmallText>
          Sector <br /> Data Intelligence
        </SmallText>
        <SmallText extraClass={"pt-3"}>Forge Price Valuation</SmallText>
        <SmallText>$50B</SmallText>
      </div>
    </div>
  );
}

export default CompanyCards2;
