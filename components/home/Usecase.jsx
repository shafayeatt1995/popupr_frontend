import Image from "next/image";
import React from "react";

export default function Usecase() {
  return (
    <div className="container mx-auto ms:py-20 py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="md:text-5xl text-3xl text-center font-black">
          Use cases
        </h2>
        <p className="text-lg text-center mt-5 md:px-20 px-2">
          There are millions of ways to spotlight a problem and drive action.
          These are the products examples.
        </p>
      </div>
      <div className="max-w-5xl grid md:grid-cols-2 md:py-16 py-5 md:pl-16 pl-5 overflow-hidden gap-8 md:gap-16 bg-gradient text-white mx-auto mt-16 md:rounded-3xl items-center">
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Habit tracker</h3>
          <div>
            <p>
              Remind your visitors of the pain of not sticking to their habits
            </p>
          </div>
        </div>
        <div>
          <Image
            alt="Habit tracker"
            width={1095}
            height={221}
            className="duration-200 hover:translate-x-3 drop-shadow-lg transition-all"
            src="/images/usecase/1.png"
          />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">Analytics Tool</h3>
          <div>
            <p>Express the sting of not growing a business</p>
          </div>
        </div>
        <div>
          <Image
            alt="Analytics Tool"
            width={1095}
            height={221}
            className="duration-200 hover:translate-x-3 drop-shadow-lg transition-all"
            src="/images/usecase/2.png"
          />
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            Subscription Reminder
          </h3>
          <div>
            <p>Show the consequence of forgetting to cancel subscriptions</p>
          </div>
        </div>
        <div>
          <Image
            alt="Analytics Tool"
            width={1095}
            height={221}
            className="duration-200 hover:translate-x-3 drop-shadow-lg transition-all"
            src="/images/usecase/3.png"
          />
        </div>
      </div>
    </div>
  );
}
