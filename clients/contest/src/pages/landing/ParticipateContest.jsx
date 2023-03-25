import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CurrentUserStore } from "../../hooks/auth";
import api from "../../service/api";
import Header from "../landing/Header";
import { getAllParticipate, getSinglePublicContest } from "./landing_utils";
import { FileUploader } from "react-drag-drop-files";
import { toast, ToastContainer } from "react-toastify";
const fileTypes = ["JPG", "PNG", "GIF"];
const ParticipateContest = () => {

  const naviagate = useNavigate()
  const params = useParams();
  const [signgleContest, setSingleContest] = useState("");
  const [hideFileUploader, setHideFileUploader] = useState(false);
  const [allParticipate, setAllParticipate] = useState([]);
 const [checkParticipate,seCheckParticipate] = useState(false)
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("preview");
      output.src = reader.result;
    };
    reader.readAsDataURL(file);
    setHideFileUploader(true);
  };
  const { userState } = useContext(CurrentUserStore);

  const handleResetImage = () => {
    setFile(null);
    setHideFileUploader(false);
  };

  useEffect(() => {
    getAllParticipate(setAllParticipate)
    getSinglePublicContest(params.id, setSingleContest);





   let checkId = allParticipate?.find((e)=> e.participateId == userState.currentUser.id && params.id == e.contestId)


    if (checkId) {
      seCheckParticipate(true)
    }else{
      seCheckParticipate(false)
    }
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (
      params.id &&
      userState.currentUser.id &&
      userState.currentUser.name &&
      file
    ) {
      const formData = new FormData();
      formData.append("contestId", params.id);
      formData.append("participateId", userState.currentUser.id);
      formData.append("participateName", userState.currentUser.name);
      formData.append("participateFile", file);
      await api.post("/entries", formData, {}).then((res) => {
        toast.success("Your file is accepted", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(()=>{
          naviagate("/")
        },3000)
      })
    }else{
      toast.error("Please select the required file", {
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
    <>
      <Header />

      <Container>
        <div className="contest-details-body">
          <Typography
            color="skyBlue"
            fontSize="32px"
            fontWeight={600}
            paddingY="15px"
          >
            Submit Your Work
          </Typography>
          <div className="contest-details-header">
            <Typography color="skyBlue" fontSize="18px">
              {" "}
              Project Title : {signgleContest.contestTitle}
            </Typography>
            <Typography color="skyBlue" fontSize="18px">
              {" "}
              Deadline : {signgleContest.deadline}
            </Typography>
          </div>
          <hr style={{ marginTop: "20px" }} />
           { checkParticipate ? <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"80%",flexDirection:"column"}}>
            <Typography color="skyBlue" variant="h3">You have already participate!</Typography>
            |<Button variant="contained"><Link style={{color:"white"}} to="/">Back Home</Link></Button>
           </div> :
           <>
                     <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60%",
            }}
          >
            <div>
              {hideFileUploader ? (
                <div className="upload-preview">
                  <img id="preview" src="#" alt="" />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleResetImage}
                  >
                    Reset
                  </Button>
                </div>
              ) : (
                <>
                  <FileUploader
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                  />
                </>
              )}
            </div>
          </div>

          <div className="action-btn">
            <Button variant="contained" onClick={onSubmit}>
              Submit
            </Button>
            <Button variant="outlined">Cancel</Button>
          </div>
           
           
           </>
           
           
           }


        </div>
      </Container>
      <ToastContainer />
    </>
  );
};

export default ParticipateContest;
