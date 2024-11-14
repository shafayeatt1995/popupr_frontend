import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

const font = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth hydrated">
      <head>
        <meta
          name="google-site-verification"
          content="yNPsvBfj7DAK0qrHFpO-1fycpk5MQyKEpjrE9UPWW24"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${font.className} text-gray-800 font-medium`}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster position="top-right" expand={true} richColors />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5HN5SW3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Script
          strategy="afterInteractive"
          async={true}
          src="https://www.googletagmanager.com/gtag/js?id=G-F1YG9501W4"
        />
        <Script
          strategy="afterInteractive"
          src="https://popupr.com/js/analytics.js"
        />
        <Script
          strategy="afterInteractive"
          src="https://popupr.com/js/clarity.js"
        />
        <Script
          strategy="afterInteractive"
          src="https://popupr.com/js/gtag.js"
        />
        <Script
          strategy="afterInteractive"
          defer={true}
          data-domain="popupr.com"
          src="https://popupr.com/js/script.js"
        />
      </body>
    </html>
  );
}
