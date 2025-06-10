import { useState } from "react";
import SmallHeading from "../../components/SmallHeading";
import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import SmallText from "../../components/SmallText";
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
function CompanyFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const toggleFAQ2 = (index) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
  };
  return (
    <SectionLayout id={`faq`}>
      <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
        “Company Name” stock FAQs
      </SubTitle>
      <div className="pt-5 flex flex-col tab:flex-row items-start justify-between gap-7">
        <div className="w-full tab:w-1/2">
          <SmallHeading fontWeight={`font-bold`}>
            To buy and sell “Company Name” stock
          </SmallHeading>
          <div className="pt-5">
            {faqs.map((faq, index) => (
              <div
                onClick={() => toggleFAQ(index)}
                key={index}
                className={`border-b border-borderPrimary dark:border-borderPrimaryDark transition-all duration-300 p-2.5 ${
                  activeIndex === index
                    ? "bg-backgroundPrimary dark:bg-backgroundPrimaryDark"
                    : ""
                }`}
              >
                <button className="w-full flex justify-between items-center text-left focus:outline-none">
                  <SmallHeading fontWeight={`font-medium`}>
                    {faq.question}
                  </SmallHeading>
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
                  <SmallText extraClass={`py-1`}>{faq.answer}</SmallText>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full tab:w-1/2">
          <SmallHeading fontWeight={`font-bold`}>
            To learn more about “Company Name” stock
          </SmallHeading>
          <div className="pt-5">
            {faqs.map((faq, index) => (
              <div
                onClick={() => toggleFAQ2(index)}
                key={index}
                className={`border-b border-borderPrimary dark:border-borderPrimaryDark transition-all duration-300 p-2.5 ${
                  activeIndex2 === index
                    ? "bg-backgroundPrimary dark:bg-backgroundPrimaryDark"
                    : ""
                }`}
              >
                <button className="w-full flex justify-between items-center text-left focus:outline-none">
                  <SmallHeading fontWeight={`font-medium`}>
                    {faq.question}
                  </SmallHeading>
                  <span className="text-orange-400">
                    {activeIndex2 === index ? (
                      <IoCaretUpOutline className="text-2xl text-primary" />
                    ) : (
                      <IoCaretDownOutline className="text-2xl text-primary" />
                    )}
                  </span>
                </button>
                <div
                  className={`text-gray-400 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex2 === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <SmallText extraClass={`py-1`}>{faq.answer}</SmallText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default CompanyFAQ;
