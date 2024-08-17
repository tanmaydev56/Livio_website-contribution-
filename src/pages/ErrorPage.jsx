  import React from "react";
  import "../styles/ErrorPage.css"; // Ensure the correct CSS file is imported

  const ErrorPage = () => {
    return (
      <div className="container">
        <div className="error-box">
          <p className="error1">404</p>
          <p className="error2">Oops! Page not found</p>
          <button><a href="/">Back to Home</a></button>
        </div>
      </div>
    );
  };

  export default ErrorPage;
