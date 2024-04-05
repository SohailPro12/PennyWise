import React from "react";
import missionImage1 from "../assets/missionImage1.jpeg";
import missionImage2 from "../assets/missionImage2.jpeg";
import missionImage3 from "../assets/missionImage3.jpeg";

const MissionPage = () => {
  return (
    <div
      style={{ maxWidth: "900px", margin: "0 auto" }}
      className="container mt-4"
    >
      <h1
        style={{
          textAlign: "center",
          color: "red",
          fontSize: "30px",
          marginBottom: "25px",
        }}
      >
        Our Mission
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
        className="row"
      >
        <div
          style={{ flexBasis: "calc(33.33% - 20px)", marginBottom: "20px" }}
          className="col-md-4"
        >
          <img
            src={missionImage1}
            alt="Mission Image 1"
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            className="img-fluid mb-3"
          />
          <h2
            style={{ marginTop: "10px", marginBottom: "5px", fontSize: "30px" }}
          >
            Who We Serve
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
            Pennywise is designed to serve individuals who seek better control
            over their finances, aiming to empower users to understand their
            spending habits, categorize expenses effectively, and ultimately
            improve their financial well-being.
          </p>
        </div>
        <div
          style={{ flexBasis: "calc(33.33% - 20px)", marginBottom: "20px" }}
          className="col-md-4"
        >
          <img
            src={missionImage2}
            alt="Mission Image 2"
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            className="img-fluid mb-3"
          />
          <h2
            style={{ marginTop: "10px", marginBottom: "5px", fontSize: "30px" }}
          >
            Real-World Implications
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
            By utilizing Pennywise, users can gain valuable insights into their
            spending patterns, allowing them to make informed decisions about
            their finances. This, in turn, can lead to better financial
            management, reduced stress related to money, and increased savings
            over time.
          </p>
        </div>
        <div
          style={{ flexBasis: "calc(33.33% - 20px)", marginBottom: "20px" }}
          className="col-md-4"
        >
          <img
            src={missionImage3}
            alt="Mission Image 3"
            style={{ width: "100%", height: "auto", borderRadius: "5px" }}
            className="img-fluid mb-3"
          />
          <h2
            style={{ marginTop: "10px", marginBottom: "5px", fontSize: "30px" }}
          >
            Life Changes
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
            With Pennywise, users can experience a positive transformation in
            their financial habits and mindset. They will have a clearer
            understanding of where their money is going, feel more in control of
            their finances, and ultimately work towards achieving their
            financial goals with greater confidence and ease.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
