import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import ExpensesPage, {
  expensesAction,
  ExpensesLoader,
} from "./pages/ExpensesPage";

// warning message import
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";

// layouts
import Main, { mainLoader } from "./layouts/Main";

//actions
import { deleteUserAction } from "./actions/Deleteuser";
import BudgetPage, { budgetAction, budgetLoader } from "./pages/BudgetPage";
import { deleteBudget } from "./actions/deleteBudget";
import MissionPage from "./pages/MissionPage";
import WhoAreWePage from "./pages/WhoAreWePage";
import LandingPage from "./pages/LandingPage"; // Corrected import
import Intro from "./components/auth_alternative";

const router = createBrowserRouter([
  {
    path: "/",
    /*  element:  <LandingPage />, */
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        element: <LandingPage />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        index: true,
        path: "/Home",
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
        path: "mission",
        element: <MissionPage />,
        errorElement: <Error />,
      },
      {
        path: "who-are-we",
        element: <WhoAreWePage />,
        errorElement: <Error />,
      },
      {
        path: "intro",
        element: <Intro />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
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
