import { useContext, useEffect, useState } from "react";
import { NameContext } from "../Context/Name";
import { AvatarContext } from "../Context/Avatar";
import { CategoryContext } from "../Context/Category";
import { useNavigate } from "react-router-dom";
import { getSinglePokemon } from "../../endpoints";

export default function Deal() {
  const navigate = useNavigate();

  const { name, setName } = useContext(NameContext);
  const { avatar, setAvatar } = useContext(AvatarContext);
  const { category, setCategory } = useContext(CategoryContext);

  const [card1, setCard1] = useState([]);

  function handleHome(event) {
    event.preventDefault();
    navigate("/");
  }

  const randomCard = 7;
  // Math.floor(Math.random() * (5 - 1) + 1);

  if (category === "pokemon") {
    useEffect(() => {
      getSinglePokemon(randomCard).then((data) => {
        setCard1(data);
      });
    }, []);
  }

  console.log(randomCard, "random");
  console.log(card1, "card 1");

  return (
    <>
      <button onClick={handleHome}>Home</button>
      <h2>
        Welcome {name} {avatar}
      </h2>
      <p>Pokemon 1: {card1}</p>
      <p>Pokemon 2: {card1}</p>
      <p>Pokemon 3: {card1}</p>
      <p>Pokemon 4: {card1}</p>
      <p>Pokemon 5: {card1}</p>
    </>
  );
}
