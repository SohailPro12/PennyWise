const generrateRandomColor = () => {
  const existingBudgets = fetchData("budgets")?.length ?? 0;
  return `${existingBudgets * 34} 65% 50%`;
};

// local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
//create budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generrateRandomColor(),
  };
  const existingBudgets = fetchData("budgets") ?? [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );
};
// Get all items from local storage
export const getAllMatchingItems = ({ category, key, value }) => {
  const items = fetchData(category) ?? [];
  return items.filter((item) => item[key] === value);
};
// create expense
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };
  const existingExpenses = fetchData("expenses") ?? [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
};

export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};

//total spent by budget
export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    // check if expense.id === budgetId I passed in
    if (expense.budgetId !== budgetId) return acc;

    // add the current amount to my total
    return (acc += expense.amount);
  }, 0);
  return budgetSpent;
};

//formatting

//FORMAT DATE
export const formatDate = (epoch) => new Date(epoch).toLocaleDateString();

//format percentages
export const formatPercentage = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// Format currency
export const formatCurrency = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "MAD",
  });
};
