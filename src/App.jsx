import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const selectTheme = useSelector((store) => store.theme.currentTheme);
  document.documentElement.setAttribute("data-theme", selectTheme);
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
