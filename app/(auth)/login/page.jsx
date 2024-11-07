"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function login() {
  const socialLogin = (provider) => {
    window.open(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/social-login/${provider}`,
      "_self"
    );
  };

  return (
    <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
        <div className="lg:h-[400px] md:h-[300px] max-md:mt-8 relative">
          <Image
            src="/images/auth.svg"
            fill={true}
            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
            alt="Auth image"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
        <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-sm  max-md:mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold">Sign in</h1>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              No need to create an account! If you don’t have one, we’ll
              automatically create for you.
            </p>
          </div>

          <Button
            className="w-full py-6"
            onClick={() => socialLogin("google")}
            variant="default"
          >
            <Image
              src="/icons/google.svg"
              alt="google"
              width={20}
              height={20}
            />
            Sign in with google
          </Button>
        </div>
      </div>
    </div>
  );
}
