import { useState } from "react";
import SectionLayout from "./SectionLayout";
import BigText from "../components/BigText";
import Text from "../components/Text";
import SubTitle from "../components/SubTitle";
import { BiMinus, BiPlus } from "react-icons/bi";

const faqs = [
  {
    question: "Can you sell your private company stock?",
    answer:
      "Yes, selling your private company stock is possible. However, your ability to do so is contingent on your company's specific policy regarding the sale of private stock, as well as finding an interested buyer for your shares who qualifies as an `accredited investor` as defined by FINRA and the SEC. Some companies may allow vested share sales, while others may have restrictions or set specific times for selling. While companies understand their employees' needs for liquidity, such sales could affect the company's valuation and capitalization table. Therefore, any sale of private company shares typically requires approval from the company.",
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

export default function FAQSection2() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionLayout
      bg={`bg-backgroundCream`}
      bgDark={`dark:bg-backgroundCreamDark`}
    >
      <SubTitle align={`text-left`}>
        See what your private company shares can do
      </SubTitle>

      <div className="pt-5 w-full">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`w-full flex flex-col sm:flex-row items-start justify-between border-t border-borderPrimary dark:border-borderPrimaryDark transition-all duration-300 py-4 tab:py-5`}
          >
            <div
              className={`${activeIndex === index ? "w-full sm:w-[45%] tab:w-[40%]" : "w-full"} transition-all duration-300 ease-in-out`}
            >
              <button className="w-full flex justify-normal gap-4 items-center py-4 text-left focus:outline-none">
                <span className="text-orange-400">
                  {activeIndex === index ? (
                    <BiMinus className="text-2xl text-primary" />
                  ) : (
                    <BiPlus className="text-2xl text-primary" />
                  )}
                </span>
                <BigText>{faq.question}</BigText>
              </button>
            </div>
            <div
              className={`text-gray-400 text-sm ${
                activeIndex === index
                  ? "w-full sm:w-[50%] block"
                  : "opacity-0 hidden"
              }`}
            >
              <Text>{faq.answer}</Text>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
