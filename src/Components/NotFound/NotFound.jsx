import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontSize: "80px" }}>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>

        <Link to="/" className="btn btn-dark mt-3">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
