import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <center>
          <div className="row">
            <div className="col-md-4">
              <button className="btn btn-primary btn-footer">Mission</button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary btn-footer">Who Are We</button>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary btn-footer">GitHub</button>
            </div>
          </div>
        </center>
      </div>
    </footer>
  );
};

export default Footer;
