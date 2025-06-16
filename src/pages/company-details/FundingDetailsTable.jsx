import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import SmallHeading from "../../components/SmallHeading";
import ExtraSmallText from "../../components/ExtraSmallText";
import SmallText from "../../components/SmallText";

const fundingRounds = [
  {
    fundingDate: "12/23/2024",
    shareClass: "Series C",
    amountRaised: "$6B",
    pricePerShare: "--",
    postMoneyValuation: "$50B",
    keyInvestors:
      "Andreessen Horowitz, Blackrock, Fidelity, Kingdom Holdings, Lightspeed Venture Partners",
    details: {
      pricePerShare: "--",
      shareOutstanding: "277,140,000",
      liquidationPrefOrder: "1",
      liquidationPrefMultiplier: "1.0x",
      conversionRatio: "1.0x",
      dividendRate: "5.0%",
      cumulative: "Non-cumulative",
      participating: "Non-participating",
      participationCap: "--",
    },
  },
  {
    fundingDate: "05/26/2024",
    shareClass: "Series B",
    amountRaised: "$6B",
    pricePerShare: "--",
    postMoneyValuation: "$24B",
    details: {
      pricePerShare: "--",
      shareOutstanding: "277,140,000",
      liquidationPrefOrder: "1",
      liquidationPrefMultiplier: "1.0x",
      conversionRatio: "1.0x",
      dividendRate: "5.0%",
      cumulative: "Non-cumulative",
      participating: "Non-participating",
      participationCap: "--",
    },
    keyInvestors:
      "Andreessen Horowitz, Fidelity, Kingdom Holdings, Prince Alwaleed Bin Talal, Sequoia Capital",
  },
  {
    fundingDate: "11/29/2023",
    shareClass: "Series A-1",
    amountRaised: "$67.34MM",
    pricePerShare: "--",
    postMoneyValuation: "$673.4MM",
    keyInvestors: "Undisclosed Investors",
    details: {
      pricePerShare: "--",
      shareOutstanding: "277,140,000",
      liquidationPrefOrder: "1",
      liquidationPrefMultiplier: "1.0x",
      conversionRatio: "1.0x",
      dividendRate: "5.0%",
      cumulative: "Non-cumulative",
      participating: "Non-participating",
      participationCap: "--",
    },
  },
  {
    fundingDate: "11/29/2023",
    shareClass: "Series A",
    amountRaised: "$67.34MM",
    pricePerShare: "--",
    postMoneyValuation: "$673.4MM",
    keyInvestors: "Undisclosed Investors",
    details: {
      pricePerShare: "--",
      shareOutstanding: "277,140,000",
      liquidationPrefOrder: "1",
      liquidationPrefMultiplier: "1.0x",
      conversionRatio: "1.0x",
      dividendRate: "5.0%",
      cumulative: "Non-cumulative",
      participating: "Non-participating",
      participationCap: "--",
    },
  },
];

