import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import BigText from "../../components/BigText";

export default function PieDistributionChart({
  data,
  title = "Pie Chart Distribution",
  id,
}) {
  const series = data.series[0]; // Only the first series is relevant for pie chart

  // Create color palette fallback
  const fallbackColors = [
    "#825ABA",
    "#3895A3",
    "#FFA500",
    "#4CAF50",
    "#FF69B4",
    "#1E90FF",
  ];

  // Transform data into format for PieChart
  const transformedData = data.labels.map((label, index) => ({
    name: label,
    value: parseFloat(series.values[index]),
    color: series.color || fallbackColors[index % fallbackColors.length],
  }));

  return (
    <div id={id} className="mt-10 p-4 w-full">
      <BigText
        fontWeight={`font-semibold`}
        textColor={`text-textHeading`}
        textColorDark={`dark:text-textHeadingDark`}
        extraClass={`uppercase`}
      >
        {title}
      </BigText>
      <div className="mt-10 p-4 bg-white rounded-2xl shadow-md w-full">
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={transformedData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={120}
              innerRadius={40}
              fill="#8884d8"
              label
            >
              {transformedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <p className="text-right text-sm text-gray-400 mt-2">
          Forge Data as of 3/31/25
        </p>
      </div>
    </div>
  );
}
