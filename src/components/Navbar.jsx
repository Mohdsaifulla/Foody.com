import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { addUserInfo, removeUser } from "../store/userInfoSlice";
import { auth } from "../fireBase/firebase";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import ThemeController from "./ThemeController";
import toast, { Toaster } from "react-hot-toast";
const Navbar = () => {
  const navigate = useNavigate();
  const cartItem = useSelector((store) => store.cart.item);
  const loggedIn = useSelector((store) => store.user);
  // console.log(loggedIn);
  const notifyLogout = () =>
    toast.success("You have been logged out successfully");
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUserInfo({ uid: uid, email: email, displayName: displayName })
        );
        navigate("/");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscibe();
  }, []);
  const handleSignOut = () => {
    const auth = getAuth();
    dispatch(removeUser());
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/ErrorPage");
      });
  };
  return (
    <div className="flex justify-between h-20 shadow-xl lg:px-32 sm:px-10 sticky top-0 backdrop-blur-3xl z-10">
      <div className="flex justify-center items-center">
        <Link to="/">
          <img src="/swiggy-1.svg" alt="swiggy-logo" className="w-7" />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-10 relative">
        <ul className="flex gap-6">
          <ThemeController />
          <Link to={"/search"}>
            <li className="flex gap-2 items-center font-semibold hover:text-orange-500">
              <span>
                <IoIosSearch className="text-xl font-bold" />
              </span>
              <span>Search</span>
            </li>
          </Link>
          {loggedIn ? (
            <button to={"#"} onClick={handleSignOut}>
              <li
                className="flex gap-2 items-center font-semibold hover:text-orange-500"
                onClick={() => notifyLogout()}
              >
                <span>
                  <IoIosLogOut className="text-xl font-bold" />
                </span>
                <span>{loggedIn.email.replace(/\d.*/, "").trim()}</span>
              </li>
            </button>
          ) : (
            <Link to={"/signin"}>
              <li className="flex gap-2 items-center font-semibold hover:text-orange-500">
                <span>
                  <CgProfile className="text-xl font-bold" />
                </span>
                <span>Sign In</span>
              </li>
            </Link>
          )}

          <Link to={"/cart"}>
            <li className="flex gap-2 items-center font-semibold hover:text-orange-500">
              <span>
                <LuShoppingCart className="text-xl font-bold" />
              </span>
              <span>Cart</span>
            </li>
          </Link>
        </ul>
        <div className="absolute top-[18px] right-[45px] text-sm font-semibold">
          {cartItem?.length}
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Navbar;
