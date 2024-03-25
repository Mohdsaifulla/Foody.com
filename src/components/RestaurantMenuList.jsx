import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { PiSquareLogoFill } from "react-icons/pi";
import { CDN_URL } from "../constants/constants";
import { BsStarFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decreaseItem, increaseItem } from "../store/cartSlice";
import AddToCartButton from "./AddToCartButton";
const RestaurantMenuList = ({ data, showIndex, setShowIndex }) => {
  // console.log(data);
  const increasedItem = useSelector((store) => store.cart.item);
  // console.log(increasedItem);

  const handleIndex = () => {
    setShowIndex();
  };

  const cartItems = data.itemCards.map((item) => ({
    ...item,
    quantity: 1,
  }));
  // const increasedQuantity = increasedItem.map((item) => {
  //   return item.card.info.id
  // });
  // console.log(increasedQuantity)
  // console.log(cartItems)
  return (
    <div>
      <div>
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleIndex}
        >
          <div className="flex pt-4 font-bold text-xl">
            <span>{data.title}</span>
            <span>({data?.itemCards.length})</span>
          </div>
          <div className="text-xl">
            {showIndex ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </div>
        {showIndex &&
          cartItems.map((item) => (
            <div key={item.card.info.id}>
              <div className="flex justify-between  items-center ">
                <div className="flex flex-col w-1/2">
                  <div className="flex items-center gap-2 pt-4">
                    <span>
                      <PiSquareLogoFill className="text-green-600 font-bold text-xl" />
                    </span>
                    <span className="flex">
                      {item?.card?.info?.isBestseller ? (
                        <span className="flex gap-2 items-center text-yellow-600 text-md">
                          <span>
                            <BsStarFill />
                          </span>
                          <span>Bestseller</span>
                        </span>
                      ) : (
                        ""
                      )}
                    </span>
                  </div>
                  <span className="font-semibold pt-1">
                    {item?.card?.info?.name}
                  </span>
                  <span className="font-semibold">
                    ₹{item?.card?.info?.price / 100}
                  </span>
                  <span className="w-3/5 lg:w-full text-sm text-gray-500 pt-1">
                    {item?.card?.info?.description}
                  </span>
                </div>
                <div className="pt-4 w-[20%] flex flex-col justify-center items-center relative">
                  <img
                    src={`${CDN_URL}${item?.card?.info?.imageId}`}
                    alt="dish-img"
                    className="w-44 h-32 rounded-xl"
                  />
                  <div className="absolute bottom-1 cursor-pointer flex justify-around gap-2">
                    <AddToCartButton item={item} />
                  </div>
                </div>
              </div>
              <div className="h-[2px] bg-gray-300 w-full mt-8">
                <div></div>
              </div>
            </div>
          ))}
      </div>
      <div className="h-[10px] bg-gray-300 w-full mt-8">
        <div></div>
      </div>
    </div>
  );
};

export default RestaurantMenuList;
