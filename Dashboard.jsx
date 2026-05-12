import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, BarChart, Bar } from "recharts";

const dummyData = [
  { month: "Jan", income: 4000, expense: 2000 },
  { month: "Feb", income: 3000, expense: 1500 },
  { month: "Mar", income: 5000, expense: 2500 },
];

export default function Dashboard() {
  const [data, setData] = useState(dummyData);
  const [dark, setDark] = useState(false);

  const totalIncome = data.reduce((a, b) => a + b.income, 0);
  const totalExpense = data.reduce((a, b) => a + b.expense, 0);

  const downloadCSV = () => {
    const csv = ["Month,Income,Expense", ...data.map(d => `${d.month},${d.income},${d.expense}`)].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "report.csv";
    a.click();
  };

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black", minHeight: "100vh", padding: "20px" }}>
      <h1>Financial Dashboard</h1>
      <button onClick={() => setDark(!dark)}>Toggle Dark Mode</button>
      <button onClick={downloadCSV}>Download CSV</button>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div>Total Income: {totalIncome}</div>
        <div>Total Expense: {totalExpense}</div>
        <div>Savings: {totalIncome - totalExpense}</div>
      </div>

      <h2>Line Chart</h2>
      <LineChart width={500} height={300} data={data}>
        <XAxis dataKey="month"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Line type="monotone" dataKey="income" stroke="green"/>
        <Line type="monotone" dataKey="expense" stroke="red"/>
      </LineChart>

      <h2>Bar Chart</h2>
      <BarChart width={500} height={300} data={data}>
        <XAxis dataKey="month"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="income" fill="green"/>
        <Bar dataKey="expense" fill="red"/>
      </BarChart>
    </div>
  );
}
