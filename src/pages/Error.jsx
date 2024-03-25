import { useRouteError, Link, useNavigate } from "react-router-dom";
import { HomeIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "80vh",
        backgroundColor: "#f8f9fa",
        color: "#343a40",
      }}
    >
      <div className="container">
        <h1 className="display-4 mb-4">Uh oh! We've got a problem</h1>
        <p>{error.message || error.statusText}</p>
        <div className="d-flex justify-content-md-between mt-4">
          <button
            className="btn btn-outline-danger"
            onClick={() => navigate(-1)}
          >
            <ArrowUturnLeftIcon width={20} className="me-2" />
            <span>Go Back</span>
          </button>
          <Link to="/" className="btn btn-outline-danger">
            <HomeIcon width={20} className="me-2" />
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
