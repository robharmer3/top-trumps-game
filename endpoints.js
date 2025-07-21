import axios from "axios";

const apiPoke = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

const catApi = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});

export function getSinglePokemon(index) {
  return apiPoke.get(`/pokemon/${index}`).then(({ data }) => {
    return data;
  });
}

export function getBreeds() {
  return catApi.get("/breeds").then(({ data }) => {
    return data;
  });
}

export function getCatImg(id) {
  return catApi.get(`/images/search?breed_ids=${id}`).then(({ data }) => {
    return data[0];
  });
}
