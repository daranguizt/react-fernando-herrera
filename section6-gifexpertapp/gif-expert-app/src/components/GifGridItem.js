import React, { Fragment } from "react";
import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__bounce animate__fadeIn">
      <img src={url} alt={title}></img>
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}