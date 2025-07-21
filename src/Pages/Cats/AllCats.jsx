import { useState } from "react";
import CatCard from "./CatCard";

export default function AllCats() {
  const [playersChoice, setPlayersChoice] = useState("");

  return (
    <>
      <CatCard
        setPlayersChoice={setPlayersChoice}
        playersChoice={playersChoice}
      />
      <CatCard
        setPlayersChoice={setPlayersChoice}
        playersChoice={playersChoice}
      />
      <CatCard
        setPlayersChoice={setPlayersChoice}
        playersChoice={playersChoice}
      />
    </>
  );
}
