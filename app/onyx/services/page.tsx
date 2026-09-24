"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, PageHero, CTABand } from "../_ui";

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {services.map((s, i) => {
              const item = pick(s, lang);
              return (
                <div key={s.icon} className="group grid gap-4 py-10 transition-colors hover:bg-white/[0.02] md:grid-cols-12 md:items-center">
                  <p className="font-display text-lg italic text-stone-700 md:col-span-1">0{i + 1}</p>
                  <div className="flex items-center gap-4 md:col-span-4">
                    <Icon name={s.icon} className="h-6 w-6 shrink-0 text-[#C9A96A]" />
                    <h2 className="font-display text-2xl text-stone-100">{item.title}</h2>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-500 md:col-span-5">{item.desc}</p>
                  <div className="md:col-span-2 md:text-right">
                    <Link href={`${BASE}/contact`} className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 underline decoration-[#C9A96A] underline-offset-8 hover:text-[#C9A96A]">
                      {t.nav.book}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
