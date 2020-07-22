import React, { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import FormFood from "./components/FormFood";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Columna 1</h2>
            <FormFood />
          </div>
          <div className="one-half column">
            <h2>Columna 2</h2>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
