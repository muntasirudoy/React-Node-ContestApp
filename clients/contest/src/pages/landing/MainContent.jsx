import { Grid, Typography } from "@mui/material";
import React from "react";
import SortIcon from "@mui/icons-material/Sort";
import Chip from "@mui/material/Chip";

const MainContent = () => {
  return (
    <div className="main_content">
      <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className="filter-area">
            <div className="head">
              <Typography
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                {" "}
                <SortIcon fontSize="15" /> Search by Filter
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
                <Typography>Recent Contest</Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div className="contest_card">
                <div className="contest_card_title">
                  <div className="contest_card_title_left">
                    <Typography fontSize={24} fontWeight={700}>
                      Figma link only! Create web + app design for litte
                    </Typography>
                  </div>
                  <div className="contest_card_title_right">
                    <Typography fontSize={18}>20+ Entries</Typography>
                    <Typography fontSize={18}>$20.00</Typography>
                  </div>
                </div>
                <Chip size="small" label="GUARANTED" color="success" />
                <div className="context_card_description">
                  <Typography fontSize={15}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium fugiat pariatur quam necessitatibus dolorem quos
                    tempora, porro nobis! Officiis minus repudiandae harum,
                    tempore rerum eligendi neque quam reprehenderit eos.
                    Nesciunt!
                  </Typography>
                </div>

                <div className="context_card_footer">
                  <div className="context_card_footer_left">
                    <Typography fontSize={16}>3 hours ago</Typography>
                    <Typography fontSize={16}> 2 days left</Typography>
                  </div>
                  <div className="context_card_footer_right">
                    <Typography fontSize={16}>Posted by : </Typography>
                    <Typography fontSize={16}> Hero Alam</Typography>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainContent;
