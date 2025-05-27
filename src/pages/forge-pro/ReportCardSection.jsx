import BlackBg from "../../assets/BlackBg.jpg";
import Heading from "../../components/Heading";
import SmallHeading from "../../components/SmallHeading";
import Text from "../../components/Text";
import SmallText from "../../components/SmallText";
import SubHeading from "../../components/SubHeading";
import PrimaryButton from "../../components/PrimaryButton";
import SectionLayout from "../../ui/SectionLayout";
function ReportCardSection() {
  return (
    <SectionLayout>
      <div className="py-7 pb-12 w-full flex flex-col-reverse sm:flex-row items-center justify-normal gap-10 tab:gap-16">
        <div className="w-full sm:w-[45%]">
          <SmallText extraClass={`uppercase`} fontWeight={`font-medium`}>
            April 16, 2025
          </SmallText>
          <SubHeading leading={`leading-7`} extraClass={`pt-4 pb-1`}>
            As the IPO pipeline strengthens, will tariffs crash the party?
          </SubHeading>
          <Text extraClass={`pt-5 pb-6`}>
            Before global tariffs rattled markets, a surge in S-1 filings during
            Q1 2025 signaled a potential rebound in the IPO market after a
            multi-year drought.
          </Text>
          <div className="w-max m-auto sm:m-0">
            <PrimaryButton>View the new report</PrimaryButton>
          </div>
        </div>
        <div
          className="w-full sm:w-[55%] h-72 bg-center bg-cover bg-no-repeat rounded-tr-[40px] px-10 py-7 flex flex-col justify-end items-start"
          style={{ backgroundImage: `url(${BlackBg})` }}
        >
          <div className="w-32 h-1 bg-secondary2 rounded-full"></div>
          <Heading
            font={`font-clash`}
            textColor={`text-white`}
            align={`text-left`}
            fontWeight={`font-medium`}
            leading={`leading-normal sm:leading-9 tab:leading-10`}
            extraClass={`pt-3 pb-4 sm:w-3/4`}
          >
            Forge Investment Outlook
          </Heading>
          <SmallHeading textColor={`text-white`}>Q2 2025</SmallHeading>
        </div>
      </div>
    </SectionLayout>
  );
}

export default ReportCardSection;
