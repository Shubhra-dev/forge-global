import { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import SectionLayout from "../../ui/SectionLayout";
import Heading from "../../components/Heading";
import BigText from "../../components/BigText";
import SmallHeading from "../../components/SmallHeading";

const companies = [
  {
    name: "Gong",
    sector: "Enterprise Software",
    subsector: "Sales & Marketing / Adtech",
    weight: "1.64%",
    minReturn: "-9%",
    maxReturn: "6%",
  },
  {
    name: "Addepar",
    sector: "Fintech",
    subsector: "Fintech software",
    weight: "1.45%",
    minReturn: "-7%",
    maxReturn: "4%",
  },
  {
    name: "Anduril",
    sector: "Industrial",
    subsector: "Aerospace & Defense",
    weight: "2.20%",
    minReturn: "-2%",
    maxReturn: "0%",
  },
  {
    name: "Anthropic",
    sector: "Enterprise Software",
    subsector: "Data Intelligence",
    weight: "2.30%",
    minReturn: "-4%",
    maxReturn: "5%",
  },
  {
    name: "Automation Anywhere",
    sector: "Enterprise Software",
    subsector: "Sales & Marketing / Adtech",
    weight: "0.97%",
    minReturn: "-10%",
    maxReturn: "2%",
  },
  {
    name: "Cerebras",
    sector: "Technology Hardware",
    subsector: "Computing Hardware",
    weight: "1.38%",
    minReturn: "-8%",
    maxReturn: "3%",
  },
  {
    name: "Chainalysis",
    sector: "Fintech",
    subsector: "Blockchain software",
    weight: "1.42%",
    minReturn: "0%",
    maxReturn: "4%",
  },
];

const sectorAllocation = [
  { name: "Enterprise Software", value: 35.0 },
  { name: "Fintech", value: 24.0 },
  { name: "Industrial", value: 20.0 },
  { name: "Consumer & Lifestyle", value: 12.6 },
  { name: "Healthcare", value: 3.0 },
  { name: "Technology Hardware", value: 2.0 },
  { name: "Energy", value: 1.5 },
  { name: "Transportation", value: 1.1 },
  { name: "Fundtech", value: 1.1 },
];

const COLORS = [
  "#1f77b4",
  "#ff7f0e",
  "#2ca02c",
  "#d62728",
  "#9467bd",
  "#8c564b",
  "#e377c2",
  "#7f7f7f",
  "#bcbd22",
];

const IndexComposition = () => {
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedSubsector, setSelectedSubsector] = useState("");

  const filteredCompanies = companies.filter((company) => {
    const matchSector = selectedSector
      ? company.sector === selectedSector
      : true;
    const matchSubsector = selectedSubsector
      ? company.subsector === selectedSubsector
      : true;
    return matchSector && matchSubsector;
  });

  return (
    <SectionLayout>
      <Heading align={`text-left`} extraClass={`pb-5`}>
        Index composition
      </Heading>

      <div className="w-full rounded-[20px] p-5 shadow-gray-200 shadow-allSide dark:shadow-gray-800">
        <BigText textColor={`text-textHeading`}>Companies</BigText>
        {/* Filters */}
        <div className="flex flex-wrap sm:flex-nowrap items-end justify-normal gap-5 pt-6">
          <div>
            <SmallHeading extraClass={`pb-2`}>Sector</SmallHeading>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="px-3 py-3 text-sm rounded-xl border border-borderPrimary dark:bg-gray-700 dark:text-textSubheadingDark dark:border-borderPrimaryDark"
            >
              <option value="">All Sectors</option>
              {[...new Set(companies.map((c) => c.sector))].map((sector) => (
                <option key={sector} value={sector}>
                  {sector}
                </option>
              ))}
            </select>
          </div>
          <div>
            <SmallHeading extraClass={`pb-2`}>Subsector</SmallHeading>
            <select
              value={selectedSubsector}
              onChange={(e) => setSelectedSubsector(e.target.value)}
              className="px-3 py-3 text-sm rounded-xl border border-borderPrimary dark:bg-gray-700 dark:text-textSubheadingDark dark:border-borderPrimaryDark"
            >
              <option value="">All Subsectors</option>
              {[...new Set(companies.map((c) => c.subsector))].map((sub) => (
                <option key={sub} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => {
              setSelectedSector("");
              setSelectedSubsector("");
            }}
            className="bg-primary text-white font-medium px-6 py-3"
          >
            Reset
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-8">
          <table className="min-w-full border border-borderPrimary dark:border-borderPrimaryDark">
            <thead className="bg-gray-100 dark:bg-gray-800 text-left text-xs font-workSans text-textParagraph dark:text-textParagraphDark font-normal">
              <tr>
                <th className="py-3 px-5 border">Name</th>
                <th className="py-3 px-5 border">Sector</th>
                <th className="py-3 px-5 border">Subsector</th>
                <th className="py-3 px-5 border">Weight</th>
                <th className="py-3 px-5 border">Min Return</th>
                <th className="py-3 px-5 border">Max Return</th>
              </tr>
            </thead>
            <tbody>
              {filteredCompanies.map((company, idx) => (
                <tr
                  key={idx}
                  className="text-sm dark:text-textSubheadingDark font-medium"
                >
                  <td className="py-3 px-5 border text-secondary font-medium">
                    {company.name}
                  </td>
                  <td className="py-3 px-5 border">{company.sector}</td>
                  <td className="py-3 px-5 border">{company.subsector}</td>
                  <td className="py-3 px-5 border">{company.weight}</td>
                  <td
                    className={`py-3 px-5 border ${
                      company.minReturn.startsWith("-")
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {company.minReturn}
                  </td>
                  <td
                    className={`py-3 px-5 border ${
                      company.maxReturn.startsWith("-")
                        ? "text-red-600"
                        : "text-green-600"
                    }`}
                  >
                    {company.maxReturn}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sector Allocation Chart */}
      <div className="w-full rounded-[20px] p-5 border border-borderPrimary dark:border-borderPrimaryDark mt-12">
        <BigText textColor={`text-textHeading`}>Sector allocation</BigText>
        <div className="flex flex-col sm:flex-row items-center pt-7">
          <div className="w-full sm:w-1/2 min-h-[250px] h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sectorAllocation}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={130}
                  innerRadius={40}
                  paddingAngle={2}
                >
                  {sectorAllocation.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex w-full sm:w-1/2 flex-col md:pl-6 mt-4 md:mt-0 text-sm dark:text-textSubheadingDark">
            {sectorAllocation.map((entry, index) => (
              <div key={index} className="flex items-center mr-4 mb-2 md:mb-1">
                <span
                  className="inline-block w-3 h-3 rounded mr-2"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                {entry.name}: {entry.value}%
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default IndexComposition;
