import { cn } from "@/lib/utils";
import { ArrowRightIcon, ChevronUpIcon, CircleCheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

export default function Hero() {
  const messages = [
    "One-Time Payment, Lifetime Access",
    "🚀 1-Minute, No-Code Setup",
    "💼 Boost Your Conversion Rate Effortlessly!",
  ];
  return (
    <div className="container mx-auto md:py-12 pb-10 pt-4 px-2 relative">
      <div className="absolute xl:right-1/3 lg:right-72 md:right-52 right-24 flex flex-col items-center md:text-base text-xs">
        PopUp in action
        <Image
          src="/icons/hero-top.svg"
          alt="hero-top"
          width={50}
          height={50}
        />
      </div>

      <div className="flex flex-col items-center md:pt-20 pt-16">
        <h1 className="group lg:text-5xl md:text-4xl text-3xl font-black text-center leading-10">
          <span>Convert visitors into</span>
          <br className="md:hidden" />
          <span> loyal </span>
          <span className="relative">
            customers
            <span className="md:absolute -top-5 -right-5 scale-75 group-hover:scale-100 rotate-0 group-hover:rotate-12 transition-all duration-200 saturate-0 group-hover:saturate-100">
              🤑
            </span>
          </span>
          <br className="hidden md:inline" />
          <span> with </span>
          <br className="md:hidden" />
          <span className="border-b-4 md:border-b-8 border-indigo-200 border-dashed group-hover:border-indigo-500 duration-200 transition-all">
            Attention Grabbing PopUp
          </span>
        </h1>
        <p className="md:text-lg max-w-xl text-center md:mt-16 mt-8">
          Instantly Engage with Impactful Popup! Captivate your visitors with
          striking, insightful notifications that spark curiosity, foster
          genuine engagement, and drive conversions effortlessly.
        </p>
        <ul className="mt-16 space-y-2">
          {messages.map((val) => (
            <li key={val} className="flex gap-2">
              <CircleCheckIcon className="text-indigo-500" /> {val}
            </li>
          ))}
        </ul>
        <div className="flex gap-5 flex-col items-center mt-10">
          <Link
            href="#pricing"
            className={`${cn(buttonVariants({ variant: "indigo" }))} px-10`}
          >
            Get Popupr <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
