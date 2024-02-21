import React, { useEffect, useState } from "react";
import { fetchedApi } from "../fetchedApi/fetchedApi";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    try {
      const data = await fetchedApi();
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
    console.log(data) 
  };
  return <div>Home</div>;
};

export default Home;