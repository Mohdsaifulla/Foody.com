import React, { useEffect, useState } from "react";
import { fetchedApi } from "../fetchedApi/fetchedApi";
import { CDN_URL } from "../constants/constants";
const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  const fetchData = async () => {
    const dataApi = await fetchedApi();
    setBannerData(dataApi?.data?.cards[0]?.card?.card);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(bannerData);
  return (
    <div>
      <div className="pt-8 font-bold text-2xl">
        <h1>{bannerData?.header?.title}</h1>
      </div>
      <div className="flex overflow-x-scroll pt-8">
        {bannerData?.imageGridCards?.info?.map((item) => (
          <img
            src={`${CDN_URL}${item.imageId}`}
            alt="Banner Image"
            className="md:w-36 w-[144px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
