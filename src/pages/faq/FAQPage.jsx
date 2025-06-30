import { useState } from "react";
import SmallHeading from "../../components/SmallHeading";
import SubTitle from "../../components/SubTitle";
import Title from "../../components/Title";
import SectionLayout from "../../ui/SectionLayout";
import BigText from "../../components/BigText";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import Text from "../../components/Text";

function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faqs, setFaqs] = useState([
    { question: `Question 1?`, answer: `Answer 1` },
    { question: `Question 2?`, answer: `Answer 2` },
    { question: `Question 3?`, answer: `Answer 3` },
  ]);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  function handleClick(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <>
      <SectionLayout
        padding={`pt-24 pb-12 sm:pt-16 sm:pb-16 tab:pt-32 tab:pb-14`}
      >
        <SmallHeading extraClass={`mb-[15px]`}>FAQs</SmallHeading>
        <Title align={`text-center sm:text-left`} fontWeight={`font-medium`}>
          What can we <span className="text-primary font-semibold">help</span>{" "}
          you with?
        </Title>
        <div className="mt-10 flex flex-col sm:flex-row items-start justify-normal gap-8 tab:gap-10">
          <div className="p-3 tab:p-5 w-full sm:w-[30%] tab:w-1/4 rounded-md bg-backgroundPrimary dark:bg-backgroundPrimaryDark">
            <SmallHeading extraClass={`mb-10 uppercase`} align={`text-center`}>
              BROWSE BY CATEGORY
            </SmallHeading>
            <div className="flex flex-wrap sm:flex-nowrap sm:block gap-2 sm:gap-0 sm:space-y-[15px]">
              <button
                onClick={() => handleClick(`forge_overview`)}
                className="w-[48%] sm:w-full hover:font-semibold hover:shadow-xl trasition-all duration-300 px-5 py-2.5 rounded-md border dark:bg-backgroundDark dark:text-textSubheadingDark border-borderPrimary text-center"
              >
                Forge Overview
              </button>
              <button
                onClick={() => handleClick(`account`)}
                className="w-[48%] sm:w-full hover:font-semibold hover:shadow-xl trasition-all duration-300 px-5 py-2.5 rounded-md border dark:bg-backgroundDark dark:text-textSubheadingDark border-borderPrimary text-center"
              >
                Account
              </button>
              <button
                onClick={() => handleClick(`private_market`)}
                className="w-[48%] sm:w-full hover:font-semibold hover:shadow-xl trasition-all duration-300 px-5 py-2.5 rounded-md border dark:bg-backgroundDark dark:text-textSubheadingDark border-borderPrimary text-center"
              >
                Private Market
              </button>
            </div>
          </div>
          <div className="w-full sm:w-[70%] tab:w-3/4">
            <div
              id="forge_overview"
              className="w-full p-5 tab:p-7 rounded-[20px] border border-borderPrimary"
            >
              <SubTitle>Forge Overview</SubTitle>
              <div className="w-full flex flex-col gap-4">
                {faqs.map((faq, index) => (
                  <div
                    onClick={() => toggleFAQ(index)}
                    key={index}
                    className={`border-b border-borderPrimary dark:border-borderPrimaryDark transition-all duration-300 py-4 tab:py-5 px-4 tab:px-5 ${
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
            <div
              id="account"
              className="w-full p-5 tab:p-7 rounded-[20px] border border-borderPrimary mt-10"
            >
              <SubTitle>Account</SubTitle>
              <div className="w-full flex flex-col gap-4">
                {faqs.map((faq, index) => (
                  <div
                    onClick={() => toggleFAQ(index)}
                    key={index}
                    className={`border-b border-borderPrimary dark:border-borderPrimaryDark transition-all duration-300 py-4 tab:py-5 px-4 tab:px-5 ${
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
            <div
              id="private_market"
              className="w-full p-5 tab:p-7 rounded-[20px] border border-borderPrimary mt-10"
            >
              <SubTitle>Private Market</SubTitle>
              <div className="w-full flex flex-col gap-4">
                {faqs.map((faq, index) => (
                  <div
                    onClick={() => toggleFAQ(index)}
                    key={index}
                    className={`border-b border-borderPrimary dark:border-borderPrimaryDark transition-all duration-300 py-4 tab:py-5 px-4 tab:px-5 ${
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
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default FAQPage;
