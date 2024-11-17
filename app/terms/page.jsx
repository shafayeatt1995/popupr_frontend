import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Undo2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const metadata = { title: "Terms | Popupr" };
export default function page() {
  return (
    <main class="max-w-xl mx-auto">
      <div class="md:p-5 px-2 py-5">
        <Link
          className={`${cn(buttonVariants({ variant: "indigo" }))}`}
          href="/"
        >
          <Undo2Icon />
          Back
        </Link>
        <section class="max-w-3xl mx-auto p-6 bg-indigo-50 rounded-lg shadow-md mt-5">
          <h1 class="text-3xl font-bold text-gray-800 mb-4">
            Terms and Conditions for PopUpr
          </h1>
          <p class="text-gray-600 text-sm mb-6">
            Last Updated: September 26, 2023
          </p>

          <p class="text-gray-700 mb-6">
            Welcome to PopUpr! These Terms of Service govern your use of the
            PopUpr website at{" "}
            <Link href="/" class="text-indigo-500 underline">
              https://popupr.com
            </Link>{" "}
            and the services provided by PopUpr. By using our Website and
            services, you agree to these Terms.
          </p>

          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              1. Description of PopUpr
            </h2>
            <p class="text-gray-700">
              PopUpr is a platform that provides JavaScript code
              {`boilerplate's`}
              designed to help entrepreneurs launch their startups efficiently.
            </p>
          </div>

          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              2. Ownership and Usage Rights
            </h2>
            <p class="text-gray-700">
              When you purchase a package from PopUpr, you receive the rights to
              download and use the provided code to create your applications.
              While you own the code you develop using these {`boilerplate's`},
              resale of the code is prohibited. We offer a full refund within 7
              days of purchase, as outlined in our Refund Policy.
            </p>
          </div>

          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              3. User Data and Privacy
            </h2>
            <p class="text-gray-700">
              We collect and store user information, including name, email, and
              payment details, as necessary to provide our services. Please
              refer to our{" "}
              <Link href="/privacy-policy" class="text-indigo-600 underline">
                Privacy Policy
              </Link>
              for details on data handling and user privacy.
            </p>
          </div>

          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              4. Non-Personal Data Collection
            </h2>
            <p class="text-gray-700">
              To improve our services and enhance user experience, we use web
              cookies to collect non-personal data.
            </p>
          </div>

          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              5. Governing Law
            </h2>
            <p class="text-gray-700">
              These Terms are governed by the laws of France.
            </p>
          </div>

          <div class="mb-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
              6. Updates to the Terms
            </h2>
            <p class="text-gray-700">
              We may update these Terms periodically. Any changes will be
              communicated to users via email.
            </p>
          </div>

          <p class="text-gray-700">
            For any questions or concerns about these Terms of Service, please
            contact us at{" "}
            <a
              href="mailto:contact@popupr.com"
              class="text-indigo-600 underline"
            >
              contact@popupr.com
            </a>
            .
          </p>

          <p class="text-gray-700 mt-6">Thank you for choosing PopUpr!</p>
        </section>
      </div>
    </main>
  );
}
