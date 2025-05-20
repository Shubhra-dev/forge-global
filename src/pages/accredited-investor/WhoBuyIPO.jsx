import SectionLayout from "../../ui/SectionLayout";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import IconBox2 from "../../components/IconBox2";
import Pattern1 from "../../assets/icons/Pattern-1.svg";
import Pattern2 from "../../assets/icons/Pattern-2.svg";
import Pattern3 from "../../assets/icons/Pattern-3.svg";
import Pattern4 from "../../assets/icons/Pattern-4.svg";
import PrimaryButton from "../../components/PrimaryButton";
function WhoBuyIPO() {
  return (
    <SectionLayout>
      <div className="w-full">
        <SubTitle>Who can buy pre-IPO stocks?</SubTitle>
        <Text extraClass={`pt-[15px] tab:w-[70%]`}>
          Accreditation is the first step in accessing the pre-IPO companies
          found on Forge. Once qualified, you can tap into valuable insights and
          opportunities to buy pre-IPO shares.
        </Text>
        <div className="grid grid-cols-2 tab:grid-cols-4 gap-[20px] pt-10">
          <IconBox2
            lightIcon={Pattern1}
            title={`Income Requirement`}
            details={
              "Possess earned income over $200,000 (or $300,000 with a spouse or partner) for the past two years."
            }
          />
          <IconBox2
            lightIcon={Pattern2}
            title={`Income Expectation`}
            details={
              "Reasonably expect to maintain the same income in the current year."
            }
          />
          <IconBox2
            lightIcon={Pattern3}
            title={`Net Worth`}
            details={
              "Or, possess a net worth of at least $1 million, excluding their primary residence."
            }
          />
          <IconBox2
            lightIcon={Pattern4}
            title={`License Requirement`}
            details={
              "Or, hold in good standing a FINRA Series 7, 65 or 82 license."
            }
          />
        </div>
        <div className="w-max m-auto pt-10">
          <PrimaryButton>Start Accrediation Process</PrimaryButton>
        </div>
      </div>
    </SectionLayout>
  );
}

export default WhoBuyIPO;
