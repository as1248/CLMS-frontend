import axios from "axios";

//서버 등록 
export const createServer = (serverData) => {
  axios.post("/servers/register/new", serverData);
};