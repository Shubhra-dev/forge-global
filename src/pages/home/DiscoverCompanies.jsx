import Heading from "../../components/Heading";
import PrimaryButton from "../../components/PrimaryButton";
import SectionLayout from "../../ui/SectionLayout";
import CompanyCards from "../../components/CompanyCards";
import MobileSlider from "../../components/MobileSlider";
function DiscoverCompanies() {
  return (
    <SectionLayout
      bg={`bg-backgroundTertiaryLight`}
      bgDark={"dark:bg-backgroundTertiary"}
    >
      <div className="flex items-center justify-between w-full pb-6">
        <div>
          <Heading
            align={`text-center sm:text-left`}
            font={`font-clash`}
            leading={`leading-normal`}
          >
            Discover opportunities in
          </Heading>
          <Heading
            align={`text-center sm:text-left`}
            font={`font-clash`}
            textColor={`text-backgroundBronzeDark`}
            textColorDark={`dark:text-backgroundBronze`}
          >
            world-changing companies
          </Heading>
        </div>
        <div className="hidden sm:block">
          <PrimaryButton icon={true}>See All Companies</PrimaryButton>
        </div>
      </div>
      <div className="hidden sm:grid grid-cols-2 tab:grid-cols-4 gap-[20px]">
        <CompanyCards />
        <CompanyCards />
        <CompanyCards />
        <CompanyCards />
        <CompanyCards />
        <CompanyCards />
        <CompanyCards />
        <CompanyCards />
      </div>
      <MobileSlider />
      <div className="w-max m-auto sm:hidden">
        <PrimaryButton icon={true}>See All Companies</PrimaryButton>
      </div>
    </SectionLayout>
  );
}

export default DiscoverCompanies;
