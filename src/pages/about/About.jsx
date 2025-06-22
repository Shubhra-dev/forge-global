import { FiArrowUpRight } from "react-icons/fi";
import BigText from "../../components/BigText";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import AboutHero from "./AboutHero";
import CultureInnovation from "./CultureInnovation";
import FAQLinks from "./FAQLinks";
import OfficersAndCEO from "./OfficersAndCEO";
import WeOperate from "./WeOperate";
import WhyUs from "./WhyUs";

function About() {
  return (
    <>
      <AboutHero />
      <WeOperate />
      <CultureInnovation />
      <OfficersAndCEO />
      <WhyUs />
      <FAQLinks />
      <SectionLayout bgDark={`dark:bg-backgroundPrimaryDark`}>
        <Heading font={`font-clash`}>We’d love to hear from you</Heading>
        <Text align={`text-center`} extraClass={`pt-2.5`}>
          Please click the link below and we’ll be in touch.
        </Text>
        <div className="mt-7 w-max m-auto">
          <div className="py-[15px] cursor-pointer bg-primary w-max px-4 sm:px-5 rounded-xl flex items-center justify-center gap-5 sm:justify-between group hover:bg-secondary2">
            <BigText
              fontWeight={`font-semibold`}
              extraClass={`group-hover:animate-shake`}
              textColor={`text-textHeadingDark group-hover:text-textHeading`}
              textColorDark={` `}
            >
              Contact Us
            </BigText>
            <div className="p-2 bg-backgroundDark group-hover:bg-white rounded-full hidden sm:block">
              <FiArrowUpRight className="text-white text-xl group-hover:text-textHeading" />
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default About;
