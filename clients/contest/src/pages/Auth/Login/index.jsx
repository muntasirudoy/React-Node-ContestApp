import { Button, Grid, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import api from "../../../service/api";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const handleSubmitUser = async () => {
    const { email, password } = userInfo;
    const body = {
      email,
      password,
    };
    try {
      let res = await api.post("/login", body);
      localStorage.setItem("user", JSON.stringify(res.data));
      if (res.data?.role == "freelancer") {
        navigate("/clients");
      }
    } catch (error) {
      toast(error.response?.data?.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Container>
      <div className="login">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="form-area">
              <Typography
                className="form_area_title"
                fontSize={26}
                fontWeight={700}
                color="#f1f1f1"
              >
                Login your account
              </Typography>
              <form className="main_form">
                <TextField
                  className="input"
                  label="Email"
                  id="filled-multiline-static"
                  variant="filled"
                  style={{ width: "100%", marginTop: "15px" }}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                />
                <TextField
                  className="input"
                  style={{ width: "100%", marginTop: "15px" }}
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  id="filled-multiline-static"
                  variant="filled"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                />
                <Button
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    background: "rgb(16, 41, 79)",
                  }}
                  variant="contained"
                  onClick={handleSubmitUser}
                >
                  LOGIN
                </Button>
              </form>
              <Typography style={{ color: "white", marginTop: "10px" }}>
                Don't have an account?{" "}
                <Link style={{ color: "white" }} to="/registration">
                  Registration
                </Link>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default Login;
