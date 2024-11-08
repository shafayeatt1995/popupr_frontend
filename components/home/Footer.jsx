import { SquareArrowOutUpRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="border-t md:p-10 p-2 pb-6 md:pb-10">
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-8 justify-items-center">
          <div className="flex flex-col lg:col-span-1 col-span-2">
            <Link href="/">
              <div className="flex items-center gap-2">
                <div className="bg-gradient-to-br from-[#9b8eff] to-[#4b56f9] text-white p-2 rounded-lg">
                  <SquareArrowOutUpRightIcon size={24} />
                </div>
                <p className="text-2xl font-bold">Popupr</p>
              </div>
            </Link>
            <p className="mt-3">
              Catch attention with wake-up call popups and turn visitors into
              customers!
            </p>
            <p className="mt-4 text-gray-500">
              Copyright © 2024 - All rights reserved
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold md:mb-6 mb-2">LINKS</h4>
            <ul className="md:space-y-4 space-y-2 text-gray-600">
              <li>
                <Link href="/login" className="hover:underline">
                  Login
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:underline">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold md:mb-6 mb-2">LEGAL</h4>
            <ul className="md:space-y-4 space-y-2 text-gray-600">
              <li>
                <Link href="/terms" className="hover:underline">
                  Terms of condition
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t md:px-10 md:py-8 p-4">
        <p className="text-sm lg:text-left text-center">
          Hey Curious 👋 I{`'`}m Jack, creator of PopUp. Thanks for taking the
          time to explore!.
        </p>
      </div>
    </footer>
  );
}
