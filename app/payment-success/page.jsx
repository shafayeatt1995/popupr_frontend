"use client";
import { CheckCircle, UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signOut } from "next-auth/react";
import { removeSession } from "@/services/nextAuth";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  const loginAgain = async () => {
    try {
      await removeSession();
      await signOut();
      router.push("/login");
    } catch (error) {}
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-xl overflow-hidden shadow-inner transition-all duration-300 hover:shadow-indigo-200">
        <CardHeader className="text-center relative py-8">
          <div className="absolute inset-0" />
          <div className="relative z-10">
            <div className="flex justify-center items-center">
              <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-indigo-500 shadow-lg">
                <CheckCircle className="h-14 w-14 text-white" />
              </div>
            </div>
            <CardTitle className="text-3xl font-extrabold text-gray-700 mb-2  mt-8">
              Payment successful!
            </CardTitle>
            <p className="text-gray-600 text-lg px-10">
              Thank you for your purchase. Please login again to access full
              service.
            </p>
          </div>
        </CardHeader>
        <CardFooter className="flex flex-col space-y-3 px-8 pb-8">
          <Button onClick={loginAgain}>
            <UserIcon /> Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
