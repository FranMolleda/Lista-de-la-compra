import React, { Fragment } from "react";

const Favorite = ({ favorite, handleDeleteFavorite }) => {
  const { article, person, quantity, id, coments, date } = favorite;
  return (
    <Fragment>
      <div className="cita">
        <h4>{article}</h4>
        <p>Quantity: {quantity}</p>
        <p>Person who added: {person}</p>
        <p>Date: {date}</p>
        <p>Coments: {coments}</p>
        <button onClick={() => handleDeleteFavorite(id)}>Delete Article</button>
      </div>
    </Fragment>
  );
};

export default Favorite;
