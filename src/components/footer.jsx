import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
  // Use useLocation hook to get the current location
  const location = useLocation();

  // Check if the current location is the landing page
  const isLandingPage = location.pathname === "/";

  // Conditional rendering based on whether the user is on the landing page or not
  return (
    // Render Footer only if not on the landing page
    !isLandingPage && (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <NavLink to="/mission" className="btn btn-primary btn-footer">
                Mission
              </NavLink>
            </div>
            <div className="col-md-4">
              <NavLink to="/who-are-we" className="btn btn-primary btn-footer">
                Who Are We
              </NavLink>
            </div>
            <div className="col-md-4">
              <a
                href="https://github.com/SohailPro12/PennyWise"
                className="btn btn-primary btn-footer"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

export default Footer;
