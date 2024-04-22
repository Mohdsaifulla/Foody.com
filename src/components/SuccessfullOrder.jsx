import React from "react";
import { Link } from "react-router-dom";

const SuccessfullOrder = () => {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="max-w-2xl min-h-[500px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold font-mono">Thank for Ordering</h2>
        <p className=" font-medium text-center text-2xl">
          Let's order something else more tasty one..
        </p>
        <Link
          to={"/"}
          className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-green-600 hover:text-white duration-200 flex items-center justify-center"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessfullOrder;
