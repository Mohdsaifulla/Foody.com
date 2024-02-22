import React, { useEffect, useState } from "react";
import { fetchedApi } from "../fetchedApi/fetchedApi";
import Banner from "./Banner";
const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div className="px-24">
      <Banner />
      <div>home</div>
    </div>
  );
};

export default Home;
