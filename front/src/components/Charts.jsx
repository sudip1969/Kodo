import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Cell,
} from "recharts";

function Charts() {
  const latencyData = [
    {
      time: "10:00",
      Liquid: 85,
      Dots: 210,
      Cohere: 175,
      Flint: 140,
      Xingchen: 260,
      Nemotron: 320,
      Gemma: 190,
    },
    {
      time: "10:15",
      Liquid: 90,
      Dots: 225,
      Cohere: 168,
      Flint: 150,
      Xingchen: 245,
      Nemotron: 335,
      Gemma: 185,
    },
    {
      time: "10:30",
      Liquid: 82,
      Dots: 205,
      Cohere: 182,
      Flint: 138,
      Xingchen: 270,
      Nemotron: 310,
      Gemma: 198,
    },
    {
      time: "10:45",
      Liquid: 95,
      Dots: 218,
      Cohere: 170,
      Flint: 145,
      Xingchen: 255,
      Nemotron: 342,
      Gemma: 180,
    },
    {
      time: "11:00",
      Liquid: 88,
      Dots: 232,
      Cohere: 178,
      Flint: 155,
      Xingchen: 238,
      Nemotron: 328,
      Gemma: 205,
    },
    {
      time: "11:15",
      Liquid: 80,
      Dots: 215,
      Cohere: 165,
      Flint: 142,
      Xingchen: 265,
      Nemotron: 315,
      Gemma: 192,
    },
  ];

  const successRateData = [
    { name: "Liquid LFM 2.6B", rate: 98.2, fill: "#3b82f6" },
    { name: "Dots 3 Note", rate: 99.1, fill: "#10b981" },
    { name: "Cohere North", rate: 99.4, fill: "#f59e0b" },
    { name: "Flint v1.0", rate: 97.6, fill: "#8b5cf6" },
    { name: "Xing 4.0 29B", rate: 96.9, fill: "#ef4444" },
    { name: "Nemotron 3.5", rate: 99.7, fill: "#06b6d4" },
    { name: "Gemma 4 31B", rate: 99.3, fill: "#ec4899" },
  ];
  return (
    <div className="flex w-full justify-between items-center gap-6">
      {/* Chart 1: Latency */}
      <div className=" w-full border border-slate-200 p-5 shadow-sm rounded-md h-80 flex flex-col">
        <h2 className="font-mono text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">
          Latency Over Time (ms)
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={latencyData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              vertical={false}
            />
            <XAxis
              dataKey="time"
              stroke="#94a3b8"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#94a3b8"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                border: "1px solid #e2e8f0",
                fontFamily: "monospace",
              }}
            />
            <Legend
              iconType="circle"
              wrapperStyle={{ fontSize: "12px", fontFamily: "monospace" }}
            />
            <Line
              type="monotone"
              dataKey="Liquid"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Dots"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Cohere"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Flint"
              stroke="#8b5cf6"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Xingchen"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Nemotron"
              stroke="#06b6d4"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line
              type="monotone"
              dataKey="Gemma"
              stroke="#ec4899"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Chart 2: Success Rate */}
      <div className=" w-full border border-slate-200 p-5 shadow-sm rounded-md h-80 flex flex-col">
        <h2 className="font-mono text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">
          Model Reliability (%)
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={successRateData}
            layout="vertical"
            margin={{ top: 0, right: 20, bottom: 0, left: 20 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              horizontal={false}
            />
            <XAxis
              type="number"
              domain={[90, 100]}
              stroke="#94a3b8"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              dataKey="name"
              type="category"
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              width={80}
            />
            <Tooltip
              cursor={{ fill: "#f8fafc" }}
              contentStyle={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                border: "1px solid #e2e8f0",
                fontFamily: "monospace",
              }}
            />
            <Bar dataKey="rate" radius={[0, 4, 4, 0]} barSize={18}>
              {successRateData.map((entry) => (
                <Cell key={entry.name} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;
