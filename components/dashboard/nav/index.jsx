import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { CreditCardIcon, SquareArrowOutUpRightIcon } from "lucide-react";
import NavAction from "./NavAction";
import NavLogout from "./NavLogout";
import Link from "next/link";

export default function Nav({ user }) {
  return (
    <div className="shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between py-2 px-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-[#9b8eff] to-[#4b56f9] text-white p-2 rounded-lg">
              <SquareArrowOutUpRightIcon size={24} />
            </div>
            <p className="text-2xl font-bold">Popupr</p>
          </Link>
          <div className="flex md:gap-5 gap-2 items-center">
            <NavAction user={user} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback>
                    {user?.name
                      .split(" ")
                      .map((val) => val.charAt(0).toUpperCase())}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 bg-white" align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem className="cursor-pointer">
                    <CreditCardIcon /> Billing
                  </DropdownMenuItem>
                  <NavLogout />
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
