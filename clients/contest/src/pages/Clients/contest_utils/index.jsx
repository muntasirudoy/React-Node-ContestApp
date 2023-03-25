import { toast } from "react-toastify";
import api from "../../../service/api";

import dayjs from "dayjs";

export const getContest = async (setAllContest, userState) => {
  try {
    let res = await api.get(`/contest/${userState.currentUser.id}`);
    setAllContest(res.data.data);
  } catch (error) {}
};

export const getSingleContest = async (id, setSingleContest) => {
  try {
    let { data } = await api.get(`/clients/contest/${id}`);
    setSingleContest(data.data);
  } catch (error) {}
};

const handleTags = (e) => {
  console.log(e);
};

export const handlePostContest = async (
  handleClose,
  setContest,
  setAllContest,
  userState,
  contest,
  defaultContestValue
) => {
  const contestBody = {
    contestCreatorId: userState.currentUser.id,
    contestCreatorName: userState.currentUser.name,
    contestTitle: contest.title,
    contestDetails: contest.details,
    budget: contest.budget,
    contestTags: "",
    deadline: contest.deadline,
    tags: contest.tags,
  };

  try {
    let res = await api.post("/contest", contestBody);
    if (res.status === 200) {
      toast(res.data?.data.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      handleClose();
      setContest(defaultContestValue);
      getContest(setAllContest, userState);
    }
  } catch (error) {
    console.log(error);
  }
};
