import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InfinityIcon } from "lucide-react";
import React from "react";

export default function NavAction({ user }) {
  return (
    <div>
      {user.isFreeUser ? (
        <Button>Get Started</Button>
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
