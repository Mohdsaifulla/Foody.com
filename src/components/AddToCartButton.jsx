import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseItem, increaseItem } from "../store/cartSlice";
const AddToCartButton = ({ item }) => {
  const dispatchItem = useDispatch();

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
            className="rounded-lg font-semibold"
            onClick={() => handleDecrease(item)}
          >
            -
          </button>
          <button className="rounded-lg font-semibold">
            {increasedItem.find(
              (cartItem) => cartItem.card.info.id === item.card.info.id
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
            className="rounded-lg font-semibold"
            onClick={() => handleIncrease(item)}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="rounded-lg font-semibold"
          onClick={() => handleCartItem(item)}
        >
          ADD
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
