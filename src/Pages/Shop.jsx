import React from "react";
import "./Shop.css";
import { Link } from "react-router-dom";
import { Products } from "../PRODUCTS";
import Product from "./Product";

const Shop = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-text">
          <p>New essential tees</p>
          <h1>Grab your high quality fabric tees now!</h1>
          <Link to='/#items-container'>SHOP NOW</Link>
        </div>
      </div>
      <div className="heading-of-product">
        <p className="heading-small">Our best sellers</p>
      </div>
      <div className="products-grid" id="items-container">
        {Products.map((product) => (
          <Product key={product.id} data={product} /> 
        ))}
      </div>

     
    </>
  );
};

export default Shop;
