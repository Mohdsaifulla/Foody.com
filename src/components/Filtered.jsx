import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";

const Filtered = ({ data, setFilteredData }) => {

  const [activeFilters, setActiveFilters] = useState({
    ratingFourPlus: false,
    fastDelivery: false,
  });
  const handleFilter = (filterKey) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filterKey]: !prevFilters[filterKey],
    }));
    applyFilters();
  };

  useEffect(() => {
    applyFilters();
  }, [activeFilters]);

  const applyFilters = () => {
    let filteredData = [...data];

    if (activeFilters.fastDelivery) {
      filteredData = filteredData.sort(
        (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
      );
    }
    if (activeFilters.ratingFourPlus) {
      filteredData = filteredData.filter((item) => item.info.avgRating > 4);
    }
    setFilteredData(filteredData);
  };

  return (
    <div className="flex justify-center items-center gap-4 pt-4 flex-wrap">
      <button className="border p-3 rounded-3xl font-semibold">Filter</button>
      <button className="border p-3 rounded-3xl font-semibold">Sort By</button>
      <button
        className={`${
          activeFilters.fastDelivery ? "bg-gray-100 border border-gray-200" : ""
        } border p-3 rounded-3xl font-semibold flex justify-between items-center`}
        onClick={() => handleFilter("fastDelivery")}
      >
        Fast Delivery
        {activeFilters.fastDelivery ? (
          <span className=" font-bold text-xl">
            <IoCloseSharp />
          </span>
        ) : (
          ""
        )}
      </button>
      <button className="border p-3 rounded-3xl font-semibold">
        New on Swiggy
      </button>

      <button
        className={`${
          activeFilters.ratingFourPlus
            ? "bg-gray-100 border border-gray-200"
            : ""
        } border p-3 rounded-3xl font-semibold flex justify-between items-center`}
        onClick={() => handleFilter("ratingFourPlus")}
      >
        Rating 4.0+
        {activeFilters.ratingFourPlus ? (
          <span className=" font-bold text-xl">
            <IoCloseSharp />
          </span>
        ) : (
          ""
        )}
      </button>
      <button className="border p-3 rounded-3xl font-semibold">Pure Veg</button>
    </div>
  );
};

export default Filtered;
