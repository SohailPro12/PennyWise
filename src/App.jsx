import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import ExpensesPage, {
  expensesAction,
  ExpensesLoader,
} from "./pages/ExpensesPage";

// warning meassage import
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";

// layouts
import Main, { mainLoader } from "./layouts/Main";

//actions
import { deleteUserAction } from "./actions/Deleteuser";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: ExpensesLoader,
        action: expensesAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
      },
      {
        path: "logout",
        action: deleteUserAction,
      },
      {
        path: "deleteUser",
        action: deleteUserAction,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
