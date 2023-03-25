import api from "../../../service/api";

export const getAllPublicContest = async(setPublicContest) => {
 try {
    let {data} = await api.get("/publicContest")
    setPublicContest(data.data)
 } catch (error) {
    
 }
};
export const getSinglePublicContest = async (id, setSingleContest) => {
    try {
      let { data } = await api.get(`/publicContest/${id}`);
      setSingleContest(data.data);
    } catch (error) {}
  };
  export const getAllParticipate = async (setAllParticipate) => {
    try {
      let { data } = await api.get(`/entries`);
      setAllParticipate(data.users);
    } catch (error) {}
  };

  