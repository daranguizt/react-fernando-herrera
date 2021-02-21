import React, { Fragment, useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  //const categories = ["One Punch Man", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["One Punch Man"]);

  //   const handleAdd = () => {
  //     setCategories([...categories, "Hunter x Hunter"]);
  //     //setCategories(cat => [...cat, 'Hunter x Hunter']); donde cat es el estado actual
  //   };

  return (
    <Fragment>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button>*/}

      <div className="allResults">
        {categories.map((item) => (
          <GifGrid key={item} category={item} />
        ))}
      </div>
    </Fragment>
  );
};

export default GifExpertApp;
