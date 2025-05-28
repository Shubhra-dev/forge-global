import BroComHeroBg from "../../assets/BroComHeroBg.png";
import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";

function BrowseComapniesHero() {
  return (
    <div className="pt-[65px] relative sm:h-[450px] w-full bg-backgroundPrimary dark:bg-backgroundDarkGeneral flex items-center">
      <div className="m-auto max-w-content w-full">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-10">
          <div className="w-full sm:w-1/2">
            <SubTitle align={`text-center sm:text-left`}>
              Browse companies
            </SubTitle>
            <Text extraClass={`pt-2`} align={`text-center sm:text-left`}>
              View market price history, news, financings and cap table
              information and select valuation inputs to track their value over
              time.
            </Text>
          </div>
          <img
            src={BroComHeroBg}
            alt="side image"
            className="sm:h-76 w-full sm:w-[45%]"
          />
        </div>
      </div>
    </div>
  );
}

export default BrowseComapniesHero;
