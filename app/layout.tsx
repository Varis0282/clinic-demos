import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clinic Website Demos — 5 Styles",
  description:
    "One clinic, five completely different websites. WhatsApp booking, Hindi/English, calendar slots, reviews, gallery and map — pick the design you love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
