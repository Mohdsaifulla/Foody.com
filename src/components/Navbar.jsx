import React from "react";
import { navLinks } from "../constants/constants";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between h-20 shadow-xl lg:px-32 sm:px-10">
      <div className="flex justify-center items-center">
        <Link to="/">
          <img src="/swiggy-1.svg" alt="swiggy-logo" className="w-7" />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-10">
        {navLinks.map((item) => (
          <ul key={item.id}>
            <Link to={item.to}>
              <li className="flex justify-center items-center gap-2 cursor-pointer font-semibold text-lg hover:text-orange-500 duration-300">
                <span>{item.icon}</span>
                {item.name}
              </li>
            </Link>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
