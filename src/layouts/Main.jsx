// react router dom imports
import { Outlet, useLoaderData } from "react-router-dom";
// helper functions
import { fetchData } from "../helpers";

// assests
// components
import Nav from "../components/Nav";
import Footer from "../components/footer";
// loader
export function mainLoader() {
  const userName = fetchData("userName");
  return { userName: userName };
}

const Main = () => {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <Nav userName={userName} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Main;
