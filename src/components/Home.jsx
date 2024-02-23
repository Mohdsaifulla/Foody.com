import React, { useEffect, useState } from "react";
import { fetchedApi } from "../fetchedApi/fetchedApi";
import Banner from "./Banner";
import { CDN_URL } from "../constants/constants";
import { MdStars } from "react-icons/md";
const Home = () => {
  const [data, setData] = useState([]);
  const [heading, setHeading] = useState([]);
  const fetchData = async () => {
    const dataApi = await fetchedApi();
    setHeading(dataApi?.data?.cards[2]?.card?.card.title);
    console.log(
      dataApi?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setData(
      dataApi?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(data)
  return (
    <>
      <div className="lg:px-32 px-10">
        <Banner />
        <div className="">
          <div className="pt-8 font-bold text-2xl">
            <h1>{heading}</h1>
          </div>
          {/* <div>Filter</div> */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {data.map((item) => (
              <div className="pt-8 w-72 p-4 flex flex-col gap-4">
                <img
                  src={`${CDN_URL}${item?.info?.cloudinaryImageId}`}
                  alt="Food"
                  className="w-full h-40 rounded-2xl object-cover"
                />

                <div className="flex flex-col gap-1">
                  <h2 className="font-semibold">{item?.info?.name}</h2>
                  <h2 className="font-semibold flex gap-1 items-center">
                    <span>
                      <MdStars className="text-green-400" />
                    </span>
                    <span>{item?.info?.avgRating}</span>
                    {item?.info?.sla.slaString}
                  </h2>
                  <p className="text-wrap text-gray-400">
                    If a dog chews shoes whose shoes does he choose?
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
