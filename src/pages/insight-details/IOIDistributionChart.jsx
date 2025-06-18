import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data: Replace with your real dataset
const data = [
  { date: "Jan 20", buy: 40, sell: 60 },
  { date: "Jul 20", buy: 55, sell: 45 },
  { date: "Jan 21", buy: 70, sell: 30 },
  { date: "Jul 21", buy: 60, sell: 40 },
  { date: "Jan 22", buy: 35, sell: 65 },
  { date: "Jul 22", buy: 40, sell: 60 },
  { date: "Jan 23", buy: 50, sell: 50 },
  { date: "Jul 23", buy: 45, sell: 55 },
  { date: "Jan 24", buy: 60, sell: 40 },
  { date: "Jul 24", buy: 50, sell: 50 },
  { date: "Jan 25", buy: 65, sell: 35 },
];

// Normalize the values to percentages (optional if your data is already percent)
const normalizedData = data.map((d) => {
  const total = d.buy + d.sell;
  return {
    ...d,
    buy: (d.buy / total) * 100,
    sell: (d.sell / total) * 100,
  };
});

export default function IOIDistributionChart() {
  return (
    <div className="mt-10 p-4 bg-white rounded-2xl shadow-md w-full">
      <h2 className="text-xl font-semibold mb-4">
        Distribution of New Buy and Sell IOIs on Forge Markets
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={normalizedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
          <Tooltip formatter={(val) => `${val.toFixed(1)}%`} />
          <Legend />
          <Bar
            dataKey="buy"
            stackId="a"
            fill="#825ABA"
            name="New or Updated IOIs: # Buys"
          />
          <Bar
            dataKey="sell"
            stackId="a"
            fill="#3895A3"
            name="New or Updated IOIs: # Sells"
          />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-right text-sm text-gray-400 mt-2">
        Forge Data as of 3/31/25
      </p>
    </div>
  );
}
