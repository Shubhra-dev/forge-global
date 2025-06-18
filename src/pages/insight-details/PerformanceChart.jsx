import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { date: "Feb 1", FPMI: 0, FAPMI: 0, SPY: 0 },
  { date: "Feb 15", FPMI: 5, FAPMI: 3, SPY: 2 },
  { date: "Feb 25", FPMI: 6, FAPMI: 5, SPY: 0 },
  { date: "Mar 5", FPMI: 20, FAPMI: 6, SPY: -2 },
  { date: "Mar 15", FPMI: 33.5, FAPMI: 9.4, SPY: -5 },
  { date: "Mar 25", FPMI: 33.5, FAPMI: 9.4, SPY: -8.0 },
  { date: "Apr 15", FPMI: 33.5, FAPMI: 9.4, SPY: -8.0 },
];

const formatXAxis = (tick, index, allTicks) => {
  const currentMonth = tick.split(" ")[0];
  const previousMonth = index > 0 ? allTicks[index - 1].split(" ")[0] : null;
  return currentMonth !== previousMonth ? currentMonth : "";
};

export default function PerformanceChart() {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 border rounded shadow bg-white">
      <h2 className="text-lg font-semibold text-center mb-4">
        Performance of Forge Private Market Index (FPMI) vs. SPY vs. Forge
        Accuidity Private Market Index (FAPMI)
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 40, left: 0, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(tick, index) =>
              formatXAxis(
                tick,
                index,
                data.map((d) => d.date)
              )
            }
          />
          <YAxis domain={[-20, 40]} tickFormatter={(val) => `${val}%`} />
          <Tooltip formatter={(val) => `${val}%`} />
          <Legend />
          <Line
            type="stepAfter"
            dataKey="FPMI"
            stroke="#F97316"
            strokeWidth={3}
            dot={false}
            name="FPMI"
          />
          <Line
            type="stepAfter"
            dataKey="FAPMI"
            stroke="#D946EF"
            strokeWidth={3}
            dot={false}
            name="FAPMI"
          />
          <Line
            type="stepAfter"
            dataKey="SPY"
            stroke="#A855F7"
            strokeWidth={3}
            dot={false}
            name="SPY"
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-right text-xs text-gray-500 mt-2">
        Forge Data as of 4/15/25
      </p>
    </div>
  );
}
