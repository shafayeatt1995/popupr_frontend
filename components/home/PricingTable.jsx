import { CircleCheckBigIcon } from "lucide-react";
import React from "react";
import GenerateUrl from "./GenerateUrl";

export default function PricingTable() {
  return (
    <div className="max-w-4xl grid md:grid-cols-2 gap-6 mt-12 mx-auto">
      <div className="border-[3px] p-6 rounded-3xl">
        <div className="mb-6 text-center">
          <h3 className="text-gray-800 text-3xl font-bold">
            {/* <del>$40</del> */}
            <span className="text-6xl">$25</span>
            <sub className="text-sm font-medium">USD</sub>
          </h3>
        </div>
        <h3 className="text-3xl font-bold mb-2">Appetizer</h3>
        <p>Take the first bite of Popupr</p>

        <ul className="mt-6 space-y-4">
          <li className="flex items-center gap-2">
            <CircleCheckBigIcon className="text-indigo-500" />1 website
          </li>
          <li className="flex items-center gap-2">
            <CircleCheckBigIcon className="text-indigo-500" />
            Lifetime access
          </li>
          <li className="flex items-center gap-2">
            <CircleCheckBigIcon className="text-indigo-500" />
            Unlimited Popup
          </li>
          <li className="flex items-center gap-2">
            <CircleCheckBigIcon className="text-indigo-500" />
            Simple analytics
          </li>
        </ul>

        <GenerateUrl productName="basic" />
        <p className="text-center mt-2">Pay once. Access forever.</p>
      </div>
      <div className="border-[3px] border-indigo-500 p-6 rounded-3xl relative">
        <div className="absolute  -top-[14px] left-0 right-0 text-center flex justify-center">
          <p className="bg-gradient text-sm text-white px-4 py-0.5 rounded-full uppercase">
            Popular
          </p>
        </div>
        <div className="mb-6 text-center">
          <h3 className="text-gray-800 text-3xl font-bold">
            {/* <del>$60</del> */}
            <span className="text-6xl">$50</span>
            <sub className="text-sm font-medium">USD</sub>
          </h3>
        </div>
        <h3 className="text-3xl font-bold mb-2">Main Course</h3>
        <p>Add PopUpr to all your websites, {`let's`} go!</p>
        <ul className="mt-6 space-y-4">
          <li className="flex items-center gap-2">
            <CircleCheckBigIcon className="text-indigo-500" /> Unlimited website
          </li>
          <li className="flex items-center gap-2">
            <CircleCheckBigIcon className="text-indigo-500" />
            Lifetime access
          </li>
          <li className="flex items-center gap-2">
            <CircleCheckBigIcon className="text-indigo-500" />
            Unlimited Popup
          </li>
          <li className="flex items-center gap-2">
            <CircleCheckBigIcon className="text-indigo-500" />
            Simple analytics
          </li>
        </ul>
        <GenerateUrl productName="main_course" />

        <p className="text-center mt-2">Pay once. Access forever.</p>
      </div>
    </div>
  );
}
