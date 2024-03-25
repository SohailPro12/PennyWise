import { useLoaderData } from "react-router-dom";
import { deleteItem, fetchData } from "../helpers";
import Table from "../components/Table";
import { toast } from "react-toastify";

export function ExpensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}

const handleHomeClick = () => {
  // Navigate to the specified URL in the same window/tab
  window.location.href = "/";
};

export async function expensesAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success("Expense deleted!");
    } catch (e) {
      throw new Error("There was a problem deleting your expense.");
    }
  }
}

const ExpensesPage = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h1 className="mb-0">All Expenses</h1>
            <button className="btn btn-warning" onClick={handleHomeClick}>
              Home
            </button>
          </div>
          {expenses && expenses.length > 0 ? (
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">
                  Recent Expenses <small>({expenses.length} total)</small>
                </h2>
                <Table expenses={expenses} />
              </div>
            </div>
          ) : (
            <p>No Expenses to show</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpensesPage;
