import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer, MeshBg } from "./_ui";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arogyam Multispeciality Clinic — Indore | Aurora Demo",
  description: "Modern multispeciality clinic in Vijay Nagar, Indore. Book appointments on WhatsApp.",
};

export default function AuroraLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${jakarta.className} relative min-h-screen overflow-x-clip bg-[#070b1a] text-slate-200`}>
        <MeshBg />
        <Nav />
        <main className="relative">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
