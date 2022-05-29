import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Fusion Braids</p>
      <p className="icons">
        <AiFillInstagram />
        {/* <AiOutlineTwitter /> */}
      </p>
    </div>
  );
};

export default Footer;
