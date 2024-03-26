import React from "react";
import missionImage1 from "../assets/missionImage1.jpeg";
import missionImage2 from "../assets/missionImage2.jpeg";
import missionImage3 from "../assets/missionImage3.jpeg";

const MissionPage = () => {
  return (
    <div className="container mt-4">
      <h1 style={{ color: "red" }}>Mission</h1>
      <div className="row">
        <div className="col-md-4">
          <img
            src={missionImage1}
            alt="Mission Image 1"
            className="img-fluid mb-3"
          />
          <h2>Who We Serve</h2>
          <p>
            Pennywise is designed to serve individuals who seek better control
            over their finances, aiming to empower users to understand their
            spending habits, categorize expenses effectively, and ultimately
            improve their financial well-being.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src={missionImage2}
            alt="Mission Image 2"
            className="img-fluid mb-3"
          />
          <h2>Real-World Implications</h2>
          <p>
            By utilizing Pennywise, users can gain valuable insights into their
            spending patterns, allowing them to make informed decisions about
            their finances. This, in turn, can lead to better financial
            management, reduced stress related to money, and increased savings
            over time.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src={missionImage3}
            alt="Mission Image 3"
            className="img-fluid mb-3"
          />
          <h2>Life Changes</h2>
          <p>
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
