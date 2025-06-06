import React, { useMemo, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import dayjs from "dayjs";
import SmallHeading from "../../components/SmallHeading";

const fundingData = [
  {
    share_class: "Series A",
    funding_date: "2023-06-01",
    amount_raised: 1000,
    price_per_share: 600,
    post_money_valuation: 10000,
  },
  {
    share_class: "Series A",
    funding_date: "2024-06-02",
    amount_raised: 11000,
    price_per_share: 610,
    post_money_valuation: 11000,
  },
  {
    share_class: "Series B",
    funding_date: "2025-06-03",
    amount_raised: 112000,
    price_per_share: 620,
    post_money_valuation: 12000,
  },
  // Add more data as needed
];

const getTickFormatter = (dates) => {
  return (tick) => {
    const date = dayjs(tick);
    const month = date.month();
    const year = date.year();
    return month % 6 === 0 ? date.format("MMM YYYY") : "";
  };
};

const FundingChart = () => {
  const [data] = useState(fundingData);

  const sortedData = useMemo(
    () =>
      [...data].sort((a, b) =>
        dayjs(a.funding_date).isAfter(dayjs(b.funding_date)) ? 1 : -1
      ),
    [data]
  );

  return (
    <div className="p-4 rounded-xl shadow w-full">
      <SmallHeading fontWeight={`font-bold`} extraClass={`pb-[15px]`}>
        Funding Share Price History
      </SmallHeading>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={sortedData}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="funding_date"
            tickFormatter={getTickFormatter(
              sortedData.map((d) => d.funding_date)
            )}
            interval={0}
            minTickGap={20}
            tick={{ fontSize: 10 }}
          />
          <YAxis tick={{ fontSize: 10 }} />
          <Tooltip
            contentStyle={{ fontSize: "0.8rem" }}
            labelFormatter={(label) => dayjs(label).format("MMM D, YYYY")}
            formatter={(value, name) => [value, name.replaceAll("_", " ")]}
          />
          <Area
            type="linear"
            dataKey="amount_raised"
            stroke="#825ABA"
            fill="#825ABA33"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          >
            <LabelList dataKey="share_class" position="top" />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FundingChart;
