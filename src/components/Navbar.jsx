import React from "react";
import { navLinks } from "../constants/constants";
const Navbar = () => {
  return (
    <div className="flex justify-between h-20 shadow-xl px-5">
      <div className="flex justify-center items-center">
        <img src="/swiggy-logo.png" alt="swiggy-logo" className="w-10" />
      </div>
      <div className="flex justify-center items-center gap-4">
        {navLinks.map((item) => (
          <ul>
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
