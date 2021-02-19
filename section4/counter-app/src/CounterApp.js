import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {

    const []

  const handleAdd = (e) => {
    console.log(e);
  };

  return (
    <Fragment>
      <h1>CounterApp</h1>
      <h2>{value}</h2>
      <button onClick={handleAdd}>+1</button>
    </Fragment>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
