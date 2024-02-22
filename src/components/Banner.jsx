import React, { useEffect, useState } from "react";
import { fetchedApi } from "../fetchedApi/fetchedApi";

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const dataApi = await fetchedApi();
    setBannerData(dataApi?.data?.cards[0]?.card?.card);
    // console.log(dataApi?.data?.cards[0]?.card?.card?.header)
    // console.log(dataApi?.data?.cards[0]?.card?.card)
  };
//   console.log(bannerData);
    console.log(bannerData?.imageGridCards?.info[1]?.imageId);
  return (
    <div>
      <div className="pt-4 font-bold text-2xl">
        <h1>{bannerData?.header?.title}</h1>
      </div>
      <div>
        {bannerData?.imageGridCards?.info?.map((item) => (
          <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} alt="Banner Image" />
        ))}
      </div>
    </div>
  );
};

export default Banner;
