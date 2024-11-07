import Image from "next/image";
import React from "react";

export default function Marketing() {
  return (
    <div className="bg-gradient text-white">
      <div className="container mx-auto md:py-20 py-12">
        <div className="flex flex-col items-center">
          <h2 className="lg:text-5xl md:text-4xl text-3xl text-center font-black px-2">
            Did you know?
            <br />
            97% of visitors aren’t ready to buy!
          </h2>
          <p className="text-lg max-w-xl text-center mt-10 px-2">
            Investing in ads, SEO, and content marketing is essential, but why
            are potential customers leaving and never returning? It’s time to
            think about your strategy and keep them coming back!
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-16">
          <div className="flex flex-col items-center max-w-44">
            <p className="text-5xl">🫣</p>
            <p className="text-center">Potential customer is interested</p>
          </div>
          <Image
            src="/icons/arrow.svg"
            alt="arrow"
            width={56}
            height={56}
            className="md:-rotate-90"
          />
          <div className="flex flex-col items-center max-w-40">
            <p className="text-5xl">🫤</p>
            <p className="text-center">
              {`Doesn't`} find a reason to buy{" "}
              <span className="underline">right now</span>
            </p>
          </div>
          <Image
            src="/icons/arrow.svg"
            alt="arrow"
            width={56}
            height={56}
            className="md:-rotate-90 -scale-x-100"
          />
          <div className="flex flex-col items-center max-w-44">
            <p className="text-5xl">😬</p>
            <p className="text-center">Leaves and never comes back</p>
          </div>
        </div>
      </div>
    </div>
  );
}
