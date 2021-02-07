import axios from "axios";

const service = axios.create({
  // baseURL: "http://localhost:3080"+"/api",
  baseURL: (process.env.REACT_APP_BACKEND_URL || "https://at-portfolio-api.herokuapp.com")+"/api",
})
const get = (_) => service.get("/test").then(res=>res.data).catch(err=>console.log(err));
const getOne = (id) => service.get("/" + id).then(res=>res.data).catch(err=>console.log(err));
const createOne = (data) => service.post("/laroute-du-post", data).then(res=>res.data).catch(err=>console.log(err));
export default {
  service,
  get,
  getOne,
  createOne,
};
