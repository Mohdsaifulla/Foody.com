import React, { useEffect, useState } from "react";

const BillDetails = ({ ammount }) => {
  const [totalPay, setTotalPay] = useState(0);
  useEffect(() => {
    const gstAndCharges = 20;
    setTotalPay(ammount + gstAndCharges);
  }, [ammount]);
  return (
    <div className="px-2 pb-4 py-2">
      <div className="font-semibold text-gray-600">Bill Detail</div>
      <div className="flex justify-between items-center text-sm text-gray-500 py-1">
        <span>item Total</span>
        <span>₹{ammount}</span>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-500 py-1">
        <span>Delivery fee</span>
        <span className="flex gap-1 ">
          <span className="line-through text-gray-400">₹0.00</span>
          <span className="text-green-500">FREE</span>
        </span>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-500 py-1">
        <span>GST and Charges</span>
        <span>₹20</span>
      </div>
      <hr></hr>
      <div className="flex justify-between items-center text-sm text-gray-500 py-1">
        <span className="font-semibold">TO PAY</span>
        <span className="font-semibold">₹{totalPay}</span>
      </div>
    </div>
  );
};

export default BillDetails;
