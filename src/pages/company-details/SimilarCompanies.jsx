import SubTitle from "../../components/SubTitle";
import Text from "../../components/Text";
import SectionLayout from "../../ui/SectionLayout";
import comapnyData from "../browse-companies/companyData";
import Logo1 from "../../assets/icons/Logo.svg";
import Logo2 from "../../assets/icons/Logo-2.svg";
import Logo3 from "../../assets/icons/Logo-3.svg";
import Logo4 from "../../assets/icons/Logo-4.svg";
import SmallText from "../../components/SmallText";
import ExtraSmallText from "../../components/ExtraSmallText";

function SimilarCompanies() {
  return (
    <SectionLayout id={`similar-companies`}>
      <SubTitle fontWeight={`font-medium`} font={`font-clash`}>
        Other companies like “Company Name” in the Data Intelligence sector
      </SubTitle>
      <div className="py-5 flex items-center justify-normal gap-8">
        <div className="flex items-center justify-normal gap-1">
          <Text>Sector:</Text>
          <Text
            fontWeight={`font-semibold`}
            textColor={`text-textHeading`}
            textColorDark={`text-textHeadingDark`}
          >
            Enterprise Software
          </Text>
        </div>
        <div className="flex items-center justify-normal gap-1">
          <Text>SubSector:</Text>
          <Text
            fontWeight={`font-semibold`}
            textColor={`text-textHeading`}
            textColorDark={`text-textHeadingDark`}
          >
            Data Intelligence
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
              <th className=" px-2 py-2.5 text-xs font-normal">Forge Price¹</th>
              <th className=" px-2 py-2.5 text-xs font-normal">
                Forge Price Change²
              </th>
              <th className=" px-2 py-2.5 text-xs font-normal">Share Class</th>
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
            {comapnyData.companies.map((company, index) => (
              <tr key={index} className="text-gray-800">
                <td className="px-4 py-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={
                        company.logo === "logo1"
                          ? Logo1
                          : company.logo === "logo2"
                            ? Logo2
                            : company.logo === "logo3"
                              ? Logo3
                              : Logo4
                      }
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
                    {company.sector}
                  </SmallText>
                  <ExtraSmallText fontWeight={`font-normal`}>
                    {company.subsector}
                  </ExtraSmallText>
                </td>
                <td className=" px-4 py-2">
                  <SmallText fontWeight={`font-medium`}>
                    {company.forgePrice}
                  </SmallText>
                </td>
                <td className=" px-4 py-2 text-center">
                  <SmallText
                    fontWeight={`font-medium`}
                    textColor={
                      company.priceChange.includes("+")
                        ? "text-green-700"
                        : "text-red-700"
                    }
                  >
                    {company.priceChange}
                  </SmallText>
                </td>
                <td className=" px-4 py-2 text-center">
                  <SmallText fontWeight={`font-medium`}>
                    {" "}
                    {company.shareClass}
                  </SmallText>
                </td>
                <td className=" px-4 py-2 text-center">
                  <SmallText fontWeight={`font-medium`}>
                    {company.postMoneyValuation}
                  </SmallText>
                </td>
                <td className=" px-4 py-2 text-center">
                  <SmallText fontWeight={`font-medium`}>
                    {company.pricePerShare}
                  </SmallText>
                </td>
                <td className=" px-4 py-2 text-center">
                  <SmallText fontWeight={`font-medium`}>
                    {company.amountRaised}
                  </SmallText>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionLayout>
  );
}

export default SimilarCompanies;
