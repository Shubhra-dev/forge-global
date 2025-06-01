import SectionLayout from "../../ui/SectionLayout";
import IndexPerformance1 from "../../assets/IndexPerformance.png";
import IndexPerformanceSmall1 from "../../assets/IndexPerformanceSmall1.png";
import IndexPerformanceSmall2 from "../../assets/IndexPerformanceSmall2.png";
import SmallText from "../../components/SmallText";
function IndexPerformance() {
  return (
    <SectionLayout>
      <img
        src={IndexPerformance1}
        alt="index performance"
        className="w-full h-[580px] hidden tab:block"
      />
      <img
        src={IndexPerformanceSmall1}
        alt="index performance"
        className="w-full h-[600px] tab:hidden"
      />
      <img
        src={IndexPerformanceSmall2}
        alt="index performance"
        className="w-full h-60 tab:hidden"
      />
      <SmallText extraClass={`pt-3`}>
        Non-Forge Private Market Index data from Quandl and Sharadar.
        <br />
        The performance of the Forge Private Market Index above does not
        represent the performance of any actual investment, as you cannot invest
        in the index, but rather reflects the hypothetical growth of a $10,000
        investment in a basket of securities based on the Index. Read additional
        disclaimers.
      </SmallText>
    </SectionLayout>
  );
}

export default IndexPerformance;
