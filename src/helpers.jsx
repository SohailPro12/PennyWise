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
//delet item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
