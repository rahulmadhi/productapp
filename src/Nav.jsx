import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navbar">
      <div>LOGO </div>
      <div>
        <Link to={"/viewproducts"}>VIEW PRODUCTS</Link>
        <Link to={"/addproducts"}>ADD PRODUCTS</Link>
      </div>
    </div>
  );
};

export default Nav;
