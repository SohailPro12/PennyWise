import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  const formRef = useRef();
  const focusRef = useRef();

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-danger">Create Budget</h2>
      <fetcher.Form method="post" className="row g-3" ref={formRef}>
        <div className="col-md-6">
          <label htmlFor="newBudget" className="form-label text-danger">
            Budget Name
          </label>
          <input
            type="text"
            name="newBudget"
            id="newBudget"
            className="form-control"
            placeholder="e.g., Groceries.."
            required
            ref={focusRef}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="newBudgetAmount" className="form-label text-danger">
            Amount
          </label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              type="number"
              step="0.01"
              name="newBudgetAmount"
              id="newBudgetAmount"
              className="form-control"
              placeholder="e.g., 350"
              required
              inputMode="decimal"
            />
          </div>
        </div>
        <input type="hidden" name="_action" value="createBudget" />
        <div className="col-md-12 text-center">
          <button
            type="submit"
            className="btn btn-danger btn-pennywise"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span>Submitting...</span>
            ) : (
              <>
                <span>Create Budget</span>
                <CurrencyDollarIcon className="ms-2" width={20} />
              </>
            )}
          </button>
        </div>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
