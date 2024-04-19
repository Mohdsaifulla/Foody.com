import { useEffect, useState } from "react";

const useRestaurantMenu = (restaurantId) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetchRestMenu();
  }, []);

  const fetchRestMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const jsonData = await data.json();
    setMenu(jsonData?.data);
    // console.log(jsonData?.data);

  };
  return menu
};

export default useRestaurantMenu;

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=822683&catalog_qa=undefined&submitAction=ENTER