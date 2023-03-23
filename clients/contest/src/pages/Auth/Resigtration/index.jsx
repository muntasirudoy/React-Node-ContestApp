import {
  Button,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../../service/api";
const Registration = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmitUser = async () => {
    if (value) {
      if (!userInfo.username) {
        toast("Username is missing", {
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
      if (!userInfo.email) {
        toast("Email is missing", {
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
      if (!userInfo.password) {
        toast("Password is missing", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        try {
          const body = {
            name: userInfo.username,
            email: userInfo.email,
            password: userInfo.password,
            role: value,
          };
          let { data } = await api.post(
            "http://localhost:8000/api/signup",
            body
          );
          toast.success(data.message, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } catch (error) {
          toast.error(error.response.data.message, {
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
      }
    } else {
      toast("Please select your role! Client or Freelancer", {
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
                Registration
              </Typography>
              <div
                className="form_area_selectuser"
                onClick={() => handleUserCheck("client")}
              >
                <div className="form_area_selectuser_card">
                  <img src="/cl.png" alt="client" />
                  <Typography
                    className="form_area_selectuser_card_text"
                    fontSize={16}
                    fontWeight={400}
                    mt={2}
                  >
                    Client
                  </Typography>
                </div>
                <div className="form_area_selectuser_card">
                  <img src="/cl.png" alt="client" />
                  <Typography
                    className="form_area_selectuser_card_text"
                    fontSize={16}
                    fontWeight={400}
                    mt={2}
                  >
                    Freelancer
                  </Typography>
                </div>
              </div>
              <div>
                <RadioGroup
                  defaultValue="client"
                  className="radioForm"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                  sx={{ my: 1 }}
                >
                  <Radio className="radio left" value="client" />
                  <Radio className="radio right" value="freelancer" />
                </RadioGroup>
              </div>
              <form className="main_form">
                <TextField
                  className="input"
                  label="Username"
                  id="filled-multiline-static"
                  variant="filled"
                  style={{ width: "100%", marginTop: "15px" }}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, username: e.target.value })
                  }
                />
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
                  REGISTRATION
                </Button>
              </form>
              <Typography style={{ color: "white", marginTop: "10px" }}>
                Already have an account?{" "}
                <Link style={{ color: "white" }} to="/login">
                  Login
                </Link>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
      {/* Same as */}
      <ToastContainer />
    </Container>
  );
};

export default Registration;
