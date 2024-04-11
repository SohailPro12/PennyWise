import React from "react";
import SohailImage from "../assets/whoAmI1.jpeg";
import MohamedImage from "../assets/whoAmI2.jpeg";

const styles = {
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  heading: {
    color: "blue",
    textAlign: "center",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Align items vertically in the center
    flexWrap: "wrap", // Allow flex items to wrap to the next line if needed
  },
  profileContainer: {
    flexBasis: "calc(50% - 10px)",
    textAlign: "center", // Center align content inside profile containers
  },
  profileImage: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    margin: "0 auto 10px", // Add margin at the bottom to create space for links
    display: "block",
  },
  profileName: {
    color: "black",
  },
  profileDescription: {
    textAlign: "center",
  },
  links: {
    display: "flex",
    justifyContent: "center", // Center align links horizontally
    marginBottom: "20px", // Add margin at the bottom
  },
};

const WhoWeArePage = () => {
  return (
    <div style={styles.container} className="container mt-4">
      <h1 style={styles.heading}>Who Are We?</h1>
      <div style={styles.row} className="row">
        <div style={styles.profileContainer} className="col-md-6">
          <h2 style={styles.profileName}>Sohail Charef</h2>
          <img
            src={SohailImage}
            alt="Sohail Charef"
            style={styles.profileImage}
            className="img-fluid"
          />
          <p style={styles.profileDescription}>
            Sohail is a passionate developer with expertise in building
            user-friendly interfaces and exploring new technologies to enhance
            user experiences.
          </p>
          <div style={styles.links}>
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
        <div style={styles.profileContainer} className="col-md-6">
          <h2 style={{ ...styles.profileName, color: "black" }}>
            Mohamed Chatr
          </h2>
          <img
            src={MohamedImage}
            alt="Mohamed Chatr"
            style={styles.profileImage}
            className="img-fluid"
          />
          <p style={styles.profileDescription}>
            Mohamed is a dedicated developer specializing in solving technical
            challenges and building robust systems to support web applications.
          </p>
          <div style={styles.links}>
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
