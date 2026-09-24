import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arogyam Multispeciality Clinic — Indore | Pulse Demo",
  description: "Trusted multispeciality clinic in Vijay Nagar, Indore. Book appointments on WhatsApp.",
};

export default function PulseLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${inter.className} bg-white text-slate-700`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
