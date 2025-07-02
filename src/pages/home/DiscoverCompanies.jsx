import Heading from "../../components/Heading";
import PrimaryButton from "../../components/PrimaryButton";
import SectionLayout from "../../ui/SectionLayout";
import CompanyCards from "../../components/CompanyCards";
import MobileSlider from "../../components/MobileSlider";
import { getFeaturedCompanies } from "../../services/companies";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function DiscoverCompanies() {
  const [featuredCompanies, setFeaturedCompanies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeaturedCompanies = async () => {
      setIsLoading(true);
      try {
        const data = await getFeaturedCompanies();
        setFeaturedCompanies(data.result.companies);
        console.log(data.result.companies);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFeaturedCompanies();
  }, []);
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
          <PrimaryButton
            onClick={() => navigate("/browse-companies")}
            icon={true}
          >
            See All Companies
          </PrimaryButton>
        </div>
      </div>
      <div className="hidden sm:grid grid-cols-2 tab:grid-cols-4 gap-[20px]">
        {featuredCompanies &&
          !isLoading &&
          !isError &&
          featuredCompanies.map((item, index) => (
            <CompanyCards key={index} company={item} />
          ))}
      </div>
      <MobileSlider />
      <div className="w-max m-auto sm:hidden">
        <PrimaryButton icon={true}>See All Companies</PrimaryButton>
      </div>
    </SectionLayout>
  );
}

export default DiscoverCompanies;
