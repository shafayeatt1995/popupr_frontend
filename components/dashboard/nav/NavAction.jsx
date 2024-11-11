import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { InfinityIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NavAction({ user }) {
  return (
    <div>
      {user.isFreeUser ? (
        <Link
          className={`${cn(buttonVariants({ variant: "indigo" }))}`}
          href="/#pricing"
        >
          Get Started
        </Link>
      ) : (
        <Badge>
          <p className="flex gap-2 items-center py-0.5">
            <InfinityIcon size={16} />
            Unlimited Popup
          </p>
        </Badge>
      )}
    </div>
  );
}
