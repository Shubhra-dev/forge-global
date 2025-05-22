import SectionLayout from "./SectionLayout";
import BigText from "../components/BigText";
import PrimaryButton from "../components/PrimaryButton";
import { BiEnvelope } from "react-icons/bi";
import ExtraSmallText from "../components/ExtraSmallText";
function NewsletterAndDisclosure({
  newsletter = true,
  disclosureDetail = false,
  disclosurelist = true,
}) {
  return (
    <SectionLayout bg={`bg-gray-50`} bgDark={`dark:bg-backgroundDark/90`}>
      <>
        {newsletter && (
          <div className="flex flex-col tab:flex-row items-center justify-center gap-5 w-max max-w-full m-auto">
            <BigText fontWeight={`font-semibold`}>Ready to Get Started</BigText>
            <form className="flex flex-col sm:flex-row items-center justify-start gap-5">
              <div className="relative">
                <BiEnvelope className="absolute text-xl top-[25%] left-4 dark:text-textHeadingDark" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. example@email.com"
                  className="py-2 w-96 pl-10 pr-3 bg-backgroundPrimary dark:text-textSubheadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark rounded-full"
                />
              </div>
              <PrimaryButton type={`submit`} padding={`py-2 px-6`}>
                Buy/Sell Today
              </PrimaryButton>
            </form>
          </div>
        )}
        <div className="w-full pt-10">
          {disclosureDetail && (
            <p
              className={`pb-7 text-[10px] text-textParagraph dark:text-textParagraphDark`}
            >
              The Forge Accuidity Private Market Index (“FAPMI”) is a custom
              index calculated and disseminated by Forge Data LLC (“Forge Data”)
              and is a mark of Forge Data. The FAPMI may rely on a very limited
              number of trade and/or IOI inputs in its calculation. The FAPMI is
              prepared and disseminated solely for informational purposes. While
              Forge has obtained information from sources it believes to be
              reliable, Forge does not perform an audit or undertake any duty of
              due diligence or independent verification of any information it
              receives. Forge does not guarantee the accuracy, completeness,
              timeliness, or availability of the FAP, and are not responsible
              for any errors or omissions, regardless of the cause, or any
              results obtained from the use of the FAPMI. The FAPMI is derived
              from the performance and pricing activity of the underlying
              constituents based on secondary activity on the Forge platform and
              other private market trading platforms.  The FAPMI is not intended
              to, and does not necessarily, represent the market price of any
              securities (I.e., the price at which you could buy or sell such
              securities). Neither reference to company names, nor inclusion of
              companies in the FAPMI, implies any affiliation between Forge and
              that company, any endorsement or sponsorship by Forge of any
              company or vice versa, or any partnership, joint venture or other
              commercial relationship between Forge and any company. Rights with
              respect to any company marks referred to herein are owned by the
              company. Any investment products managed by third-parties which
              seek to track the FAPMI are not affiliated with Forge, and Forge
              and is not responsible for the approval of any investments, the
              management of, or the investment decisions with respect to any
              such third-party products. Forge makes no assurance that any such
              third-party investment products based on or underlying the FAPMI
              will accurately track index performance or provide positive
              investment performance. Investing in private company securities is
              not suitable for all investors, is highly speculative, is high
              risk, and investors should be prepared to withstand a total loss
              of their investment. Private company securities are highly
              illiquid and there is no guarantee that a market will develop for
              such securities. Each investment carries its own risks, and
              investors should conduct their own due diligence regarding the
              investment, including obtaining independent professional advice.
              Past performance is not indicative of future results. This is not
              a recommendation, offer, solicitation of an offer, or advice to
              buy or sell securities by Forge, nor an offer of brokerage
              services in any jurisdiction where Forge is not permitted to offer
              brokerage services.
            </p>
          )}
          {disclosurelist && (
            <>
              <ExtraSmallText extraClass={`uppercase`}>
                please read these important legal notices and disclosure
              </ExtraSmallText>
              <ul className="text-[10px] text-textParagraph dark:text-textParagraphDark list-decimal list-inside py-1 space-y-1">
                <li>
                  Forge Price™ is a custom data-point calculated and
                  disseminated by Forge Data LLC (“Forge Data”) and is a mark of
                  Forge Data. Forge Price may rely on a very limited number of
                  inputs in its calculation. Forge Price is prepared and
                  disseminated solely for informational purposes. Redistribution
                  is permitted solely with Forge’s written consent. While Forge
                  has obtained information from sources it believes to be
                  reliable, Forge does not perform an audit or undertake any
                  duty of due diligence or independent verification of any
                  information it receives. Forge does not guarantee the
                  accuracy, completeness, timeliness, or availability of Forge
                  Price, and are not responsible for any errors or omissions,
                  regardless of the cause, or any results obtained from the use
                  of Forge Price. Forge Price is derived from secondary activity
                  on the Forge platform and other private market trading
                  platforms, and other publicly-available datapoints collected
                  by Forge. Forge Price is not intended to, and does not
                  necessarily, represent the market price of any securities
                  (I.e., the price at which you could buy or sell such
                  securities). Neither reference to company names, nor
                  calculation of Forge Price for a specific company, implies any
                  affiliation between Forge and that company, any endorsement or
                  sponsorship by Forge of any company or vice versa, or any
                  partnership, joint venture or other commercial relationship
                  between Forge and any company. Rights with respect to any
                  company marks referred to herein are owned by the company. The
                  dollar-figure and percentage displayed indicates the per share
                  change in dollar amount and percentage since the most recent
                  Forge Price change. Percentages are rounded to the nearest
                  whole number.
                </li>
                <li>
                  The Last Closed Trade price displayed reflects the price at
                  which the last trade in this company's security occurred on
                  Forge, and can include secondary trades in any class of the
                  company's security, or trades in units of funds holding the
                  company's securities (the economics of which differ versus
                  direct company ownership). The date displayed reflects the
                  date on which the last trade in this company's security closed
                  on Forge. This may be several weeks after the terms of the
                  trade were agreed upon between the buyer and seller. In case
                  of multiple trades closed on the same date, the price
                  displayed is of either (i) the trade which terms were agreed
                  upon most recently; or (ii) the trade with the higher notional
                  value.
                </li>
                <li>
                  Post-Money Valuation represents the estimated valuation based
                  on company-submitted Certificates of Incorporations (COIs).
                </li>
              </ul>
            </>
          )}
        </div>
      </>
    </SectionLayout>
  );
}

export default NewsletterAndDisclosure;
