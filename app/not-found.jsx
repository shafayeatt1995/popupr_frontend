"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { initLottie } from "@/utils";
import { Undo2Icon } from "lucide-react";
import React, { useEffect, useRef } from "react";

export default function NotFound() {
  const loadingRef = useRef(null);
  const animationPath = "/lottie/404.json";
  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const init = async () => {
      if (loadingRef.current) {
        await initLottie(loadingRef.current, animationPath);
      }
    };
    document.title = `404 | Popupr`;
    init();

    return () => {
      if (window.lottie) {
        window.lottie.stop();
        window.lottie.destroy();
      }
    };
  }, [animationPath]);

  return (
    <div className="container min-h-screen px-2 md:px-6 mx-auto flex items-center justify-center flex-col-reverse lg:flex-row lg:justify-end">
      <div className="wf-ull lg:w-1/2">
        <p className="text-sm font-medium text-blue-600">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-700 md:text-3xl">
          Page not found
        </h1>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for doesn't exist. Here are some
          helpful links:
        </p>

        <div className="flex items-center mt-6 gap-x-3">
          <Button onClick={goBack} variant="outline">
            <Undo2Icon />
            <span>Go back</span>
          </Button>

          <a
            href="/"
            className={`${cn(
              buttonVariants({ variant: "indigo", size: "lg" })
            )}`}
          >
            Take me home
          </a>
        </div>
      </div>

      <div ref={loadingRef} className="max-h-80"></div>
      {/* <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <nuxt-img
            loading="lazy"
            decoding="async"
            src="/images/404.svg"
            className="object-contain w-full"
            alt="404 page not found"
            title="404 page not found"
            fit="cover"
          />
        </div> */}
    </div>
  );
}
