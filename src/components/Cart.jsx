import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CDN_URL } from "../constants/constants";
import AddToCartButton from "./AddToCartButton";
import BillDetails from "./BillDetails";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  // console.log(cartItems);
  const [ammount, setamount] = useState(0);
  useEffect(() => {
    let amt = 0;
    cartItems.map(
      (item) => (amt += item.quantity * (item.card.info.price / 100))
    );
    setamount(amt);
  }, [cartItems]);
  // console.log(ammount)
  return (
    <div className="flex flex-col md:flex-row  gap-10 justify-between lg:px-32 px-10 pt-8 ">
      <div className="border-2 w-[60%]">
        <div>
          <div>logo</div>
          <div>Account</div>
        </div>
        <div>
          <div>logo</div>
          <div>Delivery Address</div>
        </div>
        <div>
          <div>logo</div>
          <div>Payment</div>
        </div>
      </div>

      {/* w-[40%] */}
      <div className="border-2  h-[50%] overflow-y-scroll">
        {cartItems.map((item) => (
          <div key={item.card.info.id} className="p-2">
            <div className="flex gap-6 justify-center items-center">
              <img
                src={`${CDN_URL}${item?.card?.info?.imageId}`}
                className="w-14  h-14"
              />
              <p className="text-sm font-semibold text-gray-500">
                {item.card.info.name.slice(0, 9)}...
              </p>
              <div className="">
                <AddToCartButton item={item} />
              </div>
              <div className="">
                <p>₹{item.quantity * (item.card.info.price / 100)}</p>
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
    </div>
  );
};

export default Cart;
