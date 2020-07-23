import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Favorite = ({ favorite, handleDeleteFavorite }) => {
  const { item, person, quantity, id, coments, date } = favorite;
  return (
    <Fragment>
      <div className="cita">
        <h4>{item}</h4>
        <p>Quantity: {quantity}</p>
        <p>Person who added: {person}</p>
        <p>Date: {date}</p>
        <p>Coments: {coments}</p>
        <button
          className="u-full-width button eliminar"
          onClick={() => handleDeleteFavorite(id)}
        >
          Delete item
        </button>
      </div>
    </Fragment>
  );
};

Favorite.propTypes = {
  favorite: PropTypes.object.isRequired,
  handleDeleteFavorite: PropTypes.func.isRequired,
};

export default Favorite;
