import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const FormFood = ({ addFoodtoCart }) => {
  const [foodForm, setFoodForm] = useState({
    item: "",
    quantity: "",
    person: "",
    date: "",
    coments: "",
  });
  const [error, setError] = useState(false);

  const { item, quantity, person, date, coments } = foodForm;

  const handleChange = (e) => {
    e.preventDefault();
    setFoodForm({ ...foodForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      item.trim() === "" ||
      quantity.trim() === "" ||
      person.trim() === "" ||
      date.trim() === "" ||
      coments.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    foodForm.id = uuidv4();

    addFoodtoCart(foodForm);

    setFoodForm({
      item: "",
      quantity: "",
      person: "",
      date: "",
      coments: "",
    });
  };

  return (
    <Fragment>
      {error ? <p className="alerta-error">Complete all Files</p> : null}
      <form onSubmit={handleSubmit}>
        <div>
          <label>item</label>
          <input
            name="item"
            type="text"
            placeholder="Insert item"
            className="u-full-width"
            onChange={handleChange}
            value={item}
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
            value={quantity}
          />
        </div>
        <div>
          <label>Who</label>
          <input
            name="person"
            type="text"
            placeholder="Insert person"
            className="u-full-width"
            onChange={handleChange}
            value={person}
          />
        </div>
        <div>
          <label>Date</label>
          <input
            name="date"
            type="date"
            className="u-full-width"
            onChange={handleChange}
            value={date}
          />
        </div>
        <div>
          <label>Coments</label>
          <textarea
            className="u-full-width"
            name="coments"
            onChange={handleChange}
            value={coments}
          />
        </div>
        <button submit="submit" className="u-full-width button add-button">
          Add item
        </button>
      </form>
    </Fragment>
  );
};

FormFood.propTypes = {
  addFoodtoCart: PropTypes.func.isRequired,
};

export default FormFood;
