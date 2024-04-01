import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

import AddBudgetForm from "../components/Add_budget_form";
import AddExpenseForm from "../components/Addexpenseform";
import BudgetItem from "../components/Budget_item";
import { createBudget, createExpense, deleteItem, fetchData } from "../helpers";
import Intro from "../components/auth_alternative";
import { useNavigate } from "react-router-dom";
import ReportGenerator from "../components/ReportGenerator";

export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
}

export async function dashboardAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      window.location.href = "/Home";
      return toast.success(`Welcome, ${values.userName}`);
    } catch (e) {
      throw new Error("There was a problem creating your account.");
    }
  }
  if (_action === "createBudget") {
    try {
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget Created!");
    } catch (e) {
      throw new Error("There was a problem creating your Budget.");
    }
  }
  if (_action === "createExpense") {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} added!`);
    } catch (e) {
      throw new Error("There was a problem creating your Budget.");
    }
  }
  if (_action === "deleteExpense") {
    try {
      deleteItem({
        key: "expenses",
        id: values.expenseId,
      });
      return toast.success(`Expense deleted`);
    } catch (e) {
      throw new Error("There was a problem deleting your Budget.");
    }
  }
}

const handleHistoryClick = () => {
  window.location.href = "/expenses";
};

const Dashboard = () => {
  const { userName, budgets, expenses } = useLoaderData();

  return (
    <>
      {userName ? (
        <div className="container mt-4">
          <h1 className="mb-4 d-flex justify-content-between align-items-center">
            Welcome, <span className="text-danger">{userName}</span>
            <button
              className="btn btn-success"
              style={{ marginLeft: "auto" }}
              onClick={handleHistoryClick}
            >
              History
            </button>
          </h1>
          <div className="row">
            {budgets && budgets.length > 0 ? (
              <>
                <div className="col-md-6 mb-4">
                  <AddBudgetForm />
                </div>
                <div className="col-md-6 mb-4">
                  <AddExpenseForm budgets={budgets} />
                </div>
                <div className="col-md-12">
                  <h2>Existing Budgets</h2>
                  <div className="budgets d-flex flex-wrap">
                    {budgets.map((budget) => (
                      <BudgetItem key={budget.id} budget={budget} />
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="col-md-12">
                <p>Every Penny counts, track your money, track your success!</p>
                <p>Create a budget to get started</p>
                <AddBudgetForm />
              </div>
            )}
            <div className="col-md-12 mt-4">
              <ReportGenerator expenses={expenses} budgets={budgets} />
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};

export default Dashboard;
