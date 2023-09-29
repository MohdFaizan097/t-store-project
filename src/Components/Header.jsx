import React from "react"
import { Link } from "react-router-dom"
import { Bag } from "phosphor-react"
import "./Header.css"

function Header() {
  return (
    <>
   
     <div className="navbar">
    <h3 className="logo">t.store</h3>
      <div className="links">
        <Link to="/"> Shop </Link>
        {/* <Link to="/cart"> <ShoppingCart size={25} weight="thin"/> </Link> */}
        <Link to="/cart"> <Bag size={25} weight="thin"/> </Link>

      </div>
     </div>
    </>
  )
}

export default Header