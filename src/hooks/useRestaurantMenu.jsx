import { useEffect, useState } from "react";

const useRestaurantMenu = (restaurantId) => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetchRestMenu();
  }, []);

  const fetchRestMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    console.log(jsonData?.data.cards[0].card.card.info.name);
    setMenu(jsonData?.data.cards[0].card.card.info.name);
  };
  return menu;
};

export default useRestaurantMenu;