import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
import TextCardWithSeparator from "../../components/TextCardWithSeparator";
function CompanyLiquidity() {
  return (
    <SectionLayout>
      <SubTitle>Company liquidity for your employees and beyond</SubTitle>
      <div className="w-full pt-7 flex flex-col sm:flex-row items-center justify-normal gap-3 tab:gap-8">
        <TextCardWithSeparator
          title={`Customize liquidity programs`}
          detail={`Forge offers the technology and expertise to easily establish and
          manage liquidity solutions, including tender offers, for your
          employees.`}
        />
        <TextCardWithSeparator
          title={`Ensure an accurate price`}
          detail={`With more trading data than any other private market platform, Forge partners with you on a liquidity solution that accurately prices your stock.`}
        />
        <TextCardWithSeparator
          title={`Control your exit strategy`}
          detail={`Ongoing liquidity solutions allow you to meet your employees’ financial needs while retaining control of your company’s future, including exit strategy.`}
        />
        <TextCardWithSeparator
          title={`Satisfy your stakeholders`}
          detail={`Forge enables you to maintain a clean cap table, set the parameters for your liquidity offering, and reduce administrative and operational burdens related to equity programs.`}
        />
      </div>
    </SectionLayout>
  );
}

export default CompanyLiquidity;
