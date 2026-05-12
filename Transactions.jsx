import { useState } from "react";

export default function Transactions() {
  const [data, setData] = useState([
    { month: "Jan", income: 4000, expense: 2000 },
    { month: "Feb", income: 3000, expense: 1500 },
  ]);

  const [month, setMonth] = useState("");
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const addTransaction = () => {
    setData([...data, { month, income: Number(income), expense: Number(expense) }]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Transaction</h2>
      <input placeholder="Month" onChange={e => setMonth(e.target.value)} />
      <input placeholder="Income" onChange={e => setIncome(e.target.value)} />
      <input placeholder="Expense" onChange={e => setExpense(e.target.value)} />
      <button onClick={addTransaction}>Add</button>

      <h2>Transactions</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr><th>Month</th><th>Income</th><th>Expense</th></tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.month}</td>
              <td>{d.income}</td>
              <td>{d.expense}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
