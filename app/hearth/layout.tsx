import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arogyam Multispeciality Clinic — Indore | Hearth Demo",
  description: "Your friendly neighbourhood family clinic in Vijay Nagar, Indore.",
};

export default function HearthLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${nunito.className} bg-[#FBF6EE] text-[#3d3229]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
