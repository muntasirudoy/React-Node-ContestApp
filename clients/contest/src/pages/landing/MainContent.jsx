import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import ContestCardHome from "../../components/ContestCardHome";
import { getAllPublicContest } from "./landing_utils";
import NoContestAvialable from "../../components/NoContestAvialable";

const MainContent = () => {
  const [publickContest, setPublicContest] = useState([]);
  useEffect(() => {
    getAllPublicContest(setPublicContest);
  }, []);
  return (
    <div className="main_content">
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className="filter-area">
            <div className="head">
              <Typography
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
                color="skyBlue"
              >
                {" "}
                <SortIcon fontSize="15" color="skyBlue"/> Search by Filter
              </Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="contest_card_header">
                <Typography fontSize={22} color="skyBlue">Recent Contest</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {publickContest?.length < 1 ? (
                <NoContestAvialable />
              ) : (
                publickContest.map((e) => <ContestCardHome data={e} />)
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContent;
