import { useContext } from "react";
import { AvatarContext } from "../Context/Avatar";

export default function Avatar() {
  const { avatar, setAvatar } = useContext(AvatarContext);

  function handleAvatar(event) {
    event.preventDefault();
    setAvatar(event.target.value);
  }

  return (
    <>
      <form>
        <label htmlFor="default">
          <h2>Pick your Avater</h2>
        </label>
        <select onChange={handleAvatar} name="category-dropdown" id="category">
          <option value="">--Please Select--</option>
          <option value="avatar-cat">Cat</option>
          <option value="avatar-dog">Dog</option>
          <option value="avatar-parrot">Parrot</option>
        </select>
      </form>
    </>
  );
}
