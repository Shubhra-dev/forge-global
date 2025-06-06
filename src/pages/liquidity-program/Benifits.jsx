import Heading from "../../components/Heading";
import TwoPeople from "../../assets/TwoPeople.jpg";
import Team from "../../assets/Team.jpg";
import WomanMobile from "../../assets/WomanMobile.jpg";
import ImageBoxRounded from "./ImageBoxRounded";
import SectionLayout from "../../ui/SectionLayout";
function Benifits() {
  return (
    <SectionLayout>
      <Heading font={`font-clash`}>
        Benefits of company-sponsored liquidity programs
      </Heading>
      <div className="flex flex-wrap gap-5 tab:gap-0 tab:flex-nowrap items-center justify-between pt-10">
        <ImageBoxRounded
          height={`h-[500px] mobile:h-[470px] sm:h-[500px] tab:h-[580px]`}
          image={TwoPeople}
          title={`Enable employees to access liquidity`}
          details={`Through a company-sponsored program, employees can seek the liquidity they need to fund life’s journey—whether it’s buying a home, putting a kid through college, or planning for retirement—liquidity programs can be critical tools for increasing employee retention.`}
        />
        <ImageBoxRounded
          height={`h-[450px] mobile:h-[420px] sm:h-[500px] tab:h-[580px]`}
          image={WomanMobile}
          title={`Maintain clear cap table and pricing control over liquidity events`}
          details={`With a Forge programmed liquidity solution, the company leadership has full control—the company can decide who buys the shares, for how much and at what price.`}
        />
        <ImageBoxRounded
          height={`h-[400px] mobile:h-[370px] sm:h-[500px] tab:h-[580px]`}
          image={Team}
          title={`Fulfill investor demand for liquidity`}
          details={`Provide a mechanism for company leadership to provide liquidity and satisfy additional investor demand without dilution.`}
        />
      </div>
    </SectionLayout>
  );
}

export default Benifits;
