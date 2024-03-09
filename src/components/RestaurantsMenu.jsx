import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { FaStar } from "react-icons/fa";

const RestaurantsMenu = () => {
  const { restaurantId } = useParams();
  const menu = useRestaurantMenu(restaurantId);

  if (menu === null) return <Shimmer />;
  const { name, cuisines, areaName, avgRating, totalRatingsString } =
    menu?.cards[0]?.card?.card?.info;
  // console.log(name, cuisines, areaName, avgRating, totalRatingsString);
  console.log(menu);
  return (
    <div className="px-8 pt-8">
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
        <div className="border rounded-lg flex flex-col items-center justify-center">
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
    </div>
  );
};

export default RestaurantsMenu;
