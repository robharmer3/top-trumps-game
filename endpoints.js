import axios from "axios";

const apiPoke = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export function getSinglePokemon(index) {
  return apiPoke.get(`/pokemon/${index}`).then(({ data }) => {
    return data;
  });
}
