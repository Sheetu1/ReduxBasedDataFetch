import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-5">
        <span>Redux Tutorials</span>
      <div>
   <Link className="navLink" to={'/'}>Home</Link>
   <Link className="navLink" to={'/cart'}>Cart</Link>
   <span>items:0</span>
      </div>
    </div>
  );
};

export default Navbar;
