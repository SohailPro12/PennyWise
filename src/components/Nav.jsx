import React from "react";
import { Form, NavLink, useLocation } from "react-router-dom"; // Import useLocation hook
import logomark from "../assets/logomark.png";

const Nav = ({ userName }) => {
  // Use useLocation hook to get the current location
  const location = useLocation();

  // Check if the current location is the landing page
  const isLandingPage = location.pathname === "/";

  // Conditional rendering based on whether the user is on the landing page or not
  return (
    // Render Nav only if not on the landing page
    !isLandingPage && (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/Home" aria-label="Go to Home">
            <img src={logomark} alt="" height={30} />
            <span className="ms-2" style={{ fontWeight: "bold" }}>
              PennyWise
            </span>
          </NavLink>
          {userName && (
            <div className="d-flex">
              <Form
                method="post"
                action="/deleteUser"
                onSubmit={(event) => {
                  if (
                    !window.confirm(
                      "Are you sure you want to delete your account?"
                    )
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <button type="submit" className="btn btn-outline-danger me-2">
                  <span>Delete Account</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-trash3-fill ms-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                  </svg>
                </button>
              </Form>
              <form
                method="post"
                action="/logout"
                className="d-flex align-items-center"
              ></form>
            </div>
          )}
        </div>
      </nav>
    )
  );
};

export default Nav;
