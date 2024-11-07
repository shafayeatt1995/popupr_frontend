"use client";
import React from "react";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function NavLogout() {
  const submit = async () => {
    await signOut();
  };
  return (
    <DropdownMenuItem
      onClick={submit}
      className="text-rose-500 cursor-pointer focus:bg-rose-100 focus:text-rose-600"
    >
      <LogOutIcon /> Log out
    </DropdownMenuItem>
  );
}
