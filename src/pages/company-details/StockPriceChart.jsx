import React, { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";
import allChartData from "./fullDailyChartData.json";
import SubTitle from "../../components/SubTitle";
const filterConfig = {
  "3M": { value: 3, type: "month" },
  "6M": { value: 6, type: "month" },
  "1Y": { value: 1, type: "year" },
  MAX: null,
};

const getTickFormatter = (filter) => {
  return (tick) => {
    const date = dayjs(tick);

    if (filter === "MAX") {
      return date.month() % 3 === 0 && date.date() === 1
        ? date.format("MMM YY")
        : "";
    }
    if (filter === "1Y") {
      return date.date() === 1 ? date.format("MMM") : "";
    }
    if (filter === "6M") {
      return date.date() === 1 || date.date() === 15
        ? date.format("D MMM")
        : "";
    }
    if (filter === "3M") {
      return date.date() % 7 === 0 ? date.format("D MMM") : "";
    }
    return date.format("MMM D");
  };
};

const StockPriceChart = () => {
  const [selectedFilter, setSelectedFilter] = useState("1Y");

  const filteredData = useMemo(() => {
    const config = filterConfig[selectedFilter];
    if (!config) return allChartData;

    const endDate = dayjs();
    const startDate = endDate.subtract(config.value, config.type);

    return allChartData.filter((d) => dayjs(d.date).isAfter(startDate));
  }, [selectedFilter]);

  return (
    <div>
      <div className="mt-7 mb-6">
        <SubTitle
          fontWeight={`font-medium`}
          font={`font-clash`}
          extraClass={`pb-5`}
        >
          “Company Name” stock price
        </SubTitle>
        <div className="flex space-x-2">
          {Object.keys(filterConfig).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedFilter(key)}
              className={`p-2 text-sm rounded-md border ${
                selectedFilter === key
                  ? "bg-primary text-white border-primary"
                  : "text-textParagraph dark:text-textParagraphDark border-textParagraph"
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={filteredData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10874E" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#10874E" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            tickFormatter={getTickFormatter(selectedFilter)}
            interval={0}
            tick={{ fontSize: 10 }}
            minTickGap={10}
          />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip
            contentStyle={{ fontSize: "0.8rem" }}
            labelFormatter={(label) => dayjs(label).format("MMM D, YYYY")}
          />
          <Area
            type="linear"
            dataKey="price"
            stroke="#10874E"
            fillOpacity={1}
            fill="url(#colorPrice)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockPriceChart;
