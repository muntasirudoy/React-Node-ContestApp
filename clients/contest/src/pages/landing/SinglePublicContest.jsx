import { Box, Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CurrentUserStore } from "../../hooks/auth";
import Header from "../landing/Header";
import { getSinglePublicContest } from "./landing_utils";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const SinglePublicContest = () => {
  const params = useParams();
  const [signgleContest, setSingleContest] = useState("");
  const { userState } = useContext(CurrentUserStore);
  const navigate = useNavigate();
  useEffect(() => {
    getSinglePublicContest(params.id, setSingleContest);
  }, []);

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNavigateNext = () => {
    if (userState.currentUser == null) {
      console.log("null");
      navigate(`/login?redirect=/contest/${params.id}/participate`);
    } else {
      navigate(`/contest/${params.id}/participate`);
    }
  };

  return (
    <>
      <Header />

      <Container>
        <div className="contest-details-body">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  variant="contained"
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    style={{ color: "skyBlue", fontWeight: "500" }}
                    variant="contained"
                    label="Project Details"
                    value="1"
                  />
                  <Tab
                    style={{ color: "skyBlue", fontWeight: "500" }}
                    variant="contained"
                    label="Participators"
                    value="2"
                  />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Typography
                  fontSize={32}
                  textAlign="center"
                  fontWeight={700}
                  paddingY={5}
                  color="skyBlue"
                >
                  Bit this Project!
                </Typography>
                <div className="contest-details-header">
                  <Typography color="skyBlue" fontSize="24px" fontWeight={600}>
                    {" "}
                    Project Title : {signgleContest.contestTitle}
                  </Typography>
                  <Typography color="skyBlue" fontSize="16px">
                    {" "}
                    Budget : ${signgleContest.budget}.0
                  </Typography>
                  <Typography color="skyBlue" fontSize="16px">
                    {" "}
                    Total Participate : {signgleContest?.entries?.length}
                  </Typography>
                </div>
                <hr style={{ marginTop: "20px" }} />
                <div style={{ marginTop: "20px" }}>
                  <Typography color="skyBlue" fontSize="22px" fontWeight={700}>
                    {" "}
                    Project Details :{" "}
                  </Typography>
                  <Typography
                    color="skyBlue"
                    fontSize={"16px"}
                    fontWeight={100}
                  >
                    {signgleContest.contestDetails}
                  </Typography>
                </div>
                <div className="action-btn">
                  {console.log(signgleContest)}
                  <Button variant="contained" onClick={handleNavigateNext}>
                    Participate
                  </Button>
                  <Button variant="outlined">
                    <Link style={{ color: "white" }} to="/">
                      Back Home
                    </Link>
                  </Button>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="contest-cards">
                  {signgleContest?.entries?.length > 0 ? (
                    signgleContest.entries.map((e) => (
                      <div className="contest-card">
                        <img src={e.participateFile} alt="img" />
                        <div>
                          <Typography color={"skyBlue"} fontSize="16px">
                            Name : {e.participateName}
                          </Typography>
                          {e.participateMarks == 0.01 && (
                            <Typography color={"skyBlue"} fontSize="16px">
                              Obtain Marks : Not Given
                            </Typography>
                          )}
                          {e.participateMarks !== 0.01 && (
                            <Typography color={"skyBlue"} fontSize="16px">
                              Obtain Marks : {e.participateMarks}
                            </Typography>
                          )}
                        </div>


                      </div>
                    ))
                  ) : (
                    <Typography color={"skyblue"} paddingY={5}>
                      No one participate yet!
                    </Typography>
                  )}
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default SinglePublicContest;
