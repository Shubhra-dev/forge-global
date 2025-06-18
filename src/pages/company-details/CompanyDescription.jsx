import { useEffect, useState } from "react";
import SmallText from "../../components/SmallText";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import { companyDetailsShow } from "../../services/companyDetails";
import SectionLayout from "../../ui/SectionLayout";
function CompanyDescription({ id }) {
  const [companyDetails, setCompanyDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      setIsLoading(true);
      try {
        const data = await companyDetailsShow(id);
        setCompanyDetails(data.result);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCompanyDetails();
  }, []);
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
        <SectionLayout id={`company-details`}>
          <div className="w-full flex-col tab:flex-row items-start justify-between flex gap-10 tab:gap-16">
            <div className="w-full tab:w-1/2">
              <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
                Company details
              </SubTitle>
              <div
                className="text-textParagraph dark:text-textParagraphDark"
                dangerouslySetInnerHTML={{ __html: companyDetails.details }}
              ></div>
              <SmallText
                extraClass={`py-[15px] cursor-pointer`}
                textColor={`text-blue-500`}
                textColorDark={` `}
                onClick={() =>
                  window.open(companyDetails.company_url, "_blank")
                }
              >
                {companyDetails.company_url}
              </SmallText>
              <div className="flex flex-wrap items-start justify-between gap-5">
                <div>
                  <SmallText
                    textColor={`text-textParagraph`}
                    textColorDark={`text-textParagraphDark`}
                  >
                    Sectors
                  </SmallText>
                  <SmallText fontWeight={`font-medium`}>
                    {companyDetails.sector}
                  </SmallText>
                </div>
                <div>
                  <SmallText
                    textColor={`text-textParagraph`}
                    textColorDark={`text-textParagraphDark`}
                  >
                    SubSector
                  </SmallText>
                  <SmallText fontWeight={`font-medium`}>
                    {companyDetails.sub_sector}
                  </SmallText>
                </div>
                <div>
                  <SmallText
                    textColor={`text-textParagraph`}
                    textColorDark={`text-textParagraphDark`}
                  >
                    Founded
                  </SmallText>
                  <SmallText fontWeight={`font-medium`}>
                    {companyDetails.founded}
                  </SmallText>
                </div>
                <div>
                  <SmallText
                    textColor={`text-textParagraph`}
                    textColorDark={`text-textParagraphDark`}
                  >
                    Headquarters
                  </SmallText>
                  <SmallText fontWeight={`font-medium`}>
                    {companyDetails.headquarters}
                  </SmallText>
                </div>
              </div>
            </div>
            <div className="w-full tab:w-1/2">
              <div className="flex items-center justify-between py-5 border-t border-t-borderPrimary dark:border-t-borderPrimaryDark">
                <Text>
                  Post-Money Valuation<sup>3</sup>
                </Text>
                <Text fontWeight={`font-medium`}>
                  {companyDetails.post_money_valuation}
                </Text>
              </div>
              <div className="flex items-center justify-between py-5 border-t border-t-borderPrimary dark:border-t-borderPrimaryDark">
                <Text>Total Funding</Text>
                <Text fontWeight={`font-medium`}>
                  {companyDetails.total_funding}
                </Text>
              </div>
              <div className="flex items-center justify-between py-5 border-t border-t-borderPrimary dark:border-t-borderPrimaryDark">
                <Text>LFR Price per Share</Text>
                <Text fontWeight={`font-medium`}>
                  {companyDetails.lfr_price_per_share}
                </Text>
              </div>
              <div className="flex items-center justify-between py-5 border-y border-y-borderPrimary dark:border-y-borderPrimaryDark">
                <Text>Last Funding Share Class</Text>
                <Text fontWeight={`font-medium`}>
                  {companyDetails.last_funding_share_class}
                </Text>
              </div>
            </div>
          </div>
        </SectionLayout>
      )}
    </>
  );
}

export default CompanyDescription;
