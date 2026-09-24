import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const manrope = Manrope({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Arogyam Multispeciality Clinic — Indore | Onyx Demo",
  description: "Premium specialist healthcare in Vijay Nagar, Indore.",
};

export default function OnyxLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${manrope.className} ${playfair.variable} bg-[#0B0E13] text-stone-300`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
