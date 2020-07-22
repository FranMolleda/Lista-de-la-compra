import React, { Fragment, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FormFood from "./components/FormFood";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addFoodtoCart = (foodForm) => {
    setCart([...cart, foodForm]);
  };

  const handleDelete = (id) => {
    const deleteFood = cart.filter((food) => id !== food.id);
    setCart(deleteFood);
  };

  console.log(cart);
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
              return <Cart key={idx} food={food} handleDelete={handleDelete} />;
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
