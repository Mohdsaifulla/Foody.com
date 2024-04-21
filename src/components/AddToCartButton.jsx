import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseItem, increaseItem } from "../store/cartSlice";
const AddToCartButton = ({ item }) => {
  const dispatchItem = useDispatch();
  // console.log(item)
  const increasedItem = useSelector((store) => store.cart.item);
  const handleIncrease = function (item) {
    dispatchItem(increaseItem(item));
  };
  const handleDecrease = function (item) {
    dispatchItem(decreaseItem(item));
  };
  const handleCartItem = function (item) {
    dispatchItem(addItem(item));
  };
  return (
    <>
      {increasedItem.length > 0 ? (
        <div className="shadow-xl p-2 w-20 rounded-lg bg-white text-green-600  bottom-1 cursor-pointer flex justify-around gap-2">
          <button
            className="rounded-lg font-semibold hover:text-green-400"
            onClick={() => handleDecrease(item)}
          >
            {increasedItem.find(
              (cartItem) => cartItem?.card?.info?.id === item?.card?.info?.id
            )?.quantity && "-"}
          </button>
          <button className="rounded-lg font-semibold">
            {increasedItem.find(
              (cartItem) => cartItem?.card?.info?.id === item?.card?.info?.id
            )?.quantity || (
              <button
                className="rounded-lg font-semibold"
                onClick={() => handleCartItem(item)}
              >
                ADD
              </button>
            )}
          </button>
          <button
            className="rounded-lg font-semibold hover:text-green-400"
            onClick={() => handleIncrease(item)}
          >
            {increasedItem.find(
              (cartItem) => cartItem?.card?.info?.id === item?.card?.info?.id
            )?.quantity && "+"}
          </button>
        </div>
      ) : (
        <button
          className="rounded-lg font-semibold  bg-white text-green-600 p-2 hover:text-green-400"
          onClick={() => handleCartItem(item)}
        >
          ADD
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
