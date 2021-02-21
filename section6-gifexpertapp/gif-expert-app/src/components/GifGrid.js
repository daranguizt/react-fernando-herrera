import React, { useState, useEffect, Fragment } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { getGifs } from "../helpers/getGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  //   const [images, setImages] = useState([]);

  //   useEffect(() => {
  //     getGifs(category).then(setImages);
  //   }, [category]);

  const { data, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3 className="title">{category}</h3>
      {loading && <p >Loading...</p>}
      <div className="results">
        {
          data.map((item) => (
            <GifGridItem key={item.id} title={item.title} url={item.url} />
          ))}
      </div>
    </Fragment>
  );
};

export default GifGrid;
