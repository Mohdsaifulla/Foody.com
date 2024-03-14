import React from "react";
import { navLinks } from "../constants/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartItem = useSelector((store) => store.cart.item);
  // console.log(cartItem);

  return (
    <div className="flex justify-between h-20 shadow-xl lg:px-32 sm:px-10 sticky top-0 backdrop-blur-3xl z-10">
      <div className="flex justify-center items-center">
        <Link to="/">
          <img src="/swiggy-1.svg" alt="swiggy-logo" className="w-7" />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-10 relative">
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
        <div className="absolute top-[18px] right-[49px] text-sm font-semibold">
          {cartItem.length}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
