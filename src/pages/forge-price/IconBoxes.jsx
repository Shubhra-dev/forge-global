import SectionLayout from "../../ui/SectionLayout";
import IconBox4 from "../../components/IconBox4";
function IconBoxes() {
  return (
    <SectionLayout>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8 tab:gap-10">
        <IconBox4
          detail={`Forge Price is a derived, indicative price, calculated daily for approximately 200 pre-IPO venture-backed late-stage companies—it synthesizes data from various sources, including secondary market transactions, recent funding rounds, and indications of interest on the Forge platform.`}
        />
        <IconBox4
          detail={`Compared to relying upon standalone sources such as primary funding round prices, last trade price, or public equity proxies, Forge Price provides a more timely and relevant reflection of company value and price discovery—a potential competitive edge for private market participants.`}
        />
      </div>
    </SectionLayout>
  );
}

export default IconBoxes;
