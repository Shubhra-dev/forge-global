import { useState } from "react";
import SectionLayout from "../../ui/SectionLayout";
import companyData from "./companyData";
import SmallText from "../../components/SmallText";
import ExtraSmallText from "../../components/ExtraSmallText";
import Logo1 from "../../assets/icons/Logo.svg";
import Logo2 from "../../assets/icons/Logo-2.svg";
import Logo3 from "../../assets/icons/Logo-3.svg";
import Logo4 from "../../assets/icons/Logo-4.svg";
import { FaSearch } from "react-icons/fa";

const ITEMS_PER_PAGE = 24;

const FundingTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedSubsector, setSelectedSubsector] = useState("");
  const [selectedValuation, setSelectedValuation] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedSector("");
    setSelectedSubsector("");
    setSelectedValuation("");
    setCurrentPage(1);
  };

  const filteredCompanies = companyData.companies.filter((company) => {
    const matchName = company.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchSector = selectedSector
      ? company.sector === selectedSector
      : true;
    const matchSubsector = selectedSubsector
      ? company.subsector === selectedSubsector
      : true;
    const matchValuation = selectedValuation
      ? company.postMoneyValuation <= selectedValuation
      : true;
    return matchName && matchSector && matchSubsector && matchValuation;
  });

  const totalItems = filteredCompanies.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCompanies = filteredCompanies.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const goToPage = (pageNum) => {
    if (pageNum < 1 || pageNum > totalPages) return;
    setCurrentPage(pageNum);
  };

  return (
    <SectionLayout>
      <div className="p-4">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <div className="relative">
            <FaSearch className="absolute top-[35%] left-2 dark:text-textHeadingDark" />
            <input
              type="text"
              placeholder="Search for company"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className=" rounded-md pl-8 pr-2.5 py-2.5 w-40 sm:w-56 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark"
            />
          </div>
          <select
            value={selectedSector}
            onChange={(e) => {
              setSelectedSector(e.target.value);
              setCurrentPage(1);
            }}
            className=" rounded-md p-2.5 w-40 sm:w-48 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark"
          >
            <option value="" disabled>
              Sector
            </option>
            {companyData.sectors.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
          <select
            value={selectedSubsector}
            onChange={(e) => {
              setSelectedSubsector(e.target.value);
              setCurrentPage(1);
            }}
            className=" rounded-md w-40 sm:w-48 p-2.5 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark"
          >
            <option value="" disabled>
              Subsector
            </option>
            {companyData.subsectors.map((subsector) => (
              <option key={subsector} value={subsector}>
                {subsector}
              </option>
            ))}
          </select>
          <input
            value={selectedValuation}
            onChange={(e) => {
              setSelectedValuation(e.target.value);
            }}
            placeholder="Post Money Valuation"
            className="rounded-md p-2 w-40 sm:w-56 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark"
          />
          <button
            onClick={resetFilters}
            className="p-2 rounded-md dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark"
          >
            Reset
          </button>
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
              {paginatedCompanies.map((company, index) => (
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
        <div className="flex justify-between">
          {/* Pagination Info */}
          <div>
            <SmallText>
              Showing {startIndex + 1}-
              {Math.min(startIndex + ITEMS_PER_PAGE, totalItems)} of{" "}
              {totalItems} companies
            </SmallText>
          </div>

          {/* Pagination Controls */}
          <div className="flex gap-2 items-center text-sm">
            {currentPage > 1 && (
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 py-1 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark rounded"
              >
                Prev
              </button>
            )}
            <span className="dark:text-textHeadingDark dark:bg-backgroundDark">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 py-1 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark rounded"
            >
              Next
            </button>
            <button
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
              className="px-2 py-1 border rounded dark:text-textHeadingDark dark:bg-backgroundDark border-borderPrimary dark:border-borderPrimaryDark"
            >
              Last
            </button>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default FundingTable;
