import React, { useEffect, useState, useRef } from "react";
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

  //https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.46210&lng=78.57580&collection=83644&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null

  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = 300;
      const step = 7;
      let scrollValue = 0;
      const scroll = () => {
        if (direction === "left") {
          container.scrollLeft -= step;
          scrollValue += step;
        } else if (direction === "right") {
          container.scrollLeft += step;
          scrollValue += step;
        }
        if (scrollValue < scrollAmount) {
          requestAnimationFrame(scroll);
        }
      };
      scroll();
    }
  };

  return (
    <div>
      <div className="pt-8 font-bold text-2xl">
        <h1>{bannerData?.header?.title}</h1>
      </div>
      <div className="relative">
        <div
          id="overflow"
          className="flex h-42 overflow-x-scroll pt-8 overflow-y-hidden"
          ref={containerRef}
        >
          {bannerData?.imageGridCards?.info?.map((item) => (
            <img
              key={item?.id}
              src={`${CDN_URL}${item.imageId}`}
              alt="Banner Image"
              className="md:w-34 rounded-badge  border w-[144px] hover:scale-105 duration-300   mx-2"
            />
          ))}
          <button
            className="absolute -top-3 right-0 bg-gray-300 w-10 h-10 rounded-full"
            onClick={() => handleScroll("left")}
          >
            &gt;
          </button>
          <button
            className="absolute -top-3 right-16 bg-gray-300 w-10 h-10 rounded-full"
            onClick={() => handleScroll("right")}
          >
            &lt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
