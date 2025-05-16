import { useContext } from "react";
import { UserProvider } from "../Context/User";

export default function Avatar() {
  const { user } = useContext(UserProvider);
  function handleAvatar(event) {
    event.preventDefault();
    setUser(event.target.value);
    console.log(user);
  }

  return (
    <>
      <form>
        <label htmlFor="default">
          <h2>Pick your Avater</h2>
        </label>
        <select onChange={handleAvatar} name="category-dropdown" id="category">
          <option value="">--Please Select--</option>
          <option value="avatar 1">Cat</option>
          <option value="avatar 2">Dog</option>
          <option value="avatar 3">Parrot</option>
        </select>
      </form>
    </>
  );
}
