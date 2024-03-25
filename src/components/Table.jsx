import ExpenseItem from "./Expense_Item";

const Table = ({ expenses }) => {
  return (
    <div className="table-responsive">
      {" "}
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {["Name", "Amount", "Date", "Budget", ""].map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
