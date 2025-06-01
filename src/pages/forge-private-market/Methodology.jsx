import BigText from "../../components/BigText";
import Heading from "../../components/Heading";
import IconBox4 from "../../components/IconBox4";
import SectionLayout from "../../ui/SectionLayout";

function Methodology() {
  return (
    <SectionLayout>
      <Heading font={`font-clash`}>Methodology</Heading>
      <BigText fontWeight={`font-semibold`} extraClass={`py-7`}>
        The index is valued daily, with daily website updates and annual
        rebalance and reconstitution.
      </BigText>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 tab:gap-10">
        <IconBox4
          height={`sm:h-[320px] smLap:h-[350px] laptop:h-[300px]`}
          detail={`The index includes U.S. domiciled companies that have raised at least one round of primary funding and have higher relative secondary liquidity in the past 12 months.`}
        />
        <IconBox4
          height={`sm:h-[320px] smLap:h-[350px] laptop:h-[300px]`}
          detail={`Companies are selected for index inclusion based on a proprietary scoring model which incorporates key pricing and liquidity information such as closed trade prices, volume, and bid/ask pricing indications.`}
        />
      </div>
    </SectionLayout>
  );
}

export default Methodology;
