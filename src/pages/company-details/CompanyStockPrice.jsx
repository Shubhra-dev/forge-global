import { useState } from "react";
import SmallText from "../../components/SmallText";
import SectionLayout from "../../ui/SectionLayout";
import StockPriceChart from "./StockPriceChart";
import PrimaryButton from "../../components/PrimaryButton";
import comapnyData from "../browse-companies/companyData";
function CompanyStockPrice({ companyData }) {
  const [activeSection, setActiveSection] = useState(1);
  function handleClick(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <SectionLayout id={`forge-price`}>
      <div className="flex items-center justify-start gap-4 border-b w-full overflow-x-auto whitespace-nowrap scroll-smooth no-scrollbar">
        {[
          { section: "forge-price", name: "Forge Price" },
          { section: "financing", name: "Financings and valuations" },
          { section: "company-details", name: "Company details" },
          { section: "faq", name: "FAQ’s" },
          { section: "major-investor", name: "Major investors" },
          { section: "leadership", name: "Leadership" },
          { section: "stock-news", name: "Stock news" },
          { section: "similar-companies", name: "Similar Companiess" },
          { section: "why-forge", name: "Why Forge" },
        ].map((item, index) => {
          const id = index + 1;
          const isActive = activeSection === id;
          return (
            <SmallText
              key={id}
              fontWeight={isActive ? "font-medium" : "font-normal"}
              textColor={isActive ? "text-textHeading" : "text-textParagraph"}
              extraClass={`cursor-pointer w-max py-2 ${
                isActive ? "border-b border-b-primary" : ""
              }`}
              onClick={() => handleClick(item.section)}
            >
              {item.name}
            </SmallText>
          );
        })}
      </div>
      <StockPriceChart companyData={companyData} />
      <div className="py-5 flex flex-col sm:flex-row gap-5 items-start justify-between">
        <div className="w-full sm:w-1/3">
          <SmallText
            fontWeight={`font-medium`}
            textColor={`text-textHeading`}
            extraClass={`w-full border-b border-b-borderPrimary py-2.5`}
          >
            Forge Price¹
          </SmallText>
          <div className="w-full border-b border-b-borderPrimary py-2.5 flex justify-between">
            <SmallText>Date</SmallText>
            <SmallText
              fontWeight={`font-medium`}
              textColor={`text-textHeading`}
            >
              {companyData.forge_price_data.date}
            </SmallText>
          </div>
          <div className="w-full border-b border-b-borderPrimary py-2.5 flex justify-between">
            <SmallText>Price per Share</SmallText>
            <SmallText
              fontWeight={`font-medium`}
              textColor={`text-textHeading`}
            >
              $39.75{" "}
              <span className="text-xs text-green-500 pl-1">
                +$0.01 (0.03%)
              </span>
            </SmallText>
          </div>
          <div className="w-full border-b border-b-borderPrimary py-2.5 flex justify-between">
            <SmallText>Forge Price valuation</SmallText>
            <SmallText
              fontWeight={`font-medium`}
              textColor={`text-textHeading`}
            >
              ${companyData.forge_price_data.forge_price_valuation}
            </SmallText>
          </div>
        </div>
        <div className="w-full sm:w-1/3">
          <SmallText
            fontWeight={`font-medium`}
            textColor={`text-textHeading`}
            extraClass={`w-full border-b border-b-borderPrimary py-2.5`}
          >
            Last Closed Trade²
          </SmallText>
          <div className="w-full border-b border-b-borderPrimary py-2.5 flex justify-between">
            <SmallText>Close Date</SmallText>
            <SmallText
              fontWeight={`font-medium`}
              textColor={`text-textHeading`}
            >
              {companyData.last_closed_trade_data.close_date}
            </SmallText>
          </div>
          <div className="w-full border-b border-b-borderPrimary py-2.5 flex justify-between">
            <SmallText>Last Close Trade Price</SmallText>
            <SmallText
              fontWeight={`font-medium`}
              textColor={`text-textHeading`}
            >
              {companyData.last_closed_trade_data.last_closed_trade_price}
            </SmallText>
          </div>
        </div>
        <div className="w-full sm:w-1/3">
          <SmallText
            fontWeight={`font-medium`}
            textColor={`text-textHeading`}
            extraClass={`w-full border-b border-b-borderPrimary py-2.5`}
          >
            Last Funding Round (LFR)
          </SmallText>
          <div className="w-full border-b border-b-borderPrimary py-2.5 flex justify-between">
            <SmallText>Date</SmallText>
            <SmallText
              fontWeight={`font-medium`}
              textColor={`text-textHeading`}
            >
              {companyData.last_funding_round_data.date}
            </SmallText>
          </div>
          <div className="w-full border-b border-b-borderPrimary py-2.5 flex justify-between">
            <SmallText>Price per Share</SmallText>
            <SmallText
              fontWeight={`font-medium`}
              textColor={`text-textHeading`}
            >
              {companyData.last_funding_round_data.price_per_share}
            </SmallText>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="w-max m-auto">
        <PrimaryButton rounded={`rounded-md`}>Access Stock Price</PrimaryButton>
      </div>
    </SectionLayout>
  );
}

export default CompanyStockPrice;
