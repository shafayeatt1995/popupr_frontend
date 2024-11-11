import React from "react";
import PricingTable from "./PricingTable";

export default function Pricing() {
  return (
    <div className="container mx-auto md:py-20 py-12 px-2" id="pricing">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-indigo-500 text-center font-semibold">Pricing</h2>
        <p className="md:text-5xl text-2xl text-center font-black mt-5">
          Transform your product into a must have choice
        </p>
      </div>
      <PricingTable />
      <div className="text-center max-w-lg mx-auto mt-5">
        <h3 className="font-bold text-lg">
          🎊 Celebrate Our Launch with an Exclusive Discount 🎊
        </h3>
        <p className="text-center text-sm">
          Be one of the first to experience our new service and enjoy a special
          launch price! Only 73 discounted spots are left. discount applicable
          for first 100 sales.
        </p>
      </div>
    </div>
  );
}
