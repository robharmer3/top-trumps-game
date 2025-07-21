import { useEffect, useState } from "react";
import { getCatImg } from "../../endpoints";

export default function CatImage({ id }) {
  console.log(id, "Cat id");
  const [catImg, setCatImg] = useState();

  useEffect(() => {
    getCatImg(id).then((data) => {
      setCatImg(data);
      console.log(catImg, "catimg");
    });
  }, []);

  return (
    <>
      <p>Hello from Cat Image</p>
    </>
  );
}
