import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { formatCurrency } from "../helpers";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const generateReport = (expenses, budgets) => {
  // Get current month and year
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString("default", { month: "long" });
  const currentYear = currentDate.getFullYear();

  // Initialize data for the table
  const tableData = [];

  // Iterate over each budget
  budgets.forEach((budget) => {
    // Calculate total expenses for the budget
    const totalExpense = expenses
      .filter((expense) => expense.budgetId === budget.id)
      .reduce((acc, curr) => acc + curr.amount, 0);

    // Calculate remaining budget
    const remainingBudget = formatCurrency(budget.amount - totalExpense);

    // Push budget information to the table data
    tableData.push([
      { text: budget.name, style: "tableCell" },
      { text: `$${budget.amount.toFixed(2)}`, style: "tableCell" },
      { text: "", style: "tableCell" }, // Placeholder for total expenses
      { text: "", style: "tableCell" }, // Placeholder for money allocated for each expense
      { text: "", style: "tableCell" }, // Placeholder for date of spending
      { text: `${remainingBudget}`, style: "tableCell" },
    ]);

    // Push expenses information to the table data
    expenses.forEach((expense) => {
      if (expense.budgetId === budget.id) {
        tableData.push([
          { text: "", style: "tableCell" }, // Empty cell for budget name (only shown once per budget)
          { text: "", style: "tableCell" }, // Empty cell for budget amount (only shown once per budget)
          { text: expense.name, style: "tableCell" }, // Expense name
          { text: `${formatCurrency(expense.amount)}`, style: "tableCell" }, // Expense amount
          {
            text: new Date(expense.createdAt).toLocaleDateString(),
            style: "tableCell",
          }, // Date of spending
          { text: "", style: "tableCell" }, // Empty cell for remaining budget (only shown once per budget)
        ]);
      }
    });
  });

  // Define the table layout
  const table = {
    widths: ["*", "auto", "auto", "auto", "auto", "auto"],
    body: [
      [
        { text: "Budget Categories", style: "tableHeader" },
        { text: "Money Allocated", style: "tableHeader" },
        { text: "Expenses", style: "tableHeader" },
        { text: "Money Allocated for Each Expense", style: "tableHeader" },
        { text: "Date of Spending", style: "tableHeader" },
        { text: "Remaining", style: "tableHeader" },
      ],
      ...tableData,
    ],
  };

  // Define Insights and Recommendations
  const insightsAndRecommendations = [
    {
      text: "Insights and Recommendations",
      style: "subheader",
    },
    {
      text: "Based on your spending patterns and budget allocations, here are some insights and recommendations to improve your finances:",
      style: "body",
    },
    {
      ul: [
        "Identify high spending categories and consider reducing expenses in those areas.",
        "Set specific financial goals such as saving for emergencies, retirement, or major purchases.",
        "Review your budget regularly and adjust allocations based on changing priorities or financial circumstances.",
        "Consider automating savings contributions or bill payments to ensure consistency and avoid late fees.",
        "Explore opportunities for additional income streams or investment options to grow your wealth.",
      ],
    },
  ];

  // Define document definition
  const docDefinition = {
    content: [
      {
        text: `Monthly Report: ${currentMonth} ${currentYear}`,
        style: "header",
      },
      { table, style: "table" },
      ...insightsAndRecommendations,
    ],
    styles: {
      header: { fontSize: 16, bold: true, margin: [0, 0, 0, 10] },
      subheader: { fontSize: 14, bold: true, margin: [0, 10, 0, 5] },
      body: { fontSize: 12, margin: [0, 0, 0, 10] },
      table: { margin: [0, 5, 0, 15] },
      tableHeader: {
        bold: true,
        fontSize: 13,
        color: "black",
        fillColor: "#eeeeee",
        alignment: "center",
      },
      tableCell: { fontSize: 12, alignment: "left" },
    },
  };

  // Download the PDF with a custom file name
  pdfMake
    .createPdf(docDefinition)
    .download(
      `monthly_report_${currentMonth.toLowerCase()}_${currentYear}.pdf`
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
