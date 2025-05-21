import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import PrimaryButton from "../../components/PrimaryButton";
import ForgePro1 from "../../assets/ForgePro1.png";
import ForgePro2 from "../../assets/ForgePro2.png";
import ForgePro3 from "../../assets/ForgePro3.png";
import ForgePro4 from "../../assets/ForgePro4.png";
import { FaMinus, FaPlus } from "react-icons/fa";
import SmallHeading from "../../components/SmallHeading";

const tabs = [
  {
    name: "Forge Pro",
    image: ForgePro1,
    content:
      "Monitor live secondary market data and conduct transactions using Forge's institutional trading platform.",
  },
  {
    name: "Forge Data",
    image: ForgePro2,
    content:
      "Integrate Forge’s live secondary market data into your preferred analytics platform.",
  },
  {
    name: "Private Market Specialist",
    image: ForgePro3,
    content:
      "Evaluate the market with Forge's experienced team to identify opportunities and execute trades.",
  },
  {
    name: "Forge Accuidity Private Market Index",
    image: ForgePro4,
    content:
      "Learn how qualified purchasers can increase private company portfolio diversification and potential liquidity through exposure to the Forge Accuidity Private Market Index.",
  },
];
const AccordionContent = ({ image, text }) => (
  <motion.div
    key="content"
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="overflow-hidden bg-backgroundPrimaryDark dark:bg-backgroundPrimaryDark p-4 rounded-b-xl"
  >
    <div className="w-full m-auto">
      <img
        src={image}
        alt="Trade Management"
        className="w-full m-auto h-auto rounded-md mb-4"
      />
      <Text
        fontWeight={`font-medium`}
        textColor={`text-white`}
        textColorDark={`text-white`}
        extraClass={`py-7`}
        align={`text-center`}
      >
        {text}
      </Text>
      <div className="pt-4 w-max m-auto">
        <PrimaryButton>Learn More</PrimaryButton>
      </div>
    </div>
  </motion.div>
);

export default function ProductAndSolution() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);
  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <SectionLayout
      bg={`bg-backgroundDark sm:bg-backgroundPrimaryDark`}
      bgDark={`bg-backgroundDark sm:bg-backgroundPrimaryDark`}
    >
      <div className="hidden sm:block">
        <div className="w-full flex flex-col tab:flex-row tab:items-center justify-normal gap-4">
          <Heading
            align={`text-left`}
            textColor={`text-textHeadingDark`}
            font={`font-clash`}
            extraClass={`tab:w-[25%]`}
          >
            Products and <span className="text-primary">solutions</span>
          </Heading>
          <div className="w-full tab:w-[85%] flex items-center justify-normal">
            {tabs.map((tab, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`pb-2 transition-all duration-300 relative cursor-pointer py-2 px-2.5 tab:py-3 tab:px-4 rounded-[10px] text-center ${activeTab === idx ? "bg-[radial-gradient(ellipse_100.00%_44.84%_at_50.00%_100.00%,_rgba(255,_233.75,_0,_0.15)_0%,_rgba(255,_234,_0,_0.02)_100%)]" : "bg-transparent"} hover:bg-[radial-gradient(ellipse_100.00%_44.84%_at_50.00%_100.00%,_rgba(255,_233.75,_0,_0.35)_0%,_rgba(255,_234,_0,_0.02)_100%)]`}
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
        <div className="mt-[50px] flex flex-col sm:flex-row items-center gap-10 tab:gap-14">
          <div className="bg-transparent rounded-xl shadow-xl w-full sm:w-1/2 flex items-center justify-center">
            <img
              src={tabs[activeTab].image}
              alt="tab image"
              className=" h-full"
            />
          </div>

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
              >
                {tabs[activeTab].name}
              </SubTitle>
              <Text
                fontWeight={`font-medium`}
                textColor={`text-white`}
                textColorDark={`text-white`}
                extraClass={`pb-7`}
              >
                {tabs[activeTab].content}
              </Text>
              <PrimaryButton>Learn More</PrimaryButton>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="w-full mx-auto space-y-5 sm:hidden">
        <Heading
          textColor={`text-textHeadingDark`}
          font={`font-clash`}
          extraClass={`tab:w-[25%]`}
        >
          Products and <span className="text-primary">solutions</span>
        </Heading>
        {tabs.map((item, index) => (
          <div key={index} className="rounded-xl overflow-hidden shadow border">
            <button
              className={`w-full flex justify-between gap-4 items-center px-5 py-3 text-white font-semibold ${activeAccordion === index ? "bg-backgroundPrimaryDark dark:bg-backgroundPrimaryDark" : "bg-backgroundPrimaryDark"} transition-colors`}
              onClick={() => toggleAccordion(index)}
            >
              <SmallHeading
                textColor={`text-textHeadingDark`}
                fontWeight={`font-semibold`}
              >
                {item.name}
              </SmallHeading>
              {activeAccordion === index ? (
                <FaMinus className="text-textHeadingDark dark:text-textHeadingDark" />
              ) : (
                <FaPlus className="text-textHeadingDark dark:text-textHeadingDark" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {activeAccordion === index && (
                <AccordionContent image={item.image} text={item.content} />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
