import Heading from "../../components/Heading";
import SectionLayout from "../../ui/SectionLayout";
import CheckText from "./CheckText";
import PhotoWithBg from "../../components/PhotoWithBg";
import SecondaryButton from "../../components/SecondaryButton";
import Man1 from "../../assets/Man1.png";
function HowBuyIPO() {
  return (
    <SectionLayout
      bg={`bg-backgroundCream`}
      bgDark={`dark:bg-backgroundCreamDark`}
    >
      <Heading font={`font-clash`} align={`text-left`} extraClass={`pb-4 `}>
        How to buy pre-IPO shares?
      </Heading>
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 sm:gap-2 tab:gap-0">
        <div className="w-full sm:w-[50%]">
          <div className="pb-7">
            <CheckText
              text={`After accreditation confirmation, you can view specific investment
        opportunities`}
            />
            <CheckText text={`Browse and research private companies`} />
            <CheckText
              text={`Indicate your interest to buy specific private company stock`}
            />
            <CheckText
              text={`A Forge Private Market Specialist is available to answer any questions`}
            />
            <CheckText
              text={`Forge helps guide you through every step of the transaction process`}
            />
          </div>
          <div className="w-max m-auto sm:m-0">
            <SecondaryButton>Start Accreditation Process</SecondaryButton>
          </div>
        </div>
        <div className="w-full sm:w-[50%] tab:w-[40%]">
          <PhotoWithBg image={Man1} />
        </div>
      </div>
    </SectionLayout>
  );
}

export default HowBuyIPO;
