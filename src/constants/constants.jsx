import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoy } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";

export const navLinks = [
  { id: 1, name: "Search", icon: <IoIosSearch />, to: "/search" },
  { id: 2, name: "Offers", icon: <BiSolidOffer />, to: "/offers" },
  { id: 3, name: "Help", icon: <IoHelpBuoy />, to: "/help" },
  { id: 4, name: "Sign In", icon: <CgProfile />, to: "/signin" },
  { id: 5, name: "Cart", icon: <LuShoppingCart />, to: "/cart" },
];

export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/";

// export const MENU_API =
//   "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=355000&catalog_qa=undefined&submitAction=ENTER";

// export const MENU_API="https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId="

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=355000&catalog_qa=undefined&submitAction=ENTER
