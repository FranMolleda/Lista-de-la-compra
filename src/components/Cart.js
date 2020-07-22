import React, { Fragment, useState } from "react";

const Cart = ({ handleFavorite, food, handleDelete }) => {
  const { article, quantity, person, date, coments, id } = food;

  return (
    <Fragment>
      <div className="cita">
        <h4>{article}</h4>
        <p>Quantity: {quantity}</p>
        <p>Person who added: {person}</p>
        <p>Date: {date}</p>
        <p>Coments: {coments}</p>
        <button onClick={() => handleDelete(id)}>Delete Article</button>
        <button onClick={() => handleFavorite(id)}>Add to Favorite</button>
      </div>
    </Fragment>
  );
};

export default Cart;
