import { useEffect, useState } from "react";
import SectionLayout from "./SectionLayout";
import Heading from "../components/Heading";
import SmallHeading from "../components/SmallHeading";
import PrimaryButton from "../components/PrimaryButton";
import BigText from "../components/BigText";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import Text from "../components/Text";
import { getPageFaqs } from "../services/faqs";

export default function FAQSection({ title, subTitle }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [faqs, setFaqs] = useState([]);
  useEffect(() => {
    const fetchFaq = async () => {
      setIsLoading(true);
      try {
        const data = await getPageFaqs(`landing_page`);
        setFaqs(data.result.faqs);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFaq();
  }, []);

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
        {isLoading && (
          <div className="w-full sm:w-[73%] tab:w-[65%] flex flex-col gap-4">
            <Text> Loading.. </Text>
          </div>
        )}
        {!isLoading && isError && (
          <div className="w-full sm:w-[73%] tab:w-[65%] flex flex-col gap-4">
            <Text>Something went wrong!!</Text>
          </div>
        )}
        {!isError && !isLoading && (
          <div className="w-full sm:w-[73%] tab:w-[65%] flex flex-col gap-4">
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
        )}
      </div>
    </SectionLayout>
  );
}
