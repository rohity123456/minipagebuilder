import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className="error">
      <div>
        <h1>404</h1>
        <h3>Sorry, Page Not Found! </h3>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Error;
