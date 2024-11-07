/* eslint-disable @next/next/no-img-element */
import Customize from "@/components/dashboard/domain/Customize";
import Test from "@/components/dashboard/domain/Test";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Undo2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default async function page({ params }) {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between mt-8 p-2">
        <Link
          href="/dashboard"
          className={`${cn(buttonVariants({ variant: "indigo" }))}`}
        >
          <Undo2Icon /> Back
        </Link>
        <Test />
      </div>
      <div className="p-2">
        <Customize params={params} />
      </div>
    </div>
  );
}
