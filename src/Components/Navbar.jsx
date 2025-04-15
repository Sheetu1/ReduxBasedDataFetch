import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  
  return (
    <div className="bg-indigo-600 p-5 shadow-md">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <span className="text-white text-2xl font-semibold">Redux Tutorials</span>

        <div className="flex items-center space-x-6">
          <Link className="text-white hover:text-gray-300 transition duration-200" to={"/"}>
            Home
          </Link>
          <Link className="text-white hover:text-gray-300 transition duration-200" to={"/cart"}>
            Cart
          </Link>
          
          {/* Cart items count with clean style */}
          <span className="text-white font-semibold">
            Items: <span className="bg-yellow-500 text-gray-800 px-2 py-1 rounded-full">{items.length}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
