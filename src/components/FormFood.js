import React, { Fragment, useState } from "react";

const FormFood = () => {
  const [foodForm, setFoodForm] = useState({
    article: "",
    quantity: "",
    person: "",
    date: "",
    coments: "",
  });
  const [error, setError] = useState(false);

  const { article, quantity, person, date, coments } = foodForm;

  const handleChange = (e) => {
    e.preventDefault();
    setFoodForm({ ...foodForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar

    // if (
    //   article.trim() === "" ||
    //   quantity.trim() === "" ||
    //   person.trim() === "" ||
    //   date.trim() === "" ||
    //   coments.trim() === ""
    // ) {
    //   setError(true);
    //   return;
    // }
    // setError(false);

    //Añadir Id

    //Crear

    //Resetear
  };

  return (
    <Fragment>
      {error ? (
        <p className="alerta-error">Introduzca todos los datos</p>
      ) : null}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Article</label>
          <input
            name="article"
            type="text"
            placeholder="Insert article"
            className="u-full-width"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            name="quantity"
            type="text"
            placeholder="Insert quantity"
            className="u-full-width"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Person</label>
          <input
            name="person"
            type="text"
            placeholder="Insert person"
            className="u-full-width"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            name="date"
            type="date"
            className="u-full-width"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Coments</label>
          <textarea
            className="u-full-width"
            name="coments"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="u-full-width button add-button">
          Add Article{" "}
        </button>
      </form>
    </Fragment>
  );
};

export default FormFood;
