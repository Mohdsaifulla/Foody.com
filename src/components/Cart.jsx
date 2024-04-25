import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../constants/constants";
import AddToCartButton from "./AddToCartButton";
import BillDetails from "./BillDetails";
import { Link, useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { clearCart, removeItem } from "../store/cartSlice";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";
import StripeCheckout from "react-stripe-checkout";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  const loggedIn = useSelector((store) => store.user);
  const [ammount, setamount] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    let amt = 0;
    cartItems.map(
      (item) =>
        (amt +=
          item?.quantity *
          (item?.card?.info?.price
            ? item?.card?.info?.price / 100
            : item?.card?.info?.defaultPrice / 100))
    );
    setamount(amt);
  }, [cartItems]);
  const notifyDeleteOne = () => toast.success("One item has been removed");

  const makePayment = (token) => {
    dispatch(clearCart());
    navigate("/successfull");
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="flex flex-col   gap-10 justify-between lg:px-32 px-10 pt-8  pb-8">
          <div className="text-2xl font-semibold text-green-500">
            <h1>SECURE CHECKOUT</h1>
          </div>
          <div className="border shadow-xl border-dotted border-green-500 rounded-lg h-[500px] overflow-y-scroll  w-full font-semibold p-1">
            {cartItems.map((item) => (
              <div key={item?.card?.info?.id} className="p-2">
                <div className="flex gap-6 justify-between items-center overflow-hidden">
                  <img
                    src={`${CDN_URL}${item?.card?.info?.imageId}`}
                    className="w-32 rounded-lg pb-2  overflow-hidden"
                    loading="lazy"
                  />
                  <p className=" font-semibold ">
                    {item?.card?.info?.name?.slice(0, 20)}...
                  </p>
                  <div className="">
                    <AddToCartButton item={item} />
                  </div>
                  <div className="font-semibold">
                    <p>
                      ₹
                      {item.quantity *
                        (item?.card?.info?.price
                          ? item?.card?.info?.price / 100
                          : item?.card?.info?.defaultPrice / 100)}
                    </p>
                  </div>
                  <button className="flex justify-center items-center hover:text-red-500 text-2xl cursor-pointer duration-300">
                    <MdDeleteForever
                      onClick={() => {
                        dispatch(removeItem(item));
                        notifyDeleteOne();
                      }}
                    />
                  </button>
                </div>
                <hr></hr>
              </div>
            ))}
            <div className="flex items-center justify-end px-4 pt-2 pb-2">
              <button
                className="bg-red-700 hover:bg-red-500 duration-300 font-semibold p-1 rounded"
                onClick={() => {
                  dispatch(clearCart());
                }}
              >
                CLEAR CART
              </button>
            </div>
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
          <div className="bg-gray-200 flex justify-between p-2 rounded">
            <h1 className="text-xl font-semibold">Proceed To Payment</h1>
            <div className="flex flex-col justify-center items-center">
              <StripeCheckout
                token={makePayment}
                stripeKey={import.meta.env.VITE_STRIPE_KEY}
                ammount={ammount}
                name="Food Order any time"
                email="mfancisco@gmail.com"
                description="payment test"
              >
                <button
                  className={`${
                    !loggedIn
                      ? "bg-green-500 text-white px-2 py-1 rounded-xl cursor-not-allowed"
                      : "bg-green-400 text-gray-700 font-bold px-2 py-1 rounded-xl  cursor-pointer hover:bg-green-500 duration-300"
                  }`}
                >
                  PAY ₹{ammount}
                </button>
              </StripeCheckout>
              {!loggedIn && (
                <span className="text-sm animate-bounce text-red-500 pt-1">
                  YOU ARE NOT LOGGED IN
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
      <div className="px-16">
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export default Cart;
