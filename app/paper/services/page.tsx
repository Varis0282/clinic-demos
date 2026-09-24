"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import { BASE, PageHero, CTABand } from "../_ui";

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero num="Services — 01" title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="mx-auto max-w-6xl px-4 py-10 pb-20">
        <div className="divide-y divide-black/15 border-y border-black/15">
          {services.map((s, i) => {
            const item = pick(s, lang);
            return (
              <div key={s.icon} className="group grid gap-3 py-9 transition-colors hover:bg-[#faf7f2] md:grid-cols-12 md:items-baseline">
                <span className="text-sm font-bold text-[#D62828] md:col-span-1">0{i + 1}</span>
                <h2 className="font-display text-3xl font-medium md:col-span-4">{item.title}</h2>
                <p className="leading-relaxed text-black/55 md:col-span-5">{item.desc}</p>
                <div className="md:col-span-2 md:text-right">
                  <Link href={`${BASE}/contact`} className="inline-flex items-center gap-1 font-bold underline decoration-[#D62828] decoration-2 underline-offset-4 hover:text-[#D62828]">
                    {t.nav.book} <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTABand />
    </>
  );
}
