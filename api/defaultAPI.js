import axios from "axios";

const service = axios.create({
  baseURL: "https://ironhack-pokeapi.herokuapp.com/pokemon",
});


export default {
  service,
  getPokemons = _ => service.get("/"),
  getOne = id => service.get("/" + id),
  createOne = data => service.post("/laroute-du-post", data)
};