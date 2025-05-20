import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import SecondaryButton from "../../components/SecondaryButton";
import PreIPO from "../../assets/PreIPO.jpg";
function PreIPOInvesting() {
  return (
    <SectionLayout
      bg={`bg-backgroundCream`}
      bgDark={`dark:bg-backgroundCreamDark`}
    >
      <div className="w-full flex items-center justify-start sm:justify-between gap-5 tab:gap-0">
        <div className="hidden sm:block sm:w-1/2 tab:w-[47%] relative">
          <div className="absolute top-8 z-10 w-full h-72 bg-primary rounded-[40px]"></div>
          <div className="z-30 relative rounded-[40px] overflow-hidden px-8">
            <img
              src={PreIPO}
              alt="pre ipo"
              className="object-fill h-[350px] w-full rounded-[40px]"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 tab:w-[47%]">
          <Heading font={`font-clash`} align={`text-left`}>
            Why pre-IPO investing?
          </Heading>
          <Text extraClass={`pt-4`}>
            The private market presents a chance to invest in private companies
            powering tomorrow’s innovations and the potential of outsized
            returns. With accreditation, individual investors can access Forge's
            centralized network of employee shareholders, institutional
            investors, private company stock and a Private Market Specialist who
            can help execute transactions.
          </Text>
          <div className="pt-7">
            <SecondaryButton>Browse Companies</SecondaryButton>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}

export default PreIPOInvesting;
