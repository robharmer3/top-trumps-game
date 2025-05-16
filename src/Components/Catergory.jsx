export default function Category(setCategory) {
  function handleCategory(event) {
    event.preventDefault();
    setCategory(event.target.value);
  }

  return (
    <>
      <form>
        <label htmlFor="default">
          <h2>Pick your category</h2>
        </label>
        <select
          onChange={handleCategory}
          name="category-dropdown"
          id="category"
        >
          <option value="">--Please Select--</option>
          <option value="cars">Cars</option>
          <option value="boats">Boats</option>
          <option value="planes">Planes</option>
          <option value="star-wars">Star Wars</option>
          <option value="pokemon">Pokemon</option>
        </select>
      </form>
    </>
  );
}
