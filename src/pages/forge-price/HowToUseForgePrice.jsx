import Heading from "../../components/Heading";
import SectionLayout from "../../ui/SectionLayout";
import HowUseForgePrice from "../../assets/HowUseForgePrice.png";
import TextCardWithSeparator2 from "../../components/TextCardWithSeparator2";
function HowToUseForgePrice() {
  return (
    <SectionLayout
      bg={`bg-backgroundTertiaryLight`}
      bgDark={`dark:bg-backgroundTertiary`}
    >
      <Heading font={`font-clash`}>
        How to use <span className="text-primary">Forge Price</span>
      </Heading>
      <div className="py-10">
        <img
          src={HowUseForgePrice}
          alt="how to"
          className="w-full h-48 sm:h-80 tab:h-[450px]"
        />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 tab:gap-10">
        <TextCardWithSeparator2
          title={`Value private companies`}
          detail={`Forge Price can provide more up to date portfolio valuation versus traditional metrics such as last funding round prices. `}
          buttonText={`Explore Companies`}
        />
        <TextCardWithSeparator2
          title={`Build private market indices and financial products`}
          detail={`Forge Price can be used to develop indices and benchmarks, like the Forge Accuidity Private Market Index, that track the performance of venture-backed pre-IPO companies.`}
          buttonText={`Learn More`}
        />
        <TextCardWithSeparator2
          title={`Calculate time-series performance`}
          detail={`Forge Price can be utilized to calculate performance or generate backtests at the individual asset or overall portfolio level. For example, track the seven companies that led the private market through the Great Reset.`}
          buttonText={`Learn More`}
        />
      </div>
    </SectionLayout>
  );
}

export default HowToUseForgePrice;
