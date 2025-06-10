import SmallText from "../../components/SmallText";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
function CompanyDescription() {
  return (
    <SectionLayout id={`company-details`}>
      <div className="w-full flex-col tab:flex-row items-start justify-between flex gap-10 tab:gap-16">
        <div className="w-full tab:w-1/2">
          <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
            Company details
          </SubTitle>
          <Text extraClass={`pt-[15px]`}>
            xAI is an AI research company which offers AI models to
            organizations and individuals. xAI’s models are developed to push
            the boundaries of artificial intelligence, with the aim of
            integrating AI more naturally into human workflows. The company
            strives to build AI that enhances productivity and supports various
            industries. This company was founded by Elon Musk in 2023 and is
            headquartered in Palo Alto, CA.
          </Text>
          <SmallText
            extraClass={`py-[15px] cursor-pointer`}
            textColor={`text-blue-500`}
            textColorDark={` `}
          >
            company_name.com/about
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
                Enterprise Software
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
                Data Intelligence
              </SmallText>
            </div>
            <div>
              <SmallText
                textColor={`text-textParagraph`}
                textColorDark={`text-textParagraphDark`}
              >
                Founded
              </SmallText>
              <SmallText fontWeight={`font-medium`}>2023</SmallText>
            </div>
            <div>
              <SmallText
                textColor={`text-textParagraph`}
                textColorDark={`text-textParagraphDark`}
              >
                Headquarters
              </SmallText>
              <SmallText fontWeight={`font-medium`}>
                Burlingame, CA, United States
              </SmallText>
            </div>
          </div>
        </div>
        <div className="w-full tab:w-1/2">
          <div className="flex items-center justify-between py-5 border-t border-t-borderPrimary dark:border-t-borderPrimaryDark">
            <Text>
              Post-Money Valuation<sup>3</sup>
            </Text>
            <Text fontWeight={`font-medium`}>06/01/2025</Text>
          </div>
          <div className="flex items-center justify-between py-5 border-t border-t-borderPrimary dark:border-t-borderPrimaryDark">
            <Text>Total Funding</Text>
            <Text fontWeight={`font-medium`}>$12.13B</Text>
          </div>
          <div className="flex items-center justify-between py-5 border-t border-t-borderPrimary dark:border-t-borderPrimaryDark">
            <Text>LFR Price per Share</Text>
            <Text fontWeight={`font-medium`}>XXX</Text>
          </div>
          <div className="flex items-center justify-between py-5 border-y border-y-borderPrimary dark:border-y-borderPrimaryDark">
            <Text>Last Funding Share Class</Text>
            <Text fontWeight={`font-medium`}>Series C</Text>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default CompanyDescription;
