import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  const [busqueda, setBusqueda] = useState({ ciudad: "", pais: "" });
  const [consultar, setConsultar] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      http://api.openweathermap.org/data/2.5/weather?q=guadalajara,mexico&appid=9a5529a1db568b45f8a54cb8e8e79964
    }
    consultarAPI()
    
  }, [consultar]);

  return (
    <Fragment>
      <Header titulo="Clima React App" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
