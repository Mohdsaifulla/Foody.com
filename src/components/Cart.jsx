import React from "react";
import { useSelector } from "react-redux";
import { CDN_URL } from "../constants/constants";
import AddToCartButton from "./AddToCartButton";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems);

  return (
    <div className="flex gap-10 justify-between lg:px-32 px-10 pt-8">
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
      <div className="border-2 w-[40%] h-[50%] overflow-y-scroll">
        {cartItems.map((item) => (
          <div key={item.card.info.id} className="p-2">
            <div className="flex gap-2 justify-start items-center">
              <img
                src={`${CDN_URL}${item?.card?.info?.imageId}`}
                className="w-14  h-14"
              />
              <p>{item.card.info.name}</p>
              <div className="absolute">
                <AddToCartButton item={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
