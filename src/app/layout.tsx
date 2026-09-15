import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-XY9NGHT9M7";

const description =
  "Arnab Singh builds distributed systems, Kubernetes platforms and AI agent runtimes, then breaks them on purpose to measure what holds. M.S. Computer Science, University of Dayton.";

export const metadata: Metadata = {
  metadataBase: new URL("https://singha105.github.io"),
  title: "Arnab Singh — DevOps, Cloud and AI Engineering",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Arnab Singh — I break my own systems on purpose.",
    description,
    url: "/",
    siteName: "Arnab Singh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Arnab Singh — I break my own systems on purpose.",
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
      </body>
    </html>
  );
}
