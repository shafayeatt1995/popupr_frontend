"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ChevronRightIcon } from "lucide-react";
import { userApi } from "@/server";
import { authUser } from "@/services/nextAuth";
import { useRouter } from "next/navigation";
import { openCheckout } from "@/utils/paddle";
import { toast } from "sonner";

export default function GenerateUrl({ productName }) {
  const router = useRouter();
  const generateUrl = async () => {
    const user = await authUser();
    if (user) {
      try {
        const { priceID, discountID } = await userApi.generatePaymentUrl({
          productName,
        });
        if (priceID) {
          await openCheckout({
            priceId: priceID,
            discountId: discountID,
            email: user.email,
            customData: { user },
          });
        }
      } catch (error) {
        if (error?.error?.toast) {
          toast.error(error.error.toast);
        }
      }
    } else {
      router.push("/login");
    }
  };

  return (
    <Button className="w-full mt-10" onClick={generateUrl}>
      Get Popupr <ChevronRightIcon />
    </Button>
  );
}
