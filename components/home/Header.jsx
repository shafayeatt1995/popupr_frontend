"use client";
import { MenuIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { authUser } from "@/services/nextAuth";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const user = await authUser();
      setUser(user);
    };
    fetch();
  }, []);

  return (
    <div className="container mx-auto relative z-10">
      <div className="flex justify-between p-4 bg-white">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="logo" width={40} height={40} />
            <p className="text-2xl font-bold">Popupr</p>
          </div>
          <button
            className="md:hidden py-2 pl-2"
            onClick={() => setMenu(!menu)}
          >
            <MenuIcon />
          </button>
        </div>

        <div
          className={`md:items-center gap-4 font-semibold transition-all duration-200 absolute md:relative -z-10 md:z-0 flex flex-col md:flex-row w-full md:w-auto left-0 px-5 bg-white  ${
            menu ? "top-20" : "-top-full"
          }`}
        >
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <hr className="md:hidden" />
          <Link
            href={user ? "/dashboard" : "/login"}
            className={cn(buttonVariants({ variant: "indigo", size: "lg" }))}
          >
            {user?.name || "Get Started"}
          </Link>
        </div>
      </div>
    </div>
  );
}
