import BigText from "../../components/BigText";
function KeyTakeaways() {
  return (
    <div className="py-5 pl-5 pr-5 sm:pr-10 bg-[#F1F2F4] dark:bg-transparent dark:text-textSubheadingDark">
      <BigText fontWeight={`font-semibold`}>Key Takeaways</BigText>
      <ul className="list-disc pl-4 text-xl text-normal pt-2.5 space-y-2">
        <li>
          <span className="font-bold">
            Private market resilience was a contrast to public market
            volatility:
          </span>{" "}
          Despite late-March headwinds in the public markets—triggered by rising
          macroeconomic uncertainty and new U.S. tariffs—Forge’s private market
          indices (the FPMI and FAPMI) outperformed the S&P 500 by 10.8% and
          6.1%, respectively, showcasing the continued fortitude of private
          market investments.
        </li>
        <li>
          <span className="font-bold">
            IPO optimism stalled after CoreWeave tested the waters:
          </span>{" "}
          CoreWeave’s downsized IPO marked the first high-profile public debut
          of 2025, but its volatile performance—amid ongoing tariff
          uncertainty—caused several late-stage peers like Klarna and StubHub to
          pause IPO plans, reinforcing that some private companies still have
          the flexibility to wait for better market conditions.
        </li>
        <li>
          <span className="font-bold">AI funding continued to dominate:</span>{" "}
          With over 60% of mid- and late-stage VC funding flowing into AI since
          Q4 2024, companies like Anthropic and Mercury continued to raise
          significant rounds at step-up valuations. Ample private capital,
          especially for AI-focused companies, reduced urgency to go public in a
          turbulent macro environment.
        </li>
      </ul>
    </div>
  );
}

export default KeyTakeaways;
