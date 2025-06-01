import Heading from "../../components/Heading";
import SectionLayout from "../../ui/SectionLayout";
import SectorAnalysis from "../../assets/SectorAnalysis.png";
import ExitScenario from "../../assets/ExitScenario.png";
import SameDay from "../../assets/SameDay.png";
import ExtraSmallText from "../../components/ExtraSmallText";
import { useState, useEffect, useCallback } from "react";
function RecencyTabSlider() {
  const [activeTab, setActiveTab] = useState(1);
  const [autoSlide, setAutoSlide] = useState(true);

  // Define tab names for cleaner code
  const tabs = [
    { id: 1, label: "Same-day pricing data on private market trades" },
    {
      id: 2,
      label: "Exit scenario planning with proprietary waterfall charts",
    },
    { id: 3, label: "Sector analysis tools" },
  ];

  // Handle tab change with manual control
  const changeTab = useCallback((tabId) => {
    setActiveTab(tabId);
    // Reset auto-slide timer when user interacts
    setAutoSlide(true);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev % 3) + 1); // Cycle through 1,2,3
    }, 3000); // Change tab every 5 seconds

    return () => clearInterval(interval);
  }, [autoSlide]);

  // Pause auto-slide on hover
  const pauseSlider = () => setAutoSlide(false);
  const resumeSlider = () => setAutoSlide(true);

  return (
    <SectionLayout bg={`bg-backgroundDark`}>
      <Heading font={`font-clash`} textColor={`text-textHeadingDark`}>
        Recency, accuracy, and innovation
      </Heading>

      <div
        className="pt-10"
        onMouseEnter={pauseSlider}
        onMouseLeave={resumeSlider}
      >
        <img
          src={
            activeTab === 1
              ? SameDay
              : activeTab === 2
                ? ExitScenario
                : SectorAnalysis
          }
          alt="tab image"
          className="w-full h-[180px] sm:h-[300px] tab:h-[450px] object-cover object-center transform transition-all duration-500 ease-in-out"
        />
        <ExtraSmallText textColor={`text-textParagraph`} extraClass={`pt-5`}>
          Images displayed are not current and any securities are shown for
          illustrative purposes only
        </ExtraSmallText>
      </div>

      <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => changeTab(tab.id)}
            className={`sm:h-24 tab:h-16 rounded-xl w-full sm:w-1/3 font-medium py-2.5 px-4 text-center transform transition-all duration-500 ease-in-out ${
              activeTab === tab.id
                ? "bg-secondary2 text-textHeading scale-[1.02]"
                : "bg-textParagraph text-white hover:bg-opacity-80"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </SectionLayout>
  );
}

export default RecencyTabSlider;
