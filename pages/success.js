import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { snowFireWorks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    snowFireWorks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>We value your patronage, thank you our esteemed customer.</h2>
        <p className="email-msg">Confirm your payments via your email</p>
        <p className="description">
          Any questions, complains or readjustments, please email{" "}
          <a className="email" href="mailto:fbraids@gmail.com">
            fbraids@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Proceed back to shopping page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
