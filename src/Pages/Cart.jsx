import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import CartItem from './cart-item'; // Update the import path

// ...
const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Cart Items</h1>
      <div className="cartItems">
        {cartItems.map((cartItem) => (
          <CartItem
            key={cartItem.id} // Provide a unique key for each CartItem
            id={cartItem.id}
            productName={cartItem.productName}
            price={cartItem.price}
            productImage={cartItem.productImage}
            quantity={cartItem.quantity}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />
        ))}
      </div>
      <div className="totalPrice">Total Price: Rs.{totalPrice}</div>
    </div>
  );
};

export default Cart;
