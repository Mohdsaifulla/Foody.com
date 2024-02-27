import React, { useEffect, useState } from "react";
import  {MENU_API} from "../constants/constants"
import { useParams } from "react-router-dom";
const RestaurantsMenu = () => {
  const [menu, setMenu] = useState([]);
const {restaurantId}=useParams()
console.log(restaurantId)
  const fetchRestMenu = async () => {

    const data = await fetch(
     `${MENU_API}${restaurantId}`
    );
    const jsonData = await data.json();
    console.log(jsonData?.data);
    setMenu(jsonData?.data.cards[0].card.card.text)
  };
  useEffect(() => {
fetchRestMenu()
  }, []);

  console.log(menu);
  return (
    <div>
    {menu}
    </div>
  );
};

export default RestaurantsMenu;
