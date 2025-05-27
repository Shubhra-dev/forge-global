import { GoArrowRight } from "react-icons/go";
import Heading from "../../components/Heading";
import PrimaryButton from "../../components/PrimaryButton";
import SmallHeading from "../../components/SmallHeading";
import Text from "../../components/Text";

function ForgeProHero() {
  return (
    <div className="pt-[65px] h-[600px] relative sm:h-[550px] w-full bg-backgroundPrimary dark:bg-backgroundDarkGeneral flex items-center">
      <div className="m-auto max-w-content w-full z-20">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto z-20">
          <Heading align={`text-left`} font={`font-clash`}>
            Institutional trading meets private market investing
          </Heading>
          <SmallHeading extraClass={`pt-2.5 tab:w-5/6`} align={`text-left`}>
            Now more than ever, companies need to stay attuned to the needs of
            their employees. With Forge Private Company Solutions, you can offer
            liquidity options that work for your employees and for your
            long-term approach for retaining the best talent.
          </SmallHeading>
          <div className="pt-10 pb-5">
            <PrimaryButton>Let's Talk</PrimaryButton>
          </div>
          <div className="flex items-center justify- gap-1">
            <Text fontWeight={`font-medium`}>
              Already have a Forge Pro account?
            </Text>
            <div className="flex items-center justify-normal group cursor-pointer">
              <Text
                fontWeight={`font-medium`}
                textColor={`text-primary group-hover:text-secondary2`}
              >
                Log in
              </Text>
              <GoArrowRight className="text-primary group-hover:text-secondary2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgeProHero;
