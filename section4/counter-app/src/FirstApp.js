import React, {Fragment} from "react";
import PropTypes from 'prop-types';

const FirstApp = ({msg, subtitle}) => {
  const hi = "Hola mundo";
  const array = [1,2,3,4,5,6];
  const obj = {
    nombre: 'Fernando',
    edad: 25
  }

  // if(!msg){
  //   throw new Error("No msg");
  // }

  return ( 
    <Fragment>
      <h1>{hi}, {msg}</h1>
      <h1>{array}</h1>
      <h1>{JSON.stringify(obj)}</h1>
      <h2>{subtitle}</h2>
      <p>Mi primer párrafo</p>
    </Fragment>
  );
};

FirstApp.propTypes = {
  msg: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  subtitle:  'Soy un subtítulo'
}

export default FirstApp;
