import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import WhyForge1 from "../../assets/WhyForge1.png";
import WhyForge2 from "../../assets/WhyForge2.png";
import WhyForge3 from "../../assets/WhyForge3.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import SmallHeading from "../../components/SmallHeading";

const tabs = [
  {
    name: "Visibility",
    title: "A more transparent market",
    image: WhyForge1,
    buttonText: "Browse Companies",
    content:
      "A data-driven, market-based approach provides accurate and timely pricing information that’s vital for investors, shareholders and institutions.",
  },
  {
    name: "Insights",
    title: "Track performance and stay informed",
    image: WhyForge2,
    buttonText: "Read Now",
    content:
      "The monthly Private Market Update delivers an insightful roundup of trends and takeaways  in private company investment.",
  },
  {
    name: "Confidence",
    title: "Where the private market is public",
    image: WhyForge3,
    buttonText: "Learn More",
    content:
      "As the first private stock trading platform to be listed on the New York Stock Exchange, Forge makes it possible to invest within a proven and regulated marketplace.",
  },
];

export default function WhyForge() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <SectionLayout
      bg={`bg-backgroundPrimaryDark`}
      bgDark={`bg-backgroundPrimaryDark`}
    >
      <div className="">
        <div className="w-full flex flex-col sm:flex-row tab:items-center justify-center gap-5 sm:gap-0 sm:justify-between">
          <Heading
            align={`text-center sm:text-left`}
            textColor={`text-primary`}
            font={`font-clash`}
            extraClass={`tab:w-[25%]`}
          >
            Why Forge
          </Heading>
          <div className="flex items-center gap-7 justify-center sm:justify-normal">
            {tabs.map((tab, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`pb-2 border border-borderPrimary transition-all duration-300 relative cursor-pointer py-2 px-2.5 tab:py-3 tab:px-4 rounded-[10px] text-center ${activeTab === idx ? "bg-[radial-gradient(ellipse_100.00%_44.84%_at_50.00%_100.00%,_rgba(255,_233.75,_0,_0.15)_0%,_rgba(255,_234,_0,_0.02)_100%)]" : "bg-transparent"} hover:bg-[radial-gradient(ellipse_100.00%_44.84%_at_50.00%_100.00%,_rgba(255,_233.75,_0,_0.35)_0%,_rgba(255,_234,_0,_0.02)_100%)]`}
              >
                <Text
                  textColor={`text-textHeadingDark`}
                  fontWeight={`${activeTab === idx ? "font-bold" : "font-medium"}`}
                >
                  {tab.name}
                </Text>
                {activeTab === idx && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary2 rounded-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[50px] flex flex-col-reverse sm:flex-row items-center gqp-5 sm:gap-10 tab:gap-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 sm:mt-0 sm:w-1/2"
            >
              <SubTitle
                textColor={`text-textHeadingDark`}
                extraClass={`pb-[15px]`}
                leading={`leading-normal sm:leading-9 tab:leading-10`}
              >
                {tabs[activeTab].title}
              </SubTitle>
              <Text
                fontWeight={`font-medium`}
                textColor={`text-white`}
                textColorDark={`text-white`}
                extraClass={`pb-7`}
              >
                {tabs[activeTab].content}
              </Text>
              <PrimaryButton rightIcon={true}>
                {tabs[activeTab].buttonText}
              </PrimaryButton>
            </motion.div>
          </AnimatePresence>
          <div className="bg-transparent rounded-xl shadow-xl w-full sm:w-1/2 flex items-center justify-center">
            <img
              src={tabs[activeTab].image}
              alt="tab image"
              className=" h-full"
            />
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
