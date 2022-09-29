import React from "react";

function Card({ item, handleClick }) {
  const { title, price, author, img } = item;
  return (
    <div class="card">
      <h2 class="card-title">
        {title} <span>{`${price} so'm`}</span>
      </h2>
      <img src={img} alt={title} />
      <button onClick={() => handleClick(item)}>Add to Cart</button>
      <p class="card-desc">{author}</p>
    </div>
  );
}

export default Card;
