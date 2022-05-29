import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className="navbar-container">
      <p
        style={{
          color: "black",
          fontWeight: "bold",
          fontSize: "30px",
        }}
      >
        <Link href="/">Fusion Braids</Link>
      </p>
      <div className="login">
        <button type="button" className="cart-icon">
          <AiOutlineLogin />
        </button>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>

      {showCart && <Cart />}
    </div>
  );
};

export default NavBar;
