import { getBreeds } from "../../endpoints";
import useFetchApi from "../../endpoints Hook";
import CatCard from "./CatCard";

export default function Cats() {
  // const { isLoading, isError, data } = useFetchApi(getBreeds);

  return (
    <>
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
      <CatCard />
    </>
  );
}
