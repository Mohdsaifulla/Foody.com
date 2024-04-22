import React from "react";

const Shimmer = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];
  return (
    <div className="flex flex-wrap gap-4 pt-10 px-6 items-center justify-center">
      {arr.map((item, id) => (
        <div key={id} className="">
          <div className="flex flex-col gap-4 w-52 justify-center items-center">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
