import React from "react";
import PropTypes from "prop-types";

const Clima = ({ resultado }) => {
  //extraer los valores
  const { name, main } = resultado;

  if (!name) return null;

  //convertir de kelvin a celcius

  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12 m6">
      <div className="black-text">
        <h2>El clima de {name} es:</h2>
        <p className="temperatura">{parseInt(main.temp - kelvin, 10)}°C</p>
        <p className="">
          Temperatura Máxima: {parseInt(main.temp_max - kelvin, 10)}°C
        </p>
        <p className="">
          Temperatura Minima: {parseInt(main.temp_min - kelvin, 10)}°C
        </p>
      </div>
    </div>
  );
};
Clima.propTypes = {
  resultado: PropTypes.object.isRequired,
};
export default Clima;
