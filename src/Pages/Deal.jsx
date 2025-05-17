import { useContext } from "react";
import { NameContext } from "../Context/Name";
import { AvatarContext } from "../Context/Avatar";
import { CategoryContext } from "../Context/Category";
import { useNavigate } from "react-router-dom";

export default function Deal() {
  const navigate = useNavigate();

  const { name, setName } = useContext(NameContext);
  const { avatar, setAvatar } = useContext(AvatarContext);
  const { category, setCategory } = useContext(CategoryContext);

  function handleHome(event) {
    event.preventDefault();
    navigate("/");
  }

  return (
    <>
      <button onClick={handleHome}>Home</button>
      <h2>
        Welcome {name} {avatar}
      </h2>
    </>
  );
}
