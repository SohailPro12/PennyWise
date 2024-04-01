import React from "react";
import { saveAs } from "file-saver";

const generateReport = (expenses, budgets) => {
  // Get current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  // Calculate total expenses for each budget
  const budgetExpenses = budgets.map((budget) => {
    const totalExpense = expenses
      .filter((expense) => expense.budgetId === budget.id)
      .reduce((acc, curr) => acc + curr.amount, 0);
    const remainingBudget = budget.amount - totalExpense;
    return {
      ...budget,
      totalExpense,
      remainingBudget,
    };
  });

  // Format data into a string
  let reportContent = `Monthly Report: ${currentMonth} ${currentYear}\n\n`;

  // Add expenses section
  reportContent += "Expenses:\n";
  expenses.forEach((expense) => {
    const expenseDate = new Date(expense.createdAt).toLocaleDateString();
    reportContent += `- ${expense.name}: $${expense.amount.toFixed(
      2
    )} - Created at ${expenseDate}\n`;
  });
  reportContent += "\n";

  // Add budgets section
  reportContent += "Budgets:\n";
  budgetExpenses.forEach((budget) => {
    reportContent += `- ${
      budget.name
    }: Total Expense: $${budget.totalExpense.toFixed(
      2
    )}, Remaining Budget: $${budget.remainingBudget.toFixed(2)}\n`;
  });

  // Create a Blob with the report content
  const reportBlob = new Blob([reportContent], {
    type: "text/plain;charset=utf-8",
  });

  // Save the Blob as a file
  saveAs(
    reportBlob,
    `monthly_report_${currentMonth.toLowerCase()}_${currentYear}.txt`
  );
};

const ReportGenerator = ({ expenses, budgets }) => {
  const handleGenerateReport = () => {
    generateReport(expenses, budgets);
  };

  return (
    <button className="btn btn-primary" onClick={handleGenerateReport}>
      Download Monthly Report
    </button>
  );
};

export default ReportGenerator;
