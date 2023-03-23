import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div className="error-main">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h3>404</h3>
            <h4 className="error-title">Page Not Found</h4>
            <p className="error-paragraph">
              The page you are looking for does not exist. Please go to home.{" "}
            </p>
            <Link to={"/"} className="error-btn">
              Back to Home
            </Link>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default Error;
