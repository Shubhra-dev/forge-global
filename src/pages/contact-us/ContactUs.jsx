import SectionLayout from "../../ui/SectionLayout";
import ContactHero from "./ContactHero";
import OfficeLocations from "./OfficeLocations";
import ScheduleLeft from "../../assets/ScheduleLeft.jpg";
import SubTitle from "../../components/SubTitle";
import ShadowButton from "../../components/ShadowButton";

function ContactUs() {
  return (
    <>
      <ContactHero />
      <OfficeLocations />
      <SectionLayout>
        <div className="w-full flex flex-col sm:flex-row items-stretch justify-between gap-5">
          <div className="w-full sm:w-1/2 tab:w-[65%] rounded-[40px] overflow-hidden">
            <img
              src={ScheduleLeft}
              alt="consultant"
              className=" object-cover"
            />
          </div>
          <div className="w-full sm:w-1/2 tab:w-[35%] rounded-[40px] bg-backgroundCream dark:bg-backgroundCreamDark p-7 flex flex-col justify-between items-start">
            <SubTitle fontWeight={`font-medium`} extraClass={`mb-5 tab:mb-0`}>
              Schedule a Free Consultation at Your Preferred Time
            </SubTitle>
            <ShadowButton
              width={`w-max tab:w-64`}
              bg={`bg-gradient-to-b from-orange-400 to-yellow-800`}
              text={`Free Consultation`}
            />
          </div>
        </div>
      </SectionLayout>
    </>
  );
}

export default ContactUs;
