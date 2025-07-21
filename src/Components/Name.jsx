import { useContext } from "react";
import { NameContext } from "../Context/Name";
import { useNavigate, useNavigation } from "react-router-dom";

export default function Name() {
  const { name, setName } = useContext(NameContext);
  const navigate = useNavigate();

  function handleInput(event) {
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/deal");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>State you name</h2>
        <input onChange={handleInput} type="text" value={name} />
        <button>Play!</button>
      </form>
    </>
  );
}
