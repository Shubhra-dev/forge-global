import { useEffect, useState } from "react";
import SectionLayout from "../../ui/SectionLayout";
import companyData from "./companyData";
import SmallText from "../../components/SmallText";
import ExtraSmallText from "../../components/ExtraSmallText";
import Logo1 from "../../assets/icons/Logo.svg";
import Logo2 from "../../assets/icons/Logo-2.svg";
import Logo3 from "../../assets/icons/Logo-3.svg";
import Logo4 from "../../assets/icons/Logo-4.svg";
import { FaSearch } from "react-icons/fa";
import { GoTable } from "react-icons/go";
import { HiViewGrid } from "react-icons/hi";
import CompanyCards from "../../components/CompanyCards";
import {
  getCompanies,
  getFilterVariables,
  getSubsectors,
} from "../../services/companies";

const ITEMS_PER_PAGE = 24;

const FundingTable = () => {
  const [viewStyle, setViewStyle] = useState("table"); // "table" or "grid"
  const [companies, setCompanies] = useState([]);
  const [pagination, setPagination] = useState({
    total_items: 0,
    per_page: 0,
    current_page: 1,
    last_page: 1,
    from: 1,
    to: 1,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [sectors, setSectors] = useState([]);
  const [selectedSubsector, setSelectedSubsector] = useState("");
  const [subsectors, setSubsectors] = useState([]);
  const [selectedValuation, setSelectedValuation] = useState("");
  const [valuations, setValuations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchFilterData = async () => {
      setIsLoading(true);
      try {
        const data = await getFilterVariables();
        setSectors(data.result.sectors);

        setValuations(data.result.post_money_valuations);
      } catch (error) {
        console.error("Error fetching company data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFilterData();
  }, []);
  useEffect(() => {
    const fetchSubSectors = async () => {
      setIsLoading(true);
      try {
        const data = await getSubsectors(selectedSector);
        setSubsectors(data.result.sub_sectors);
      } catch (error) {
        console.error("Error fetching subsector data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSubSectors();
  }, [selectedSector]);
  useEffect(() => {
    const fetchCompanies = async () => {
      setIsLoading(true);
      try {
        const data = await getCompanies(
          selectedSector,
          selectedSubsector,
          selectedValuation,
          10,
          pagination.current_page,
          searchTerm
        );
        setCompanies(data.result.companies);
        setPagination(data.result.pagination);
      } catch (error) {
        console.error("Error fetching subsector data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCompanies();
  }, [selectedSector]);

  return (
    <SectionLayout>
      <div className="p-4">
        {/* Filters */}
        <div className="flex items-start justify-between gap-2 mb-10">
          <div className="flex flex-wrap items-center gap-2">
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
                className=" rounded-md pl-8 pr-2.5 py-2.5 w-32 sm:w-56 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark"
              />
            </div>
            <select
              value={selectedSector}
              onChange={(e) => {
                setSelectedSector(e.target.value);
              }}
              className=" rounded-md p-2.5 w-32 sm:w-48 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark"
            >
              <option value="">All Sectors</option>
              {sectors.map((sector, index) => (
                <option key={index} value={sector.id}>
                  {sector.name}
                </option>
              ))}
            </select>
            <select
              value={selectedSubsector}
              onChange={(e) => {
                setSelectedSubsector(e.target.value);
              }}
              className=" rounded-md w-32 sm:w-48 p-2.5 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark"
            >
              <option value="">All Subsectors</option>
              {subsectors.map((subsector, index) => (
                <option key={index} value={subsector.id}>
                  {subsector.name}
                </option>
              ))}
            </select>
            <select
              value={selectedValuation}
              onChange={(e) => {
                setSelectedValuation(e.target.value);
              }}
              className=" rounded-md w-32 sm:w-48 p-2.5 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark"
            >
              <option value="">Any Valuation</option>
              {valuations.map((valuation, index) => (
                <option key={index} value={valuation.key}>
                  {valuation.value}
                </option>
              ))}
            </select>

            <button
              // onClick={resetFilters}
              className="p-2 rounded-md dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark"
            >
              Reset
            </button>
          </div>
          <div className="flex items-center rounded-md mt-0.5 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark">
            <div
              onClick={() => setViewStyle(`table`)}
              className={`cursor-pointer p-2.5 rounded-l-md ${viewStyle === "table" ? "bg-green-900 text-white" : ""}`}
            >
              <GoTable title="Table View" className="text-xl" />
            </div>

            <div
              onClick={() => setViewStyle(`grid`)}
              className={`cursor-pointer p-2.5 rounded-r-md ${viewStyle === "grid" ? "bg-green-900 text-white" : ""}`}
            >
              <HiViewGrid title="Grid View" className="text-xl" />
            </div>
          </div>
        </div>

        {/* Table */}
        {viewStyle === "table" && (
          <>
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
                  {companies.map((company, index) => (
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
                          {" "}
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
            <div className="flex justify-between">
              {/* Pagination Info */}
              <div>
                <SmallText>
                  Showing {pagination.from}-{pagination.to} of{" "}
                  {pagination.total_items} companies
                </SmallText>
              </div>

              {/* Pagination Controls */}
              <div className="flex gap-2 items-center text-sm">
                {pagination.current_page > 1 && (
                  <button
                    onClick={() => goToPage(pagination.current_page - 1)}
                    disabled={pagination.current_page === 1}
                    className="px-2 py-1 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark rounded"
                  >
                    Prev
                  </button>
                )}
                <span className="dark:text-textHeadingDark dark:bg-backgroundDark">
                  Page {pagination.current_page} of {pagination.last_page}
                </span>
                <button
                  onClick={() => goToPage(pagination.current_page + 1)}
                  disabled={pagination.current_page === pagination.last_page}
                  className="px-2 py-1 dark:text-textHeadingDark dark:bg-backgroundDark border border-borderPrimary dark:border-borderPrimaryDark rounded"
                >
                  Next
                </button>
                <button
                  onClick={() => goToPage(pagination.last_page)}
                  disabled={pagination.current_page === pagination.last_page}
                  className="px-2 py-1 border rounded dark:text-textHeadingDark dark:bg-backgroundDark border-borderPrimary dark:border-borderPrimaryDark"
                >
                  Last
                </button>
              </div>
            </div>
          </>
        )}
        {viewStyle === "grid" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 tab:grid-cols-4 gap-[20px]">
            {companies.map((company, index) => (
              <CompanyCards key={index} company={company} />
            ))}
          </div>
        )}
      </div>
    </SectionLayout>
  );
};

export default FundingTable;
