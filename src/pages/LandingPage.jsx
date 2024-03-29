import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logomark from "../assets/logomark.png";
import vid1 from "../assets/vid1.mp4";
import "../landing.css";

const LandingPage = () => {
  useEffect(() => {
    // Add a class to the body when component mounts
    document.body.classList.add("landing-page");

    // Remove the class from the body when component unmounts
    return () => {
      document.body.classList.remove("landing-page");
    };
  }, []);

  return (
    <section>
      <nav>
        <NavLink className="navbar-brand" to="/" aria-label="Go to Home">
          <img src={logomark} alt="" height={30} />
          <span className="ms-2" style={{ fontWeight: "bold" }}>
            PennyWise
          </span>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/mission">Mission</NavLink>
          </li>
          <li>
            <NavLink to="/who-are-we">Who are we</NavLink>
          </li>
          <li>
            <a
              href="https://github.com/SohailPro12/PennyWise"
              className="btn btn-warning btn-footer"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <NavLink to="/intro">Log in</NavLink>
          </li>
          <li>
            <NavLink to="/intro">Sign up</NavLink>
          </li>
        </ul>
      </nav>
      <div className="article">
        <h1>Your journey towards financial freedom starts now</h1>
        <div className="video-container">
          <video controls>
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <button
          className="btn"
          onClick={() => (window.location.href = "/intro")}
        >
          Sign up, It's free!!
        </button>
      </div>
    </section>
  );
};

export default LandingPage;
