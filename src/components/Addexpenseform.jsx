// react imports
import { useEffect, useRef } from "react";

// rrd imports
import { useFetcher } from "react-router-dom";

// library imports
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      // clear form
      formRef.current.reset();
      // reset focus
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="container mt-4r">
      <h2 className="text-center mb-4 text-danger">
        Add New{" "}
        <span className="accent">
          {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
        </span>{" "}
        Expense
      </h2>
      <fetcher.Form method="post" className="row g-3" ref={formRef}>
        <div className="col-md-6">
          <div className="grid-xs">
            <label htmlFor="newExpense" className="form-label text-danger">
              Expense Name
            </label>
            <input
              type="text"
              name="newExpense"
              id="newExpense"
              placeholder="e.g., Coffee"
              className="form-control"
              ref={focusRef}
              required
            />
          </div>
          <div className="col-md-6">
            <label
              htmlFor="newExpenseAmount"
              className="form-label text-danger"
            >
              Amount
            </label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="number"
                step="0.01"
                inputMode="decimal"
                name="newExpenseAmount"
                id="newExpenseAmount"
                className="form-control"
                placeholder="e.g., 3.50"
                required
              />
            </div>
          </div>
        </div>
        <div className={budgets.length === 1 ? "col-md-6 d-none" : "col-md-6"}>
          <label htmlFor="newExpenseBudget" className="form-label text-danger">
            Budget Category
          </label>
          <select
            name="newExpenseBudget"
            id="newExpenseBudget"
            className="form-select"
            required
          >
            {budgets
              .sort((a, b) => a.createdAt - b.createdAt)
              .map((budget) => {
                return (
                  <option key={budget.id} value={budget.id}>
                    {budget.name}
                  </option>
                );
              })}
          </select>
        </div>
        <input type="hidden" name="_action" value="createExpense" />
        <div className="col-md-12 text-center">
          <button
            type="submit"
            className="btn btn-danger"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <span>Add Expense</span>
                <PlusCircleIcon className="ms-2" width={20} />
              </>
            )}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
};
export default AddExpenseForm;
