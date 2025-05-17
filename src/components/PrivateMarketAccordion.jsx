import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import SliderImage from "../assets/SliderImage.png";
import PrimaryButton from "./PrimaryButton";
import SmallHeading from "./SmallHeading";

const accordionData = [
  "Trade Management",
  "Price discovery data",
  "Private market analytics",
  "Firmographic data",
  "Risk and compliance",
];

const AccordionContent = () => (
  <motion.div
    key="content"
    initial={{ height: 0, opacity: 0 }}
    animate={{ height: "auto", opacity: 1 }}
    exit={{ height: 0, opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="overflow-hidden bg-backgroundBronzeLight dark:bg-backgroundBronzeLightDark p-4 rounded-b-xl"
  >
    <div className="w-4/5 m-auto">
      <img
        src={SliderImage}
        alt="Trade Management"
        className="w-full m-auto h-auto rounded-md mb-4"
      />
      <ul className="py-4 list-disc list-inside text-textParagraph font-workSans dark:text-textParagraphDark text-base">
        <li>
          Submit bid/ask indications of interest for private company shares
        </li>
        <li>Visualize where your bid/ask sits in the order book</li>
        <li>Specify common vs. preferred, direct/SPV, and more</li>
        <li>Track trade status and execute transaction documents</li>
      </ul>
      <div className="pt-4 w-max m-auto">
        <PrimaryButton>Connect With a Specialist</PrimaryButton>
      </div>
    </div>
  </motion.div>
);

export default function PrivateMarketAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto space-y-5 tab:hidden">
      {accordionData.map((title, index) => (
        <div key={title} className="rounded-xl overflow-hidden shadow border">
          <button
            className={`w-full flex justify-normal gap-4 items-center px-5 py-3 text-white font-semibold ${openIndex === index ? "bg-backgroundBronzeLight dark:bg-backgroundBronzeLightDark" : "bg-primary"} transition-colors`}
            onClick={() => toggleAccordion(index)}
          >
            {openIndex === index ? (
              <FaChevronUp className="text-textHeading dark:text-textHeadingDark" />
            ) : (
              <FaChevronDown className="text-textHeading dark:text-textHeadingDark" />
            )}
            <SmallHeading fontWeight={`font-semibold`}>{title}</SmallHeading>
          </button>

          <AnimatePresence initial={false}>
            {openIndex === index && <AccordionContent />}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