const FundingDetailsTable = ({ fundingRoundDetails }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleRow = (index) =>
    setExpandedIndex((prev) => (prev === index ? null : index));

  return (
    <div className="rounded-xl mt-5">
      <SmallHeading fontWeight={`font-bold`} extraClass={`pb-[15px]`}>
        Funding round details
      </SmallHeading>
      <div className="overflow-x-scroll sm:overflow-x-auto">
        <table className="min-w-full border text-sm ">
          <thead className=" text-left">
            <tr className="text-xs text-textParagraph dark:text-textSubTitleDark">
              <th className="py-2 px-2.5 border">Funding Date</th>
              <th className="py-2 px-2.5 border">Share Class</th>
              <th className="py-2 px-2.5 border">Amount Raised</th>
              <th className="py-2 px-2.5 border">Price per Share</th>
              <th className="py-2 px-2.5 border">Post-Money Valuation</th>
              <th className="py-2 px-2.5 border">Key Investors</th>
            </tr>
          </thead>
          <tbody>
            {fundingRoundDetails.map((round, index) => (
              <React.Fragment key={index}>
                <tr
                  onClick={() => toggleRow(index)}
                  className="cursor-pointer text-sm font-medium text-textParagraph dark:text-textSubTitleDark"
                >
                  <td className="px-2 py-3 border">
                    <div className="flex items-center justify-normal gap-1">
                      {expandedIndex === index ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      )}
                      {round.funding_date}
                    </div>
                  </td>
                  <td className="px-2 py-3 border">{round.share_class}</td>
                  <td className="px-2 py-3 border">{round.amount_raised}</td>
                  <td className="px-2 py-3 border">{round.price_per_share}</td>
                  <td className="px-2 py-3 border">
                    {round.post_money_valuation}
                  </td>
                  <td className="px-2 py-3 border">
                    {round.key_investors
                      ? round.key_investors
                      : "Undisclosed Investors"}
                  </td>
                </tr>

                {expandedIndex === index && (
                  <tr className="">
                    <td
                      colSpan={7}
                      className="p-4 border-t text-sm text-gray-700"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="pb-[15px]">
                            <ExtraSmallText
                              textColor={`text-textParagraph`}
                              extraClass={`pb-1`}
                              fontWeight={`font-normal`}
                            >
                              Price per Share:
                            </ExtraSmallText>
                            <SmallText
                              fontWeight={`font-medium`}
                              leading={`leading-none`}
                            >
                              {round.price_per_share}
                            </SmallText>
                          </div>
                          <div className="pb-[15px]">
                            <ExtraSmallText
                              textColor={`text-textParagraph`}
                              extraClass={`pb-1`}
                              fontWeight={`font-normal`}
                            >
                              Share outstanding:
                            </ExtraSmallText>
                            <SmallText
                              fontWeight={`font-medium`}
                              leading={`leading-none`}
                            >
                              {round.shares_outstanding}
                            </SmallText>
                          </div>
                        </div>
                        <div>
                          <div className="pb-[15px]">
                            <ExtraSmallText
                              textColor={`text-textParagraph`}
                              extraClass={`pb-1`}
                              fontWeight={`font-normal`}
                            >
                              Liquidation Pref Order:
                            </ExtraSmallText>
                            <SmallText
                              fontWeight={`font-medium`}
                              leading={`leading-none`}
                            >
                              {round.liquidation_pref_order}
                            </SmallText>
                          </div>
                          <div className="pb-[15px]">
                            <ExtraSmallText
                              textColor={`text-textParagraph`}
                              extraClass={`pb-1`}
                              fontWeight={`font-normal`}
                            >
                              Liquidation Pref As Multiplier:
                            </ExtraSmallText>
                            <SmallText
                              fontWeight={`font-medium`}
                              leading={`leading-none`}
                            >
                              {round.liquidation_pref_multiple}
                            </SmallText>
                          </div>
                          <div className="pb-[15px]">
                            <ExtraSmallText
                              textColor={`text-textParagraph`}
                              extraClass={`pb-1`}
                              fontWeight={`font-normal`}
                            >
                              Conversion Ratio:
                            </ExtraSmallText>
                            <SmallText
                              fontWeight={`font-medium`}
                              leading={`leading-none`}
                            >
                              {round.conversion_ratio}
                            </SmallText>
                          </div>
                        </div>
                        <div>
                          <div className="pb-[15px]">
                            <ExtraSmallText
                              textColor={`text-textParagraph`}
                              extraClass={`pb-1`}
                              fontWeight={`font-normal`}
                            >
                              Dividend Rate:
                            </ExtraSmallText>
                            <SmallText
                              fontWeight={`font-medium`}
                              leading={`leading-none`}
                            >
                              {round.dividend_rate}
                            </SmallText>
                          </div>
                          <div className="pb-[15px]">
                            <ExtraSmallText
                              textColor={`text-textParagraph`}
                              extraClass={`pb-1`}
                              fontWeight={`font-normal`}
                            >
                              Cumulative:
                            </ExtraSmallText>
                            <SmallText
                              fontWeight={`font-medium`}
                              leading={`leading-none`}
                            >
                              {round.cumulative}
                            </SmallText>
                          </div>
                          <div className="pb-[15px]">
                            <ExtraSmallText
                              textColor={`text-textParagraph`}
                              extraClass={`pb-1`}
                              fontWeight={`font-normal`}
                            >
                              Participating:
                            </ExtraSmallText>
                            <SmallText
                              fontWeight={`font-medium`}
                              leading={`leading-none`}
                            >
                              {round.participating}
                            </SmallText>
                          </div>
                          <div className="pb-[15px]">
                            <ExtraSmallText
                              textColor={`text-textParagraph`}
                              extraClass={`pb-1`}
                              fontWeight={`font-normal`}
                            >
                              Participation Cap:
                            </ExtraSmallText>
                            <SmallText
                              fontWeight={`font-medium`}
                              leading={`leading-none`}
                            >
                              {round.participation_cap === ""
                                ? "--"
                                : round.participation_cap}
                            </SmallText>
                          </div>
                        </div>

                        <div className="w-[25%]">
                          <div className="pb-[15px]">
                            <ExtraSmallText
                              textColor={`text-textParagraph`}
                              extraClass={`pb-1`}
                              fontWeight={`font-normal`}
                            >
                              Key Investorss:
                            </ExtraSmallText>
                            <SmallText
                              fontWeight={`font-medium`}
                              leading={`leading-1`}
                            >
                              {round.key_investors
                                ? round.key_investors
                                : "Undisclosed Investors"}
                            </SmallText>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FundingDetailsTable;
