import React from "react";
import SohailImage from "../assets/whoAmI1.jpeg";
import MohamedImage from "../assets/whoAmI2.jpeg";

const WhoWeArePage = () => {
  return (
    <div className="container mt-4">
      <h1 style={{ color: "red" }}>Who Are We?</h1>
      <div className="row">
        <div className="col-md-6">
          <h2 style={{ color: "blue" }}>Sohail Charef</h2>
          <p>
            Sohail is a passionate developer with expertise in building
            user-friendly interfaces and exploring new technologies to enhance
            user experiences.
          </p>
          <img src={SohailImage} alt="Sohail Charef" className="img-fluid" />
          <div>
            <a
              href="https://github.com/SohailPro12"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {" | "}
            <a
              href="https://www.linkedin.com/in/sohail-charef/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {" | "}
            <a
              href="https://twitter.com/CHSOHY"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <h2 style={{ color: "Orange" }}>Mohamed Chatr</h2>
          <p>
            Mohamed is a dedicated developer specializing in solving technical
            challenges and building robust systems to support web applications.
          </p>
          <img src={MohamedImage} alt="Mohamed Chatr" className="img-fluid" />
          <div>
            <a
              href="https://github.com/Mochatr"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {" | "}
            <a
              href="https://www.linkedin.com/in/mochatr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {" | "}
            <a
              href="https://twitter.com/mo_chatr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeArePage;
