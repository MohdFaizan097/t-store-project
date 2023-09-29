import React, { createContext, useReducer, useContext, useState } from 'react';

const ShopContext = createContext(); // Create the context

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Initialize cartItems as an empty array

  // Define your addToCart and removeFromCart functions
  const addToCart = (product) => {
    const existingCartItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingCartItemIndex !== -1) {
      // If the product exists in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  // Rest of your ShopContextProvider...

  return (
    <ShopContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopContext, ShopContextProvider };
