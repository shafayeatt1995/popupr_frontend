import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Undo2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <main className="max-w-xl mx-auto">
      <div className="md:p-5 px-2 py-5">
        <Link
          className={`${cn(buttonVariants({ variant: "indigo" }))}`}
          href="/"
        >
          <Undo2Icon />
          Back
        </Link>
        <section className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            Last Updated: August 25, 2023
          </p>

          <p className="text-gray-700 mb-6">
            Thank you for visiting PoopUp. This Privacy Policy outlines how we
            collect, use, and protect your personal and non-personal information
            when you use our website located at{" "}
            <a href="https://poopup.co" className="text-indigo-600 underline">
              https://poopup.co
            </a>
            .
          </p>

          <p className="text-gray-700 mb-6">
            By accessing or using the Website, you agree to the terms of this
            Privacy Policy. If you do not agree with the practices described in
            this policy, please do not use the Website.
          </p>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              1. Information We Collect
            </h2>

            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-800">
                1.1 Personal Data
              </h3>
              <p className="text-gray-700">
                We collect the following personal information from you:
              </p>
              <ul className="list-disc list-inside ml-6 mt-2 text-gray-700">
                <li>
                  <strong>Name:</strong> Collected to personalize your
                  experience and communicate effectively.
                </li>
                <li>
                  <strong>Email:</strong> Used to send you important information
                  regarding orders, updates, and communication.
                </li>
                <li>
                  <strong>Payment Information:</strong> Used to securely process
                  orders. We do not store payment information; transactions are
                  handled by trusted third-party processors.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-800">
                1.2 Non-Personal Data
              </h3>
              <p className="text-gray-700">
                We may use cookies and similar technologies to collect
                non-personal information such as IP address, browser type,
                device information, and browsing patterns. This helps us enhance
                your experience, analyze trends, and improve services.
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              2. Purpose of Data Collection
            </h2>
            <p className="text-gray-700">
              We collect and use your personal data solely for order processing,
              including processing orders, sending confirmations, providing
              customer support, and keeping you updated on order status.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              3. Data Sharing
            </h2>
            <p className="text-gray-700">
              We do not share your personal data with third parties except as
              required for order processing (e.g., payment processors). We do
              not sell, trade, or rent your personal information.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              4. {`Children's`} Privacy
            </h2>
            <p className="text-gray-700">
              PoopUp is not intended for children under 13. We do not knowingly
              collect information from children. If you believe your child has
              provided us with personal information, please contact us at the
              email below.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              5. Updates to the Privacy Policy
            </h2>
            <p className="text-gray-700">
              We may update this Privacy Policy to reflect changes in practices
              or legal requirements. Any updates will be posted on this page,
              and significant changes may be communicated via email.
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              6. Contact Information
            </h2>
            <p className="text-gray-700">
              If you have any questions or concerns related to this Privacy
              Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:marc@mg.poopup.co"
                className="text-indigo-600 underline"
              >
                marc@mg.poopup.co
              </a>
            </p>
            <p className="text-gray-700 mt-4">
              For all other inquiries, please visit our Contact Us page on the
              Website.
            </p>
          </div>

          <p className="text-gray-700">
            By using PoopUp, you consent to the terms of this Privacy Policy.
          </p>
        </section>
      </div>
    </main>
  );
}
