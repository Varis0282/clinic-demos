"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, PageHero, FadeIn, Glass, CTABand } from "../_ui";

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {services.map((s, i) => {
            const item = pick(s, lang);
            return (
              <FadeIn key={s.icon} delay={(i % 2) * 0.08}>
                <Glass className="flex h-full gap-5 p-7">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400/25 to-indigo-500/25 text-teal-300">
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h2 className="mb-2 text-lg font-bold text-white">{item.title}</h2>
                    <p className="text-slate-400">{item.desc}</p>
                    <Link href={`${BASE}/contact`} className="mt-3 inline-block text-sm font-bold text-teal-300 hover:underline">
                      {t.nav.book} →
                    </Link>
                  </div>
                </Glass>
              </FadeIn>
            );
          })}
        </div>
      </section>
      <CTABand />
    </>
  );
}
