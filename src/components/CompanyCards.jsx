import Company1 from "../assets/icons/Company1.svg";
import SmallHeading from "./SmallHeading";
import SmallText from "./SmallText";
function CompanyCards() {
  return (
    <div className="w-1/4 p-[15px] bg-white dark:bg-backgroundDark border border-borderPrimary">
      <div className="w-full flex items-center justify-normal gap-3">
        <img src={Company1} alt="company logo" />
        <div className="mb-3">
          <SmallHeading>Company Name</SmallHeading>
          <SmallText extraClass={"pt-1"}>
            $517.24 <span className="text-[#027A48]">+$219.48 (73.71%)</span>
          </SmallText>
        </div>
      </div>
      <div>
        <SmallText>Enterprise Software/Data Intelligence</SmallText>
        <SmallText extraClass={"pt-3"}>LFR Post-Money Valuation</SmallText>
        <SmallText>$50B</SmallText>
      </div>
    </div>
  );
}

export default CompanyCards;
