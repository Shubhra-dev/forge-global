import SectionLayout from "../../ui/SectionLayout";
import ForgePriceImg from "../../assets/ForgePrice.png";
import Text from "../../components/Text";
import SubTitle from "../../components/SubTitle";
import SmallHeading from "../../components/SmallHeading";
import SecondaryButton from "../../components/SecondaryButton";
function ForgePrice() {
  return (
    <SectionLayout>
      <div className="flex flex-col-reverse sm:flex-row items-center tab:items-start justify-between gap-6 w-full">
        <div className="w-full sm:w-[45%]">
          <Text
            align={`text-center sm:text-left`}
            fontWeight={`font-medium`}
            extraClass={`uppercase`}
          >
            forge price
          </Text>
          <div className="py-3 sm:py-6">
            <SubTitle
              align={`text-center sm:text-left`}
              leading={`leading-tight sm:leading-relaxed`}
            >
              A new standard for
            </SubTitle>
            <SubTitle
              align={`text-center sm:text-left`}
              textColor={`text-primary`}
              textColorDark={`dark:text-backgroundBronze`}
            >
              private market pricing insight
            </SubTitle>
            <SmallHeading
              align={`text-center sm:text-left`}
              extraClass={"mt-2 sm:mt-[15px]"}
            >
              Forge Price™ provides fast and frequent pricing updates on
              pre-IPO companies.
            </SmallHeading>
          </div>
          <div className="w-max m-auto sm:m-0 sm:w-auto">
            <SecondaryButton iconDown={true}>Learn More</SecondaryButton>
          </div>
        </div>
        <div className="w-full sm:w-[55%]">
          <img src={ForgePriceImg} alt="forge price" className="w-full" />
        </div>
      </div>
    </SectionLayout>
  );
}

export default ForgePrice;
