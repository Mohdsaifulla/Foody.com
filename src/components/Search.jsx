import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CDN_URL } from "../constants/constants";
import { MdStars } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const [filterItem, setFilterItem] = useState([]);
  const items = useSelector((store) => store.products.allProducts);

  const handleInput = (e) => {
    setSearchItem(e.target.value);
  };
  useEffect(() => {
    const searchedFilter = items.filter((item) =>
      item?.info?.name.toLowerCase().includes(searchItem.toLocaleLowerCase())
    );
    setFilterItem(searchedFilter);
  }, [searchItem]);

  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <div className="flex gap-4  w-[80%] h-16 justify-center items-center rounded">
        <input
          className="w-[60%] h-12 p-1 rounded border-2 border-gray-500 font-semibold shadow-2xl"
          value={searchItem}
          type="text"
          placeholder="Search items..."
          onChange={handleInput}
        />
        <IoIosSearch className="text-xl font-bold absolute right-[30%]" />
      </div>
      {!searchItem && (
        <div className="text-xl p-4 font-semibold mt-10 animate-pulse w-[70%]">
          Are you looking for tasty meals then search you fav 🤗 one
        </div>
      )}
      {searchItem && (
        <div className="flex flex-wrap w-full items-center justify-center gap-2 px-16 py-6">
          {filterItem.length > 0 ? (
            searchItem &&
            filterItem.map((item) => (
              <div
                key={item.info.id}
                className="border p-2 m-2 w-52 rounded-xl"
              >
                <h1 className="text-lg pt-1 pb-1">
                  {item.info.name.slice(0, 20)}...
                </h1>
                <Link to={`/restaurants/${item.info.id}`}>
                  <img
                    src={`${CDN_URL}${item?.info?.cloudinaryImageId}`}
                    alt="Food"
                    className="w-full h-40 rounded-2xl object-cover hover:scale-90 duration-300"
                  />
                </Link>
                <div className="pt-1 pb-1">
                  <h2 className="font-semibold flex gap-1 items-center">
                    <span>
                      <MdStars className="text-green-400" />
                    </span>
                    <span>{item?.info?.avgRating}</span>
                    {item?.info?.sla.slaString}
                  </h2>
                </div>
                <p className="px-1">{item?.info.areaName.slice(0, 14)}..</p>
              </div>
            ))
          ) : (
            <div className=" flex items-center justify-center py-10 rounded-lg shadow-lg">
              <p className="text-xl px-4 font-semibold animate-bounce">
                Sorry look like item is not available...🥲
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
