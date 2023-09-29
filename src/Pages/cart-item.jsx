import React from 'react';

function CartItem({ id, productName, price, productImage, quantity, onAddToCart, onRemoveFromCart }) {
  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="desc">
        <p>{productName}</p>
        <p>Rs.{price}</p>
      </div>
      <div className="quantity">
        <button onClick={() => onRemoveFromCart(id)}>-</button>
        <span>{quantity}</span>
        <button onClick={() => onAddToCart(id)}>+</button>
      </div>
    </div>
  );
}

export default CartItem;
