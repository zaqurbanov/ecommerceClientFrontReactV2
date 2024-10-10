import React from "react";
import { IoMdClose } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex gap-3  max-md:hidden" >
      <NavLink to="/" className="">Home</NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/faq">Faq</NavLink>
        

    </nav>
  );
};

export default Navbar;
