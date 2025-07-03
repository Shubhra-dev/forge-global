import SectionLayout from "./SectionLayout";
import BigText from "../components/BigText";
import PrimaryButton from "../components/PrimaryButton";
import { BiEnvelope } from "react-icons/bi";
import ExtraSmallText from "../components/ExtraSmallText";
import DOMPurify from "dompurify";

function NewsletterAndDisclosure({
  newsletter = true,
  disclosure,
  legalNotice,
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
          {disclosure && (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(disclosure),
              }}
              className="text-textParagraph dark:text-textParagraphDark text-[10px] font-normal"
            ></div>
          )}
          {legalNotice && (
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(legalNotice),
              }}
              className="text-textParagraph dark:text-textParagraphDark text-[10px] mt-4 font-normal"
            ></div>
          )}
          {!legalNotice && !disclosure && (
            <div>
              <p className="text-textParagraph dark:text-textParagraphDark text-[10px] font-normal">
                The Forge Accuidity Private Market Index (“FAPMI”) is a custom
                index calculated and disseminated by Forge Data LLC (“Forge
                Data”) and is a mark of Forge Data. The FAPMI may rely on a very
                limited number of trade and/or IOI inputs in its calculation.
                The FAPMI is prepared and disseminated solely for informational
                purposes. While Forge has obtained information from sources it
                believes to be reliable, Forge does not perform an audit or
                undertake any duty of due diligence or independent verification
                of any information it receives. Forge does not guarantee the
                accuracy, completeness, timeliness, or availability of the FAP,
                and are not responsible for any errors or omissions, regardless
                of the cause, or any results obtained from the use of the FAPMI.
                The FAPMI is derived from the performance and pricing activity
                of the underlying constituents based on secondary activity on
                the Forge platform and other private market trading platforms.
                 The FAPMI is not intended to, and does not necessarily,
                represent the market price of any securities (I.e., the price at
                which you could buy or sell such securities). Neither reference
                to company names, nor inclusion of companies in the FAPMI,
                implies any affiliation between Forge and that company, any
                endorsement or sponsorship by Forge of any company or vice
                versa, or any partnership, joint venture or other commercial
                relationship between Forge and any company. Rights with respect
                to any company marks referred to herein are owned by the
                company. Any investment products managed by third-parties which
                seek to track the FAPMI are not affiliated with Forge, and Forge
                and is not responsible for the approval of any investments, the
                management of, or the investment decisions with respect to any
                such third-party products. Forge makes no assurance that any
                such third-party investment products based on or underlying the
                FAPMI will accurately track index performance or provide
                positive investment performance. Investing in private company
                securities is not suitable for all investors, is highly
                speculative, is high risk, and investors should be prepared to
                withstand a total loss of their investment. Private company
                securities are highly illiquid and there is no guarantee that a
                market will develop for such securities. Each investment carries
                its own risks, and investors should conduct their own due
                diligence regarding the investment, including obtaining
                independent professional advice. Past performance is not
                indicative of future results. This is not a recommendation,
                offer, solicitation of an offer, or advice to buy or sell
                securities by Forge, nor an offer of brokerage services in any
                jurisdiction where Forge is not permitted to offer brokerage
                services.
              </p>
            </div>
          )}
        </div>
      </>
    </SectionLayout>
  );
}

export default NewsletterAndDisclosure;
