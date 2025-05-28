import { GoArrowRight } from "react-icons/go";
import Heading from "../../components/Heading";
import PrimaryButton from "../../components/PrimaryButton";
import SmallHeading from "../../components/SmallHeading";
import ForPriHeroBg from "../../assets/ForPriHeroBg.jpg";
import ForgePrice from "../../assets/ForgePrice.png";

function ForgePriceHero() {
  return (
    <div
      className="pt-[65px] h-[450px] relative sm:h-[550px] w-full bg-backgroundPrimary dark:bg-backgroundDarkGeneral bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: `url(${ForPriHeroBg})` }}
    >
      <div className="m-auto max-w-content w-full">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto flex items-center justify-between">
          <div className="w-full tab:w-[40%]">
            <Heading
              align={`text-center sm:text-left`}
              textColor={`text-textHeadingDark`}
              font={`font-clash w-full sm:w-[70%] tab:w-full`}
            >
              A clear vantage point in private market pricing
            </Heading>
            <SmallHeading
              textColor={`text-textHeadingDark`}
              extraClass={`pt-2.5`}
              align={`text-center text-left`}
            >
              Forge Price™ is a new standard in achieving greater pricing
              transparency to the private market.
            </SmallHeading>
            <div className="pt-10 pb-5 w-max m-auto sm:m-0">
              <PrimaryButton>Connect With Our Experts</PrimaryButton>
            </div>
          </div>
          <img
            src={ForgePrice}
            alt="force price"
            className="w-[50%] tab:w-[55%] hidden tab:block"
          />
        </div>
      </div>
    </div>
  );
}

export default ForgePriceHero;
