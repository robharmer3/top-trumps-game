import { useState } from "react";
import Category from "./Catergory";

export default function Home() {
  const [category, setCategory] = useState("");

  return (
    <>
      <h1>Rob's Version of Top Trumps</h1>
      <h2>State you name</h2>
      <input type="text" />
      <h2>Pick your avatar</h2>
      <ul>
        <li>Avatar 1</li>
        <li>Avatar 2</li>
        <li>Avatar 3</li>
      </ul>
      <Category setCategory={setCategory} />
      <button>Play!</button>
    </>
  );
}
