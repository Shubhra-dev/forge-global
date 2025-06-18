import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import comapnyData from "../browse-companies/companyData";
import SmallText from "../../components/SmallText";
import ExtraSmallText from "../../components/ExtraSmallText";
import { useEffect, useState } from "react";
import { getSimilarCompanies } from "../../services/companyDetails";

function SimilarCompanies({ id, companyName }) {
  const [similarCompanies, setSimilarCompanies] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchSimilarCompanies = async () => {
      setIsLoading(true);
      try {
        const data = await getSimilarCompanies(id);
        setSimilarCompanies(data.result);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSimilarCompanies();
  }, []);
  return (
    <>
      {isLoading && (
        <div className="flex items-center justify-center py-10">
          <p>Loading...</p>
        </div>
      )}
      {isError && (
        <div className="flex items-center justify-center py-10">
          <p>Sorry! Something is wrong.</p>
        </div>
      )}
      {!isError && !isLoading && (
        <SectionLayout id={`similar-companies`}>
          <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
            Other companies like {companyName} in the{" "}
            {similarCompanies.sector.name} sector
          </SubTitle>
          <div className="py-5 flex items-center justify-normal gap-8">
            <div className="flex items-center justify-normal gap-1">
              <Text>Sector:</Text>
              <Text
                fontWeight={`font-semibold`}
                textColor={`text-textHeading`}
                textColorDark={`text-textHeadingDark`}
              >
                {similarCompanies.sector.name}
              </Text>
            </div>
            <div className="flex items-center justify-normal gap-1">
              <Text>SubSector:</Text>
              <Text
                fontWeight={`font-semibold`}
                textColor={`text-textHeading`}
                textColorDark={`text-textHeadingDark`}
              >
                {similarCompanies.sub_sector.name}
              </Text>
            </div>
          </div>
          {/* Table */}
          <div className="overflow-x-auto mb-2">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="dark:bg-backgroundDark dark:text-textSubheadingDark">
                  <th className=" px-2 py-2.5" colSpan={4}></th>
                  <th
                    className=" px-2 py-2.5 text-center text-xs font-normal"
                    colSpan={4}
                  >
                    Last Funding Round (LFR)
                  </th>
                </tr>
                <tr className="dark:bg-backgroundDark dark:text-textSubheadingDark text-left">
                  <th className="px-2 py-2.5 text-xs font-normal">Company</th>
                  <th className=" px-2 py-2.5 text-xs font-normal">
                    Sector & Subsector
                  </th>
                  <th className=" px-2 py-2.5 text-xs font-normal">
                    Forge Price¹
                  </th>
                  <th className=" px-2 py-2.5 text-xs font-normal">
                    Forge Price Change²
                  </th>
                  <th className=" px-2 py-2.5 text-xs font-normal">
                    Share Class
                  </th>
                  <th className=" px-2 py-2.5 text-xs font-normal">
                    Post-Money Valuation³
                  </th>
                  <th className=" px-2 py-2.5 text-xs font-normal">
                    Price Per Share
                  </th>
                  <th className=" px-2 py-2.5 text-xs font-normal">
                    Amount Raised
                  </th>
                </tr>
              </thead>
              <tbody>
                {similarCompanies.similar_companies.map((company, index) => (
                  <tr key={index} className="text-gray-800">
                    <td className="px-4 py-2">
                      <div className="flex items-center gap-2.5">
                        <img
                          src={company.thumbnail_image}
                          alt="Company Logo"
                          className="w-5 h-5"
                        />
                        <SmallText fontWeight={`font-medium`}>
                          {company.name}
                        </SmallText>
                      </div>
                    </td>
                    <td className=" px-4 py-2">
                      <SmallText fontWeight={`font-medium`}>
                        {company.sector.name}
                      </SmallText>
                      <ExtraSmallText fontWeight={`font-normal`}>
                        {company.sub_sector.name}
                      </ExtraSmallText>
                    </td>
                    <td className=" px-4 py-2">
                      <SmallText fontWeight={`font-medium`}>
                        {company.forge_price}
                      </SmallText>
                    </td>
                    <td className=" px-4 py-2 text-center">
                      <SmallText
                        fontWeight={`font-medium`}
                        textColor={
                          company.forge_price_change > 0
                            ? "text-green-700"
                            : "text-red-700"
                        }
                      >
                        {company.forge_price_change}
                      </SmallText>
                    </td>
                    <td className=" px-4 py-2 text-center">
                      <SmallText fontWeight={`font-medium`}>
                        {company.share_class}
                      </SmallText>
                    </td>
                    <td className=" px-4 py-2 text-center">
                      <SmallText fontWeight={`font-medium`}>
                        {company.post_money_valuation}
                      </SmallText>
                    </td>
                    <td className=" px-4 py-2 text-center">
                      <SmallText fontWeight={`font-medium`}>
                        {company.price_per_share}
                      </SmallText>
                    </td>
                    <td className=" px-4 py-2 text-center">
                      <SmallText fontWeight={`font-medium`}>
                        {company.amount_raised}
                      </SmallText>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionLayout>
      )}
    </>
  );
}

export default SimilarCompanies;
