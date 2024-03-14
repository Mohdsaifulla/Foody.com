import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { FaStar } from "react-icons/fa";
import RestaurantMenuList from "./RestaurantMenuList";
import { IoLocation } from "react-icons/io5";
import { useState } from "react";

const RestaurantsMenu = () => {
  const { restaurantId } = useParams();
  const menu = useRestaurantMenu(restaurantId);
  const [showIndex, setShowIndex] = useState(0);
  if (menu === null) return <Shimmer />;
  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    sla,
    costForTwoMessage,
    slugString,
 
  } = menu?.cards[0]?.card?.card?.info;
  // console.log(name, cuisines, areaName, avgRating, totalRatingsString);

  const listItem =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (item) =>
        item.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(listItem)
  // console.log(menu);
  return (
    <div className="lg:px-32 px-10 pt-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <div className="font-bold text-xl">{name}</div>

          <div className="text-sm text-gray-600">
            {cuisines?.map((item, id) => (
              <div key={id}>
                <div>{item}</div>
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-600">{areaName}</div>
        </div>
        <div className="border rounded-lg flex flex-col items-center justify-center h-16">
          <div className="flex justify-around items-center border-b-2 cursor-pointer">
            <span className="text-green-400 p-1">
              <FaStar />
            </span>
            {avgRating}
          </div>

          <div className="text-sm p-1 cursor-pointer">{totalRatingsString}</div>
        </div>
      </div>
      <div className="h-[2px] bg-gray-300 w-full mt-8">
        <div></div>
      </div>
      {/* <div>
        <div>
          <div>
            <span>icon</span>
            <span>{sla.lastMileTravelString}</span>
          </div>
          <div>
            <span>icon</span>
            <span>{costForTwoMessage}</span>
          </div>
        </div>
        <div></div>
      </div> */}

      <div className="pb-8">
        {listItem.map((listItem, index) => (
          <RestaurantMenuList
            key={listItem?.card?.card?.title}
            data={listItem?.card?.card}
            showIndex={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
      <div className="pt-8 bg-gray-100 p-2 h-72">
        <div className="flex gap-2 items-center">
          <span className="font-bold text-gray-400 font-serif text-3xl">Fssai</span>
          <span className="text-sm text-gray-400">Licence NO.22773402333000034</span>
        </div>
        <hr></hr>
        <div className="text-gray-400 pt-8 p-1">
          <p className="font-bold">{name}</p>
          <p>(Outlet: {areaName})</p>
          <div className="flex gap-2 items-center pt-2 text-sm">
            <span><IoLocation /></span>
            <p>{slugString}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
