import React, { useEffect, useState } from "react";
// import { MENU_API } from "../constants/constants";
import { useParams } from "react-router-dom";
const RestaurantsMenu = () => {
  const [menu, setMenu] = useState([]);
  const { restaurantId } = useParams();
  // console.log(restaurantId);
  const fetchRestMenu = async () => {
    //`${MENU_API}${restaurantId}`
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    console.log(jsonData?.data.cards[0].card.card);
    setMenu(jsonData?.data.cards[0].card.card.info.name);
  };
  useEffect(() => {
    fetchRestMenu();
  }, []);

  console.log(menu);
  return <div>{menu}</div>;
};

export default RestaurantsMenu;
