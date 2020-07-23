import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Cart = ({ handleFavorite, food, handleDelete }) => {
  const { item, quantity, person, date, coments, id } = food;

  return (
    <Fragment>
      <div className="cita">
        <h4>{item}</h4>
        <p className="u-full-width">Quantity: {quantity}</p>
        <p>Person who added: {person}</p>
        <p>Date: {date}</p>
        <p>Coments: {coments}</p>
        <button
          className="u-full-width button add-button"
          onClick={() => handleFavorite(id)}
        >
          Add to Favorite
        </button>
        <button
          className="u-full-width button eliminar"
          onClick={() => handleDelete(id)}
        >
          Delete item
        </button>
      </div>
    </Fragment>
  );
};

Cart.propTypes = {
  addFoodtoCart: PropTypes.func.isRequired,
  handleFavorite: PropTypes.func.isRequired,
  food: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Cart;
