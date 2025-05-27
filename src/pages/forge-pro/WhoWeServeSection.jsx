import SubHeading from "../../components/SubHeading";
import TextCardWithSeparator from "../../components/TextCardWithSeparator";
import SectionLayout from "../../ui/SectionLayout";
function WhoWeServeSection() {
  return (
    <SectionLayout>
      <SubHeading>Who we serve</SubHeading>
      <div className="pt-7 m-auto flex flex-wrap items-center justify-between gap-7">
        <TextCardWithSeparator
          width={`w-full sm:w-[30%] tab:w-[31%]`}
          height={`h-auto sm:h-[270px] tab:h-[240px] smLap:h-[210px]`}
          title={`Venture Capitalists`}
          detail={`Monitor existing portfolio companies, integrate secondary market pricing into valuation research, and work with Forge to bolster/trim existing positions.`}
        />
        <TextCardWithSeparator
          width={`w-full sm:w-[30%] tab:w-[31%]`}
          height={`h-auto sm:h-[270px] tab:h-[240px] smLap:h-[210px]`}
          title={`Family Offices`}
          detail={`Actively monitor private company valuations to evaluate new investment opportunities and seek liquidity for highly concentrated client positions.`}
        />
        <TextCardWithSeparator
          width={`w-full sm:w-[30%] tab:w-[31%]`}
          height={`h-auto sm:h-[270px] tab:h-[240px] smLap:h-[210px]`}
          title={`Asset Manager`}
          detail={`Seek portfolio outperformance through private company shares while working with Forge’s leading brokerage team.`}
        />
        <TextCardWithSeparator
          width={`w-full sm:w-[30%] tab:w-[31%]`}
          height={`h-auto sm:h-[270px] tab:h-[240px] smLap:h-[210px]`}
          title={`Hedge Funds`}
          detail={`Research and trade private company securities on a Forge’s leading brokerage platform to seek portfolio alpha.`}
        />
        <TextCardWithSeparator
          width={`w-full sm:w-[30%] tab:w-[31%]`}
          height={`h-auto sm:h-[270px] tab:h-[240px] smLap:h-[210px]`}
          title={`Secondaries Funds`}
          detail={`Get notified whenever a new bid/ask hits the market while monitoring live secondary pricing for private companies.`}
        />
        <TextCardWithSeparator
          width={`w-full sm:w-[30%] tab:w-[31%]`}
          height={`h-auto sm:h-[270px] tab:h-[240px] smLap:h-[210px]`}
          title={`Angel Investors`}
          detail={`Track live market pricing for your portfolio companies and get notified when investors submit interest.`}
        />
      </div>
    </SectionLayout>
  );
}

export default WhoWeServeSection;
