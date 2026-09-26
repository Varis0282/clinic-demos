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
      <PageHero title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          {services.map((s) => {
            const item = pick(s, lang);
            return (
              <div key={s.icon} className="flex gap-5 rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="mb-2 text-lg font-bold text-slate-900">{item.title}</h2>
                  <p className="text-slate-500">{item.desc}</p>
                  <Link href={`${BASE}/contact#book`} className="mt-3 inline-block text-sm font-bold text-blue-700 hover:underline">
                    {t.nav.book} →
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
