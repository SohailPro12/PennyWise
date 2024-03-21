import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
import Table from "../components/Table";

export function ExpensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

const handleHomeClick = () => {
  // Navigate to the specified URL in the same window/tab
  window.location.href = "/";
};
const ExpensesPage = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>({expenses.length} total)</small>
          </h2>
          <Table expenses={expenses} />
        </div>
      ) : (
        <p>No Expenses to show</p>
      )}
      <div className="btn-container">
        {" "}
        {/* New container for buttons */}
        <button className="btn btn--Home" onClick={handleHomeClick}>
          Home
        </button>
        {/* Add the History button here (optional) */}
      </div>
    </div>
  );
};

export default ExpensesPage;
