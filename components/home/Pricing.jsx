"";
import { ChevronRightIcon, CircleCheckBigIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import GenerateUrl from "./GenerateUrl";

export default function Pricing() {
  return (
    <div className="container mx-auto md:py-20 py-12 px-2" id="pricing">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-indigo-500 text-center font-semibold">Pricing</h2>
        <p className="md:text-5xl text-2xl text-center font-black mt-5">
          Transform your product into a must have choice
        </p>
      </div>
      <div className="max-w-4xl grid md:grid-cols-2 gap-6 mt-12 mx-auto">
        <div className="border-[3px] p-6 rounded-3xl">
          <div className="mb-6 text-center">
            <h3 className="text-gray-800 text-3xl font-bold">
              <del>$20</del> <span className="text-6xl">$9</span>
              <sub className="text-sm font-medium">USD</sub>
            </h3>
          </div>
          <h3 className="text-3xl font-bold mb-2">Appetizer</h3>
          <p>Take the first bite of Popupr</p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-2">
              <CircleCheckBigIcon className="text-indigo-500" />
              Lifetime access
            </li>
            <li className="flex items-center gap-2">
              <CircleCheckBigIcon className="text-indigo-500" />
              Unlimited Popup
            </li>
            <li className="flex items-center gap-2">
              <CircleCheckBigIcon className="text-indigo-500" />1 website
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
              <del>$40</del> <span className="text-6xl">$19</span>
              <sub className="text-sm font-medium">USD</sub>
            </h3>
          </div>
          <h3 className="text-3xl font-bold mb-2">Main Course</h3>
          <p>Add PopUpr to all your websites, {`let's`} go!</p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-2">
              <CircleCheckBigIcon className="text-indigo-500" />
              Lifetime access
            </li>
            <li className="flex items-center gap-2">
              <CircleCheckBigIcon className="text-indigo-500" />
              Unlimited Popup
            </li>
            <li className="flex items-center gap-2">
              <CircleCheckBigIcon className="text-indigo-500" /> Unlimited
              website
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
