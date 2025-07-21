import { useEffect, useState } from "react";
import { getCatImg } from "../../../endpoints";
import useFetchApi from "../../../endpoints Hook";

export default function CatImage({ cat }) {
  const { isLoading, isError, data } = useFetchApi(getCatImg, cat.id);

  if (isLoading) {
    return <p>...is Loading</p>;
  }

  if (isError) {
    return <p>ERROR!</p>;
  }

  if (data) {
    return (
      <>
        <img src={data.url} alt="cat.name" width="50%" height="50%" />
      </>
    );
  }
}
