import { useContext, useEffect, useState } from "react";
import { NameContext } from "../Context/Name";
import { AvatarContext } from "../Context/Avatar";
import { CategoryContext } from "../Context/Category";
import { useNavigate } from "react-router-dom";
import { getBreeds, getSinglePokemon } from "../../endpoints";
import Cats from "./Cats";

export default function Deal() {
  const navigate = useNavigate();

  const { name, setName } = useContext(NameContext);
  const { avatar, setAvatar } = useContext(AvatarContext);
  const { category, setCategory } = useContext(CategoryContext);

  function handleHome(event) {
    event.preventDefault();
    navigate("/");
  }

  // if (category === "pokemon") {
  //   useEffect(() => {
  //     getSinglePokemon(randomCard).then((data) => {
  //       setCard1(data.species);
  //     });
  //   }, []);
  // }

  return (
    <>
      <button onClick={handleHome}>Home</button>
      <h2>
        Welcome {name} {avatar}
      </h2>
      {category === "cats" ? <Cats /> : null}
      {/* <p>{card1.name}</p> */}
      {/* <img src={card1.url} alt="" /> */}
      {/* <p>Pokemon 2: {card1}</p> */}
      {/* <p>Pokemon 3: {card1}</p> */}
      {/* <p>Pokemon 4: {card1}</p> */}
      {/* <p>Pokemon 5: {card1}</p> */}
    </>
  );
}
