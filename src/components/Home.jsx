import React, { useEffect, useState } from "react";
import { fetchedApi } from "../fetchedApi/fetchedApi";
import Banner from "./Banner";
import { CDN_URL } from "../constants/constants";
import { MdStars } from "react-icons/md";
import { Link } from "react-router-dom";
import Filtered from "./Filtered";
import Shimmer from "./Shimmer";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addAllProducts } from "../store/allProductSlice";
const Home = () => {
  const dispatch = useDispatch();
  const allDataInStore = useSelector((store) => store.products.allProducts);
  const [data, setData] = useState([]);
  const [heading, setHeading] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  // if (data) return <Shimmer />;
  const fetchData = async () => {
    const dataApi = await fetchedApi();
    setHeading(dataApi?.data?.cards[2]?.card?.card.title);
    setData(
      dataApi?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurant(
      dataApi?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    const data =
      dataApi?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    dispatch(addAllProducts(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (allDataInStore == null) return <Shimmer />;
  return (
    <>
      <div className="lg:px-32 px-10">
        <Banner />
        <div className="">
          <div className="pt-8 font-bold text-2xl">
            <h1>{heading}</h1>
          </div>
          <Filtered data={data} setFilteredData={setFilteredRestaurant} />
          <div className="flex flex-wrap justify-center items-center gap-6 pt-8 pb-8">
            {filteredRestaurant.map((item) => (
              <div
                key={item?.info?.id}
                className="pt-8 w-72  p-4 flex flex-col gap-4 border rounded-2xl"
              >
                <Link to={`/restaurants/${item.info.id}`}>
                  <img
                    src={`${CDN_URL}${item?.info?.cloudinaryImageId}`}
                    alt="Food"
                    className="w-full h-40 rounded-2xl object-cover hover:scale-90 duration-300"
                  />
                </Link>
                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold">
                    {item?.info?.name.slice(0, 28)}...
                  </h2>
                  <h2 className="font-semibold flex gap-1 items-center">
                    <span>
                      <MdStars className="text-green-400" />
                    </span>
                    <span>{item?.info?.avgRating}</span>
                    {item?.info?.sla.slaString}
                  </h2>
                  <p className="text-wrap text-gray-400">
                    We provide you best services our priority is our customers.
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
