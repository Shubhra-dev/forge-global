import { useState } from "react";
import SectionLayout from "./SectionLayout";
import Heading from "../components/Heading";
import SmallHeading from "../components/SmallHeading";
import PrimaryButton from "../components/PrimaryButton";
import BigText from "../components/BigText";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import Text from "../components/Text";

const faqs = [
  {
    question: "Question text goes here",
    answer:
      "Description: Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae. Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae. Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae.",
  },
  {
    question: "Question text goes here",
    answer:
      "Description: Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae. Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae. Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae.",
  },
  {
    question: "Question text goes here",
    answer:
      "Description: Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae. Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae. Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae.",
  },
  {
    question: "Question text goes here",
    answer:
      "Description: Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae. Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae. Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae.",
  },
  {
    question: "Question text goes here",
    answer:
      "Description: Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae. Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae. Lorem ipsum dolor sit amet consectetur. Nunc vivamus pellentesque etiam vitae.",
  },
];

export default function FAQSection({ title, subTitle }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionLayout>
      <div className="text-white flex flex-col md:flex-row gap-3 sm:gap-0 items-start justify-between">
        {/* Left Column */}
        <div className="w-full sm:w-[25%] tab:w-[30%]">
          <Heading align={`text-center sm:text-left`} font={`font-clash`}>
            {title ? title : "FAQs"}
          </Heading>
          <SmallHeading
            extraClass={`pt-4 pb-7`}
            align={`text-center sm:text-left`}
          >
            {subTitle
              ? subTitle
              : "Learn more about the private market on Forge. Explore the FAQs."}
          </SmallHeading>
          <div className={`w-max m-auto sm:m-0`}>
            <PrimaryButton>Contact</PrimaryButton>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full sm:w-[73%] tab:w-[65%] flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              onClick={() => toggleFAQ(index)}
              key={index}
              className={`border-b border-borderPrimary dark:border-borderPrimaryDark transition-all duration-300 py-5 tab:py-7 px-4 tab:px-5 ${
                activeIndex === index
                  ? "bg-backgroundPrimary dark:bg-backgroundPrimaryDark"
                  : ""
              }`}
            >
              <button className="w-full flex justify-between items-center py-4 text-left focus:outline-none">
                <BigText>{faq.question}</BigText>
                <span className="text-orange-400">
                  {activeIndex === index ? (
                    <IoCaretUpOutline className="text-2xl text-primary" />
                  ) : (
                    <IoCaretDownOutline className="text-2xl text-primary" />
                  )}
                </span>
              </button>
              <div
                className={`text-gray-400 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <Text>{faq.answer}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
