import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import { ShopContextProvider } from './context/shop-context'; // Import the named export

function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}

export default App;
