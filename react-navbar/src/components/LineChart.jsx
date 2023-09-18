import { LineChart as LC, Line, XAxis, YAxis } from "recharts";
const LineChart = () => {
  const studentData = [
    { id: 1, name: "John", math: 85, physics: 85, chemistry: 72 },
    { id: 2, name: "Emma", math: 78, physics: 92, chemistry: 89 },
    { id: 3, name: "Oliver", math: 92, physics: 78, chemistry: 75 },
    { id: 4, name: "Sophia", math: 67, physics: 65, chemistry: 68 },
    { id: 5, name: "Liam", math: 89, physics: 88, chemistry: 90 },
    { id: 6, name: "Mia", math: 76, physics: 74, chemistry: 81 },
    { id: 7, name: "Noah", math: 95, physics: 91, chemistry: 93 },
    { id: 8, name: "Ava", math: 72, physics: 79, chemistry: 76 },
    { id: 9, name: "William", math: 88, physics: 87, chemistry: 84 },
    { id: 10, name: "Isabella", math: 81, physics: 70, chemistry: 71 },
  ];

  return (
    <div>
      <LC width={800} height={400} data={studentData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line dataKey="math" stroke="red"></Line>
        <Line dataKey="physics" stroke="blue"></Line>
        <Line dataKey="chemistry" stroke="green"></Line>
      </LC>
    </div>
  );
};

export default LineChart;
