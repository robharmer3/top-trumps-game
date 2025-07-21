import { getSinglePokemon } from "../../../endpoints";
import useFetchApi from "../../../endpoints Hook";

export default function PokemonCard() {
  const ranNum = Math.floor(Math.random() * 67);

  const { isLoading, isError, data } = useFetchApi(getSinglePokemon, ranNum);

  console.log(data);

  if (isLoading) {
    return <p>...is Loading</p>;
  }

  if (isError) {
    return <p>ERROR!</p>;
  }

  if (data) {
    return (
      <>
        <h3>Hello from pokemon card</h3>
        {/* <div className="card">
          <h2>{data[ranNum].name}</h2>
          <CatImage cat={data[ranNum]} />
          <p>Description:{data[ranNum].description}</p>
          <p>Origin: {data[ranNum].origin}</p>
          <p>Effection Level: {data[ranNum].affection_level}</p>
          <p>Intelligence: {data[ranNum].intelligence}</p>
          <p>Shedding Level: {data[ranNum].shedding_level}</p>
          <p>Life Span: {data[ranNum].life_span}</p>
          <p>Dog Friendly: {data[ranNum].dog_friendly}</p>
        </div> */}
      </>
    );
  }
}
