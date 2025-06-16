import { useEffect, useState } from "react";
import SmallHeading from "../../components/SmallHeading";
import SubTitle from "../../components/SubTitle";
import SectionLayout from "../../ui/SectionLayout";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";
import SmallText from "../../components/SmallText";
import { getFAQ } from "../../services/companyDetails";

function CompanyFAQ({ companyName, id }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeIndex2, setActiveIndex2] = useState(null);
  const [faqData, setFaqData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchFaqData = async () => {
      setIsLoading(true);
      try {
        const data = await getFAQ(id);
        setFaqData(data.result);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFaqData();
  }, []);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const toggleFAQ2 = (index) => {
    setActiveIndex2(activeIndex2 === index ? null : index);
  };
  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center py-10">
          <p>Loading...</p>
        </div>
      )}
      {isError && (
        <div className="flex items-center justify-center py-10">
          <p>Sorry! Something is wrong.</p>
        </div>
      )}
      {!isError && !isLoading && (
        <SectionLayout id={`faq`}>
          <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
            {companyName} stock FAQs
          </SubTitle>
          <div className="pt-5 flex flex-col tab:flex-row items-start justify-between gap-7">
            <div className="w-full tab:w-1/2">
              <SmallHeading fontWeight={`font-bold`}>
                To buy and sell {companyName} stock
              </SmallHeading>
              <div className="pt-5">
                {faqData.company_faqs_buy_and_sell.map((faq, index) => (
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
                To learn more about {companyName} stock
              </SmallHeading>
              <div className="pt-5">
                {faqData.company_faqs_learn_more_about.map((faq, index) => (
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
      )}
    </>
  );
}

export default CompanyFAQ;
