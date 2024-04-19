import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CDN_URL } from "../constants/constants";
import AddToCartButton from "./AddToCartButton";
import BillDetails from "./BillDetails";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  // console.log(cartItems);
  const loggedIn = useSelector((store) => store.user);
  const [ammount, setamount] = useState(0);
  useEffect(() => {
    let amt = 0;
    cartItems.map(
      (item) =>
        (amt +=
          item.quantity *
          (item.card.info.price
            ? item.card.info.price / 100
            : item.card.info.defaultPrice / 100))
    );
    setamount(amt);
  }, [cartItems]);
  // console.log(ammount)
  return (
    <>
      {cartItems.length > 0 ? (
        <div className="flex flex-col   gap-10 justify-between lg:px-32 px-10 pt-8  pb-8">
          <div className="text-2xl font-semibold text-green-500">
            <h1>SECURE CHECKOUT</h1>
          </div>
          <div className="border border-dotted border-green-500 rounded h-[500px] overflow-y-scroll  w-full">
            {cartItems.map((item) => (
              <div key={item.card.info.id} className="p-2">
                <div className="flex gap-6 justify-between items-center">
                  <img
                    src={`${CDN_URL}${item?.card?.info?.imageId}`}
                    className="w-32 rounded-lg"
                  />
                  <p className=" font-semibold text-gray-500">
                    {item.card.info.name.slice(0, 20)}...
                  </p>
                  <div className="">
                    <AddToCartButton item={item} />
                  </div>
                  <div className="font-semibold">
                    <p>
                      ₹
                      {item.quantity *
                        (item.card.info.price
                          ? item.card.info.price / 100
                          : item.card.info.defaultPrice / 100)}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className=" p-2 flex justify-center items-center bg-gray-200 m-2 rounded">
              <span className="text-3xl font-bold">&#8220;</span>
              <p className="text-sm text-gray-500">
                Any suggestion? We will pass it on...
              </p>
            </div>
            <div>
              <BillDetails ammount={ammount} />
            </div>
          </div>
          <div className="bg-gray-400 flex justify-between p-2 rounded">
            <h1 className="text-xl font-semibold">Proceed To Payment</h1>
            <div className="flex flex-col">
              <button
                className={`${
                  !loggedIn
                    ? "bg-green-500 text-white px-1 rounded cursor-not-allowed"
                    : "bg-orange-400 text-gray-700 font-bold px-1 rounded cursor-pointer hover:bg-green-500 duration-300"
                }`}
              >
                Pay Now
              </button>
              {!loggedIn && (
                <span className="text-sm text-gray-700">
                  You are not Logged in
                </span>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center py-20">
          <div className="max-w-2xl min-h-[500px] flex flex-col items-center justify-center gap-y-5">
            <h2 className="text-4xl font-bold font-mono">😒 Hungry...</h2>
            <p className=" font-medium text-center text-2xl">
              Oops! Your Cart is Empty Please Add Something..
            </p>
            <Link
              to={"/"}
              className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-green-600 hover:text-white duration-200 flex items-center justify-center"
            >
              Back To Home
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
