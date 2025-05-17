import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SliderImage from "../assets/SliderImage.png";
import SubHeading from "./SubHeading";
import Text from "./Text";
import PrimaryButton from "./PrimaryButton";

const tabs = [
  "Trade Management",
  "Price Discovery Data",
  "Private Market Analysis",
  "Firmographic Data",
  "Risk and Compliance",
];

const contentMap = {
  "Trade Management": {
    title: "Trade management",
    points: [
      "Submit bid/ask indications of interest for private company shares",
      "Visualize where your bid/ask sits in the order book",
      "Specify common vs. preferred, direct/SPV, and more",
      "Track trade status and execute transaction documents",
    ],
  },
  "Price Discovery Data": {
    title: "Price Discovery Data",
    points: [
      "Access historical trading data for private shares",
      "Gauge market sentiment through bid/ask spreads",
    ],
  },
  "Private Market Analysis": {
    title: "Private Market Analysis",
    points: [
      "Track market trends across private equity segments",
      "Analyze buyer/seller momentum in niche sectors",
    ],
  },
  "Firmographic Data": {
    title: "Firmographic Data",
    points: [
      "View company metrics like employee size, funding, and growth",
      "Compare firms within a specific investment category",
    ],
  },
  "Risk and Compliance": {
    title: "Risk and Compliance",
    points: [
      "Ensure transactions meet legal standards",
      "Monitor compliance for investor and company profiles",
    ],
  },
};

export default function PrivateMarketPanel() {
  const [activeTab, setActiveTab] = useState("Trade Management");

  return (
    <div className="hidden tab:flex items-start w-full bg-transparent justify-normal gap-10 h-[310px]">
      {/* Left Sidebar */}
      <div className="w-1/4 h-full bg-white dark:bg-transparent flex flex-col justify-between">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`w-full rounded-xl px-5 py-2.5 text-center border border-borderPrimary ${
              activeTab === tab
                ? "bg-secondary2 text-black shadow font-bold"
                : "bg-borderPrimary/20 dark:bg-transparent text-textParagraph dark:text-textParagraphDark hover:bg-secondary2/50 font-medium"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Right Content */}
      <div className="overflow-hidden h-full w-3/4 p-5 rounded-3xl bg-backgroundBronzeLight dark:bg-backgroundBronzeLightDark">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <div className="flex items-center gap-4 w-full h-full">
              <div className="w-1/2 h-full">
                <img
                  src={SliderImage}
                  alt="graph"
                  className="w-full h-full object-fit rounded-xl"
                />
              </div>

              <div className="w-1/2">
                <SubHeading extraClass={"pb-3"}>
                  {contentMap[activeTab].title}
                </SubHeading>
                <ul className="list-disc list-inside text-base font-normal font-workSans text-textParagraph dark:text-textParagraphDark leading-tight">
                  <li>
                    Submit bid/ask indications of interest for private company
                    shares
                  </li>
                  <li>Visualize where your bid/ask sits in the order book</li>
                  <li>Specify common vs. preferred, direct/SPV, and more</li>
                  <li>Track trade status and execute transaction documents</li>
                </ul>
                <div className="pt-5">
                  <PrimaryButton>Connect With a Specialist</PrimaryButton>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
