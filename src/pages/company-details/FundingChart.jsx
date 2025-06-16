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

const getTickFormatter = (dates) => {
  return (tick) => {
    const date = dayjs(tick);
    const month = date.month();
    const year = date.year();
    return month % 6 === 0 ? date.format("MMM YYYY") : "";
  };
};

const FundingChart = ({ historyChart }) => {
  const [data] = useState(historyChart);

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
