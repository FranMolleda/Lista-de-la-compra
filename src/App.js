import React, { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FormFood from "./components/FormFood";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";

function App() {
  const [cart, setCart] = useState([]);
  const [foodFavorite, setFoodFavorite] = useState([]);

  const addFoodtoCart = (foodForm) => {
    setCart([...cart, foodForm]);
  };

  const handleDelete = (id) => {
    const deleteFood = cart.filter((food) => id !== food.id);
    setCart(deleteFood);
  };
  const handleDeleteFavorite = (id) => {
    const deleteFood = foodFavorite.filter((food) => id !== food.id);
    setFoodFavorite(deleteFood);
  };

  const handleFavorite = (id) => {
    const favorite = cart.filter((food) => id === food.id)[0];
    setFoodFavorite([...foodFavorite, favorite]);
  };

  console.log(foodFavorite);

  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <h2>Add Food</h2>
            <FormFood addFoodtoCart={addFoodtoCart} />
          </div>
          <div className="one-half column">
            <h2>Cart</h2>
            {cart.map((food, idx) => {
              return (
                <Cart
                  key={idx}
                  food={food}
                  handleDelete={handleDelete}
                  handleFavorite={handleFavorite}
                  cart={cart}
                />
              );
            })}
          </div>
          <div className="one-half column">
            <h2>Favorites</h2>
            {foodFavorite.map((favorite, idx) => {
              return (
                <Favorite
                  key={idx}
                  favorite={favorite}
                  handleDeleteFavorite={handleDeleteFavorite}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
