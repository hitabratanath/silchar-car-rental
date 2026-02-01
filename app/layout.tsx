import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Silchar Car Rental - Premium Car Rental Service in Silchar, Assam",
  description: "Book reliable and affordable car rental services in Silchar, Assam. We offer a wide range of vehicles for local and outstation trips. Available 24/7 with professional drivers.",
  keywords: ["car rental Silchar", "car hire Silchar", "taxi service Silchar", "car booking Assam", "Silchar transport", "outstation cab Silchar"],
  authors: [{ name: "Silchar Car Rental" }],
  openGraph: {
    title: "Silchar Car Rental - Premium Car Rental Service in Silchar, Assam",
    description: "Book reliable and affordable car rental services in Silchar, Assam. Available 24/7 with professional drivers.",
    type: "website",
    locale: "en_IN",
    siteName: "Silchar Car Rental",
  },
  twitter: {
    card: "summary_large_image",
    title: "Silchar Car Rental - Premium Car Rental Service in Silchar, Assam",
    description: "Book reliable and affordable car rental services in Silchar, Assam. Available 24/7 with professional drivers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
