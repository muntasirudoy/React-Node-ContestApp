import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import FilterArea from "../../components/FilterArea";
import api from "../../service/api";
import Header from "../landing/Header";
import { getSingleContest } from "./contest_utils";

const ClientsSingleContest = () => {
  const params = useParams();
  const [signgleContest, setSingleContest] = useState("");
  const [participate, setParticipate] = useState("");
  const [marks, setMarks] = useState("");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getSingleContest(params.id, setSingleContest);
  }, []);

  const handleClickOpen = (data) => {
    setOpen(true);
    setParticipate(data);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdateMarks =async(data)=>{

    let updateBody={
      ...data,
      participateMarks : marks
    }

    if (marks) {
      try {
        let res = await api.put(`/entries/${data._id}`,updateBody)
        if (res.data) {
          toast.success("Mark given successfully", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          handleClose()
          getSingleContest(params.id, setSingleContest);
        }
      } catch (error) {
        console.log(error);
      }
    }else{
      toast.error("Mark filed is empty", {
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
  return (
    <>
      <Header />

      <Container>
        <div className="contest-details-body">
          <div className="contest-details-header">
            <Typography color={"skyBlue"} fontSize="22px">
              {" "}
              Contest Title : {signgleContest?.contestTitle}
            </Typography>
            <Typography color={"skyBlue"} fontSize="18px">
              {" "}
              Budget : ${signgleContest?.budget}.0
            </Typography>
          </div>
          <br />
          <hr />
          <br />
          <Typography color={"skyBlue"} fontSize="22px">
            {" "}
            Total Participate : {signgleContest?.entries?.length}
          </Typography>
          <div className="contest-cards">
            {signgleContest?.entries?.length > 0
              ? signgleContest.entries.map((e) => (
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
                    <div className="card-action">
                      <Button
                        variant="contained"
                        onClick={() => handleClickOpen(e)}
                        style={{ width: "100%" }}
                      >
                        Give Marks
                      </Button>
                    </div>
                  </div>
                ))
              : <Typography color={"skyblue"} paddingY={5}>No one participate yet!</Typography>}
          </div>
        </div>
        <Dialog
          open={open}
          onClose={handleClose}
          style={{ backdropFilter: "blur(3px)", background: "none" }}
        >
          <DialogTitle id="alert-dialog-title">
            <Typography fontSize={22}>Marking the participate work</Typography>
          </DialogTitle>
          <DialogContent
            style={{ backdropFilter: "blur(3px)", background: "none" }}
          >
            <Typography>
              {" "}
              Participate Name : {participate?.participateName}
            </Typography>
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              variant="filled"
              size="small"
              onChange={(e)=> setMarks(e.target.value)}
              style={{ width: "100%", marginTop: "20px" }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              variant="contained"
              onClick={() => handleUpdateMarks(participate)}
              style={{ width: "100%" ,marginTop:"20px"}}
            >
              Submit 
            </Button>
          </DialogContent>
        </Dialog>
      </Container>
      <ToastContainer/>
    </>
  );
};

export default ClientsSingleContest;
