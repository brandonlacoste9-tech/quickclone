import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QuickClone - Stripe Clone Demo",
  description: "AI-powered landing page duplicator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
