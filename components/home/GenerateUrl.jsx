"use client";
import React, { useState, useRef } from "react";
import { Button } from "../ui/button";
import { ChevronRightIcon, Loader2Icon } from "lucide-react";
import { userApi } from "@/server";
import { authUser } from "@/services/nextAuth";
import { useRouter } from "next/navigation";
import { openCheckout } from "@/utils/paddle";
import { toast } from "sonner";

export default function GenerateUrl({ productName }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const click = useRef(true);

  const paddleUrl = async () => {
    if (click.current) {
      try {
        click.current = false;
        setLoading(true);
        const user = await authUser();
        if (user) {
          try {
            const { priceID, discountID, popupr_pac } =
              await userApi.generatePaymentUrl({
                productName,
              });
            if (priceID) {
              await openCheckout({
                priceId: priceID,
                discountId: discountID,
                email: user.email,
                customData: { user, popupr_pac },
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
      } catch (error) {
      } finally {
        click.current = true;
        setLoading(false);
      }
    }
  };
  const openUrl = async () => {
    if (click.current) {
      try {
        click.current = false;
        setLoading(true);
        const user = await authUser();
        if (user) {
          try {
            const { popupr_pac, url, discountCode } =
              await userApi.generatePaymentUrl({ productName });
            let generateURL = `${url}?checkout[custom][userID]=${user._id}&checkout[custom][popuprPac]=${popupr_pac}`;
            if (discountCode)
              generateURL += `&checkout[discount_code]=${discountCode}`;
            window.open(generateURL, "_self");
          } catch (error) {
            if (error?.error?.toast) {
              toast.error(error.error.toast);
            }
          }
        } else {
          router.push("/login");
        }
      } catch (error) {
      } finally {
        click.current = true;
        setLoading(false);
      }
    }
  };

  return (
    <Button className="w-full mt-10" onClick={openUrl} disabled={loading}>
      {loading && <Loader2Icon className="animate-spin" />}
      Get Popupr <ChevronRightIcon />
    </Button>
  );
}
