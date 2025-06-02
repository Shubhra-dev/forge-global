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
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 tab:gap-6">
        <IconBox4
          width={`w-full sm:w-1/3`}
          height={`sm:h-[500px] smLap:h-[400px] laptop:h-[350px]`}
          detail={`The index includes U.S. domiciled companies that have raised at least one round of primary funding and have higher relative secondary liquidity in the past 12 months.`}
        />
        <IconBox4
          width={`w-full sm:w-1/3`}
          height={`sm:h-[500px] smLap:h-[400px] laptop:h-[350px]`}
          detail={`Companies are selected for index inclusion based on a proprietary scoring model which incorporates key pricing and liquidity information such as closed trade prices, volume, and bid/ask pricing indications.`}
        />
        <IconBox4
          width={`w-full sm:w-1/3`}
          height={`sm:h-[500px] smLap:h-[400px] laptop:h-[350px]`}
          detail={`Companies are selected for index inclusion based on a proprietary scoring model which incorporates key pricing and liquidity information such as closed trade prices, volume, and bid/ask pricing indications.`}
        />
      </div>
    </SectionLayout>
  );
}

export default Methodology;
