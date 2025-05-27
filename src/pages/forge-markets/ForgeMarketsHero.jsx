import Heading from "../../components/Heading";
import PrimaryButton from "../../components/PrimaryButton";
import SmallHeading from "../../components/SmallHeading";
import { useEffect, useState } from "react";
import CompanyCards2 from "../../components/CompanyCards2";

function ForgeMarketsHero() {
  const totalItems = 8;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [totalItems]);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };
  return (
    <div className="pt-[65px] h-auto relative sm:h-[550px] w-full bg-backgroundPrimary dark:bg-backgroundDarkGeneral flex items-center">
      <div className="m-auto max-w-content w-full">
        <div className="px-4 smLap:px-0 smLap:w-10/12 laptop:w-9/12 m-auto my-auto flex flex-col sm:flex-row items-center justify-normal gap-10">
          <div className="w-full sm:w-[65%] tab:w-3/4">
            <Heading align={`text-center sm:text-left`} font={`font-clash`}>
              Your key to the private market
            </Heading>
            <SmallHeading
              extraClass={`pt-2.5`}
              align={`text-center sm:text-left`}
            >
              Around the world, thousands of private companies have created
              technologies that have changed the way we live and work. As
              today's startups pursue the moonshots of tomorrow, access to
              private capital fuels their journeys. Forge’s private stock
              trading platform provides accredited investors with access to this
              multi-trillion dollar asset class.
            </SmallHeading>
            <div className="pt-10 w-max m-auto sm:m-0">
              <PrimaryButton>Start Trading Today</PrimaryButton>
            </div>
          </div>
          <div className="w-full sm:w-[35%] tab:w-1/4">
            <div className={`w-full relative overflow-hidden`}>
              {/* Slider track */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {Array.from({ length: totalItems }).map((_, idx) => (
                  <div
                    key={idx}
                    className="w-full flex-shrink-0 px-4 py-6 cursor-pointer"
                  >
                    <CompanyCards2 />
                  </div>
                ))}
              </div>

              {/* Prev button */}
              <button
                onClick={prev}
                className="absolute top-1/2 left-0 -translate-y-1/2 text-textHeading dark:text-textHeadingDark p-2 rounded-full"
              >
                ◀
              </button>

              {/* Next button */}
              <button
                onClick={next}
                className="absolute top-1/2 right-0 -translate-y-1/2 text-textHeading dark:text-textHeadingDark p-2 rounded-full"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgeMarketsHero;
