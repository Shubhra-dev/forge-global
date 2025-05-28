import SectionLayout from "../../ui/SectionLayout";
import IconBox3 from "../../components/IconBox3";
function IconCardSection() {
  return (
    <SectionLayout>
      <div className="flex flex-col sm:flex-row items-center justify-normal gap-10 tab:gap-16">
        <IconBox3
          title={`Explore Forge For Shareholders`}
          detail={`Forge provides a runway for employee shareholders to sell private stock. Learn more about unlocking liquidity on the private market.`}
          buttonText={`Explore Forge For Shareholders`}
        />
        <IconBox3
          title={`Seeking access to a new asset class?`}
          detail={`Enhance investment strategies on the pre-IPO market using the platform with capacity to manage the multifaceted institutional investing process.`}
          buttonText={`Explore Forge For Institutions`}
        />
      </div>
    </SectionLayout>
  );
}

export default IconCardSection;
