import React, { Fragment } from "react";

const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__bounce animate__delay-2s">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
