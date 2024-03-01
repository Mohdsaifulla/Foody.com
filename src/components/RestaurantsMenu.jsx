import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

const RestaurantsMenu = () => {
  const { restaurantId } = useParams();
  const menu = useRestaurantMenu(restaurantId);
// destrucute heee
  return <div>{menu}</div>;
};

export default RestaurantsMenu;
