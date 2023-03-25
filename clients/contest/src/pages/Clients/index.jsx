import {
  Grid,
  Button,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import Header from "../landing/Header";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import dayjs from "dayjs";
import { CurrentUserStore } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import api from "../../service/api";
import { toast, ToastContainer } from "react-toastify";
import ContestCard from "../../components/ContestCard";
import FilterArea from "../../components/FilterArea";
import AddNewContestForm from "../../components/AddNewContestForm";
import { getContest, handlePostContest } from "./contest_utils";

const defaultContestValue = {
  title: "",
  details: "",
  budget: "",
  deadline: dayjs(new Date()),
  tags: [],
};

const Clients = () => {
  const [open, setOpen] = React.useState(false);
  const [contest, setContest] = useState(defaultContestValue);
  const [allContest, setAllContest] = useState([]);
  const navigate = useNavigate();
  const { userState } = useContext(CurrentUserStore);



 
  useEffect(() => {
    getContest(setAllContest,userState);
    if (userState.currentUser == null ) {
      navigate("/login");
    }
    if (userState.currentUser.role == "freelancer"  ) {
      navigate("/");
    }
  }, []);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };






  return (
    <>
      <Header />
      <div className="main_content">
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <FilterArea />
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <div className="contest_card_header">
                  <Typography color={"skyBlue"} fontSize="20px">Your Published Contest</Typography>
                  <Button onClick={handleClickOpen} variant="contained">
                    Start new Constest
                  </Button>
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                {allContest && allContest.map((e) => <ContestCard key={e._id} data={e} />)}
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
         <AddNewContestForm 
          contest={contest}
          setContest={setContest}
          handlePostContest={()=>handlePostContest(handleClose,setContest, setAllContest, userState,contest,defaultContestValue)}
         />
          </DialogContent>
        </Dialog>
      </div>
      <ToastContainer />
    </>
  );
};

export default Clients;
