import SmallHeading from "../../components/SmallHeading";
import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
function Leadership() {
  return (
    <SectionLayout id={`leadership`}>
      <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
        Leadership and board
      </SubTitle>
      <div className="pt-5 flex items-center justify-between gap-3">
        <SmallHeading fontWeight={`font-bold`} extraClass={`w-[13%]`}>
          Leadership
        </SmallHeading>
        <div className="border-t w-[87%] border-t-borderPrimary dark:border-t-borderPrimaryDark"></div>
      </div>
      <div className="pt-5 flex flex-wrap sm:flex-nowrap items-start justify-normal gap-8 sm:gap-[50px]">
        <div className="w-[45%] sm:w-auto tab:w-1/4">
          <SmallHeading fontWeight={`font-medium`}>Elon Musk</SmallHeading>
          <Text extraClass={`pt-1`}>Founder & Board Member</Text>
        </div>
        <div className="tab:w-1/4">
          <SmallHeading fontWeight={`font-medium`}>Elon Musk</SmallHeading>
          <Text extraClass={`pt-1`}>Advisor</Text>
        </div>
        <div className="tab:w-1/4">
          <SmallHeading fontWeight={`font-medium`}>Elon Musk</SmallHeading>
          <Text extraClass={`pt-1`}>Founder</Text>
        </div>
      </div>
    </SectionLayout>
  );
}

export default Leadership;
