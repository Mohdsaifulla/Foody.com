import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const selectTheme = useSelector((store) => store.theme.currentTheme);
  return (
    <div className="" data-theme={selectTheme}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
