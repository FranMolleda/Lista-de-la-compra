import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import FormFood from "./components/FormFood";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";

function App() {
  let initialCartItems = JSON.parse(localStorage.getItem("cart"));
  if (!initialCartItems) {
    initialCartItems = [];
  }
  let initialFavoriteItems = JSON.parse(localStorage.getItem("foodFavorite"));
  if (!initialFavoriteItems) {
    initialFavoriteItems = [];
  }

  const [cart, setCart] = useState(initialCartItems);
  const [foodFavorite, setFoodFavorite] = useState(initialFavoriteItems);

  useEffect(() => {
    let initialCartItems = JSON.parse(localStorage.getItem("cart"));
    if (initialCartItems) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.setItem(cart, JSON.stringify([]));
    }
    let initialFavoriteItems = JSON.parse(localStorage.getItem("foodFavorite"));
    if (initialFavoriteItems) {
      localStorage.setItem("foodFavorite", JSON.stringify(foodFavorite));
    } else {
      localStorage.setItem(foodFavorite, JSON.stringify([]));
    }
  }, [cart, foodFavorite]);

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

  const cartTitle =
    cart.length === 0
      ? "Add Item to Cart"
      : cart.length === 1
      ? "Cart´s Item"
      : "Cart´s Items";

  return (
    <Fragment>
      <Header />
      <div className="container space">
        <div className="row">
          <div className="one-third column">
            <h2>Add Food</h2>
            <FormFood addFoodtoCart={addFoodtoCart} />
          </div>
          <div className="one-third column">
            <h2>{cartTitle}</h2>
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
          <div className="one-third column">
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
