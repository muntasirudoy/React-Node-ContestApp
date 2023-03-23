import {
  Grid,
  Button,
  Typography,
  TextField,
  TextareaAutosize,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  FilledInput,
} from "@mui/material";
import React, { useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import Header from "../landing/Header";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const Clients = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const [selected, setSelected] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePostContest = () => {};
  return (
    <>
      <Header />
      <div className="main_content">
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <div className="filter-area">
              <div className="head">
                <Typography
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {" "}
                  <SortIcon fontSize="15" /> Contest
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
                  <Typography>Your Contest</Typography>
                  <Button
                    onClick={handleClickOpen}
                    style={{
                      width: "200px",
                    }}
                    variant="contained"
                  >
                    Start new Constest
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className="contest_card">
                  <div className="contest_card_title">
                    <div className="contest_card_title_left">
                      <Typography fontSize={20} fontWeight={700}>
                        Figma link only! Create web + app design for litte
                      </Typography>
                    </div>
                    <div className="contest_card_title_right">
                      <Typography fontSize={18}>20+ Entries</Typography>
                      <Typography fontSize={18}>$20.00</Typography>
                    </div>
                  </div>

                  <div className="context_card_footer">
                    <div className="context_card_footer_left">
                      <Typography fontSize={16}>3 hours ago</Typography>
                      <Typography fontSize={16}> 2 days left</Typography>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          style={{ backdropFilter: "blur(3px)", background: "none" }}
        >
          <DialogTitle id="alert-dialog-title">
            {"Start a new contest"}
          </DialogTitle>
          <DialogContent
            style={{ backdropFilter: "blur(3px)", background: "none" }}
          >
            <form>
              <TextField
                label="Contest title"
                type="text"
                id="filled-multiline-static"
                variant="filled"
                style={{ width: "100%", marginTop: "15px" }}
              />

              <TextField
                id="outlined-multiline-static"
                label="Contest Details"
                multiline
                variant="filled"
                rows={4}
                style={{ width: "100%", marginTop: "10px" }}
              />
              <div className="doubleInput">
                <FormControl
                  sx={{ m: 1 }}
                  variant="filled"
                  style={{ width: "50%", marginTop: "10px" }}
                >
                  <InputLabel htmlFor="filled-adornment-amount">
                    Amount
                  </InputLabel>
                  <FilledInput
                    id="filled-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                  />
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker", "DatePicker"]}>
                    {/* <DatePicker
                      variant="filled"
                      label="Dadeline"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    /> */}
                    <DesktopDatePicker
                      label="Dadeline"
                      defaultValue="Dadeline"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <Button
                style={{
                  marginTop: "20px",
                  width: "100%",
                  background: "rgb(16, 41, 79)",
                }}
                variant="contained"
                onClick={() => handlePostContest()}
              >
                Post Contest
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default Clients;
