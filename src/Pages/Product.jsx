import React, { useContext } from 'react';
import './Products.css';
import { ShopContext } from '../context/shop-context';

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  // Check if cartItems and id are defined before accessing an element
  const cartItemAmount = cartItems && cartItems[id] ? cartItems[id] : 0;

  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={productImage} alt={productName} />
      </div>
      <div className="product-name limit-text-to-2-lines">{productName}</div>
      <div className="product-price">Rs.{price}</div>
      <button
        className="add-to-cart-button button-primary js-add-to-cart-btn"
        onClick={() => addToCart(id)} // Pass the product ID to addToCart
      >
        Add to Cart {cartItemAmount > 0 && `(${cartItemAmount})`}
      </button>
    </div>
  );
}

export default Product;
