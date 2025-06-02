import { useEffect, useState } from "react";
import { getBreeds, getCatImg } from "../../endpoints";
import CatImage from "./CatImage";

export default function Cats() {
  const [card1, setCard1] = useState([]);
  const [card2, setCard2] = useState([]);
  const [card3, setCard3] = useState([]);
  const [card4, setCard4] = useState([]);
  const [card5, setCard5] = useState([]);
  const [card6, setCard6] = useState([]);

  const randomCard1 = Math.floor(Math.random() * 67);
  const randomCard2 = Math.floor(Math.random() * 67);
  const randomCard3 = Math.floor(Math.random() * 67);
  const randomCard4 = Math.floor(Math.random() * 67);
  const randomCard5 = Math.floor(Math.random() * 67);
  const randomCard6 = Math.floor(Math.random() * 67);

  useEffect(() => {
    getBreeds().then((data) => {
      console.log(data);
      setCard1(data[randomCard1]);
      setCard2(data[randomCard2]);
      setCard3(data[randomCard3]);
      setCard4(data[randomCard4]);
      setCard5(data[randomCard5]);
      setCard6(data[randomCard6]);
    });
  }, []);

  return (
    <>
      <div className="card">
        <h3>Card 1:</h3>
        <CatImage id={card1.id} />
        <p>Name: {card1.name}</p>
        <p>Description: {card1.description}</p>
        <p>Origin: {card1.origin}</p>
        <p>Effection Level: {card1.affection_level}</p>
        <p>Intelligence: {card1.intelligence}</p>
        <p>Shedding Level: {card1.shedding_level}</p>
        <p>Life Span: {card1.life_span}</p>
        <p>Dog Friendly: {card1.dog_friendly}</p>
      </div>
      <div className="card">
        <h3>Card 2:</h3>
        <p>Name: {card2.name}</p>
        <p>Description: {card2.description}</p>
        <p>Origin: {card2.origin}</p>
        <p>Effection Level: {card2.affection_level}</p>
        <p>Intelligence: {card2.intelligence}</p>
        <p>Shedding Level: {card2.shedding_level}</p>
        <p>Life Span: {card2.life_span}</p>
        <p>Dog Friendly: {card2.dog_friendly}</p>
      </div>
      <div className="card">
        <h3>Card 3:</h3>
        <p>Name: {card3.name}</p>
        <p>Description: {card3.description}</p>
        <p>Origin: {card3.origin}</p>
        <p>Effection Level: {card3.affection_level}</p>
        <p>Intelligence: {card3.intelligence}</p>
        <p>Shedding Level: {card3.shedding_level}</p>
        <p>Life Span: {card3.life_span}</p>
        <p>Dog Friendly: {card3.dog_friendly}</p>
      </div>
      <div className="card">
        <h3>Card 4:</h3>
        <p>Name: {card4.name}</p>
        <p>Description: {card4.description}</p>
        <p>Origin: {card4.origin}</p>
        <p>Effection Level: {card4.affection_level}</p>
        <p>Intelligence: {card4.intelligence}</p>
        <p>Shedding Level: {card4.shedding_level}</p>
        <p>Life Span: {card4.life_span}</p>
        <p>Dog Friendly: {card4.dog_friendly}</p>
      </div>
      <div className="card">
        <h3>Card 5:</h3>
        <p>Name: {card5.name}</p>
        <p>Description: {card5.description}</p>
        <p>Origin: {card5.origin}</p>
        <p>Effection Level: {card5.affection_level}</p>
        <p>Intelligence: {card5.intelligence}</p>
        <p>Shedding Level: {card5.shedding_level}</p>
        <p>Life Span: {card5.life_span}</p>
        <p>Dog Friendly: {card5.dog_friendly}</p>
      </div>
      <div className="card">
        <h3>Card 6:</h3>
        <p>Name: {card6.name}</p>
        <p>Description: {card6.description}</p>
        <p>Origin: {card6.origin}</p>
        <p>Effection Level: {card6.affection_level}</p>
        <p>Intelligence: {card6.intelligence}</p>
        <p>Shedding Level: {card6.shedding_level}</p>
        <p>Life Span: {card6.life_span}</p>
        <p>Dog Friendly: {card6.dog_friendly}</p>
      </div>
    </>
  );
}
