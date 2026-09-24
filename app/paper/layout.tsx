import type { Metadata } from "next";
import { Archivo, Fraunces } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const archivo = Archivo({ subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Arogyam Multispeciality Clinic — Indore | Paper Demo",
  description: "Honest healthcare in Vijay Nagar, Indore. Book on WhatsApp.",
};

export default function PaperLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${archivo.className} ${fraunces.variable} bg-white text-[#111]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
