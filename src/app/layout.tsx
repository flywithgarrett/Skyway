import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkyWay — Live Flight Tracking",
  description: "Premium global flight tracking with live aircraft positions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
