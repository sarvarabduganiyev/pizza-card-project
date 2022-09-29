import React, { useState, useEffect } from "react";
import "../styles/order.css";

function Order({ cards, setCards, handleChange }) {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cards.filter((item) => item.id !== id);
    setCards(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cards.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });
  console.log(cards.length);
  return (
    <article>
      {cards.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, -1)}>-</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, 1)}>+</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>{price} sum</span>
      </div>
    </article>
  );
}

export default Order;
