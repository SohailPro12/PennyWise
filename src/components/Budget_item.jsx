import { Form, Link } from "react-router-dom";
import {
  calculateSpentByBudget,
  formatCurrency,
  formatPercentage,
} from "../helpers";

import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/outline";

const BudgetItem = ({ budget, showDelete = false }) => {
  const { id, name, amount } = budget;
  const spent = calculateSpentByBudget(id);
  const remaining = amount - spent;
  const spentPercentage = (spent / amount) * 100;

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const color = getRandomColor();

  return (
    <div className="card border-primary mb-4">
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">{formatCurrency(amount)} Budgeted</p>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${spentPercentage}%`, backgroundColor: color }}
            aria-valuenow={spentPercentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {formatPercentage(spent / amount)}
          </div>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <small>
            <strong>Spent:</strong> {formatCurrency(spent)}
            {"-----------"}
          </small>
          <small>
            <strong>Remaining:</strong> {formatCurrency(remaining)}
          </small>
        </div>
        <div className="mt-4">
          {showDelete ? (
            <div className="d-flex justify-content-center justify-content-sm-start">
              <Form
                method="post"
                action="delete"
                onSubmit={(event) => {
                  if (
                    !confirm("Are you sure you want to delete this budget?")
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <button type="submit" className="btn btn-danger">
                  <span>Delete</span>
                  <TrashIcon width={20} />
                </button>
              </Form>
            </div>
          ) : (
            <div className="d-flex justify-content-center justify-content-md-start">
              <Link to={`/budget/${id}`} className="btn btn-danger">
                <span>View Details</span>
                <BanknotesIcon width={20} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetItem;
