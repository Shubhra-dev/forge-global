import Company1 from "../assets/icons/Company1.svg";
import SmallHeading from "./SmallHeading";
import SmallText from "./SmallText";
function CompanyCards({ company }) {
  return (
    <div className="w-full sm:w-auto p-[15px] bg-white dark:bg-backgroundDark border border-borderPrimary">
      <div className="w-full flex items-center justify-normal gap-3">
        <img
          src={company?.thumbnail_image || Company1}
          alt="company logo"
          className="w-5 h-5"
        />
        <div className="mb-3">
          <SmallHeading>{company?.name || "Company Name"}</SmallHeading>
          <SmallText extraClass={"pt-1"}>
            ${company?.forge_price || "517.24"}{" "}
            <span className="text-[#027A48]">
              +${company?.growth || "219.48"} (
              {company?.growth_percentage || "73.71"}%)
            </span>
          </SmallText>
        </div>
      </div>
      <div>
        <SmallText>
          {company?.sector.name || "Enterprise Software/Data Intelligence"}
          {company?.sub_sector.name && ` / ${company?.sub_sector.name}`}
        </SmallText>
        <SmallText extraClass={"pt-3"}>LFR Post-Money Valuation</SmallText>
        <SmallText>${company?.post_money_valuation || "50B"}</SmallText>
      </div>
    </div>
  );
}

export default CompanyCards;
