import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
import TextBox from "./TextBox";
function ClarityAndConfidence() {
  return (
    <SectionLayout>
      <SubTitle
        align={`text-center`}
        fontWeight={`font-bold`}
        extraClass={`w-full tab:w-[60%] m-auto`}
      >
        Forge Data provides the tools you need to invest with clarity and
        confidence
      </SubTitle>
      <div className="pt-10 flex flex-col sm:flex-row gap-10 sm:gap-0 items-start justify-between">
        <TextBox
          title={`Same-day pricing for private market assets`}
          text={`Trading in VC-back and pre-IPO company stocks happens every day. Forge provides the same-day data to help analyze this asset class. Private company valuation shouldn't be an art. With Forge Data, it's a science.`}
        />
        <TextBox
          title={`Built on a recognized and proven trading platform`}
          text={`Forge is one of the largest private market trading platforms in the world with over 27,000 trades completed as of September 2024. We capture every trade, bid, ask, and more to help investors analyze the private market and make trading and investment decisions.`}
        />
        <TextBox
          title={`A comprehensive data solution for the growing private market`}
          text={`The private market has traditionally been opaque, inaccessible, and illiquid, in large part because data has been elusive or tightly held by a select few investors. Forge Data brings similar transparency and accessibility to the private markets that you expect from stocks, bonds, commodities, or currencies.`}
        />
      </div>
    </SectionLayout>
  );
}

export default ClarityAndConfidence;
