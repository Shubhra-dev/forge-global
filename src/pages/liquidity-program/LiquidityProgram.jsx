import Heading from "../../components/Heading";
import IconCard from "../../components/IconCard";
import SectionLayout from "../../ui/SectionLayout";
import Benifits from "./Benifits";
import LiquidityProgramHero from "./LiquidityProgramHero";

function LiquidityProgram() {
  return (
    <>
      <LiquidityProgramHero />
      <Benifits />
      <SectionLayout>
        <Heading align={`text-center sm:text-left`} font={`font-clash`}>
          Why use Forge
        </Heading>
        <div className="flex flex-col sm:flex-row pt-10 items-center justify-between gap-5">
          <IconCard
            height={`h-auto sm:h-[350px] tab:h-[280px] laptop:h-[240px]`}
            width={`w-full sm:w-1/2`}
            title={`Access to institutional investor network`}
            text={`Access Forge’s investor network to raise capital from quality institutional investors.`}
          />
          <IconCard
            height={`h-auto sm:h-[350px] tab:h-[280px] laptop:h-[240px]`}
            width={`w-full sm:w-1/2`}
            title={`Technology infrastructure to support tender offers`}
            text={`Private market infrastructure with tools to raise capital, offer secondary liquidity, and access market insights.`}
          />
        </div>
        <div className="flex flex-col sm:flex-row pt-5 items-center justify-between gap-5">
          <IconCard
            height={`h-auto sm:h-[350px] tab:h-[280px] laptop:h-[240px]`}
            width={`w-full sm:w-1/2`}
            title={`Deeply experienced team with a track record`}
            text={`Experienced team to advise on a suite of private market liquidity solutions that meet private issuer needs at every stage of growth.`}
          />
          <IconCard
            height={`h-auto sm:h-[350px] tab:h-[280px] laptop:h-[240px]`}
            width={`w-full sm:w-1/2`}
            title={`Regulatory expertise and industry best practices`}
            text={`Forge experts can assist with navigating through regulatory guidelines and industry best practices.`}
          />
        </div>
      </SectionLayout>
    </>
  );
}

export default LiquidityProgram;
