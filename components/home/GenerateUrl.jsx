"use client";
import React, { useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { ChevronRightIcon } from "lucide-react";
import { userApi } from "@/server";
import { authUser } from "@/services/nextAuth";
import { useRouter } from "next/navigation";
import { openCheckout } from "@/utils/paddle";

export default function GenerateUrl({ productID }) {
  const router = useRouter();
  const user = useRef(null);
  const generateUrl = async () => {
    if (user.current) {
      try {
        const data = await userApi.generatePaymentUrl({ productID });
        console.log(data);
        // if (data.priceData) {
        //   console.log(data.priceData);
        //   await openCheckout({
        //     priceId: "pri_01jc030me2qnyrjqe1b0v1ppsn",
        //     id: user.current._id,
        //     email: user.current.email,
        //     customData: { user: user.current, package: data.priceData.name },
        //   });
        // }
      } catch (error) {}
    } else {
      router.push("/login");
    }
  };

  useEffect(() => {
    const getUser = async () => {
      try {
        user.current = await authUser();
      } catch (error) {}
    };
    getUser();
  }, []);

  return (
    <Button className="w-full mt-10" onClick={generateUrl}>
      Get Popupr <ChevronRightIcon />
    </Button>
  );
}
