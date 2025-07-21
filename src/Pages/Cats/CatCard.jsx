import { useState } from "react";
import { getBreeds } from "../../../endpoints";
import useFetchApi from "../../../endpoints Hook";
import CatImage from "./CatImage";

export default function CatCard({ setPlayersChoice, playersChoice }) {
  const ranNum = Math.floor(Math.random() * 67);
  const { isLoading, isError, data } = useFetchApi(getBreeds);

  if (isLoading) {
    return <p>...is Loading</p>;
  }

  if (isError) {
    return <p>ERROR!</p>;
  }

  if (data) {
    return (
      <>
        <div className="card">
          <h2>{data[ranNum].name}</h2>
          <CatImage cat={data[ranNum]} />
          <p>
            <b>Description: </b>
            {data[ranNum].description}
          </p>
          <p>
            <b>Origin: </b>
            {data[ranNum].origin}
          </p>
          <p className="selectable">
            Effection Level: {data[ranNum].affection_level}
          </p>
          <p className="selectable">
            Intelligence: {data[ranNum].intelligence}
          </p>
          <p className="selectable">
            Shedding Level: {data[ranNum].shedding_level}
          </p>
          <p className="selectable">Life Span: {data[ranNum].life_span}</p>
          <p className="selectable">
            Dog Friendly: {data[ranNum].dog_friendly}
          </p>
        </div>
      </>
    );
  }
}
