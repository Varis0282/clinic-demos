"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { services } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, PageHero, CTABand } from "../_ui";

const pastel = ["bg-orange-100 text-[#C4552D]", "bg-green-100 text-[#3F6B4F]", "bg-amber-100 text-amber-700", "bg-rose-100 text-rose-600"];

export default function Services() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero emoji="🩺" title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
      <section className="py-12">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          {services.map((s, i) => {
            const item = pick(s, lang);
            return (
              <div key={s.icon} className="flex gap-5 rounded-[2rem] border-2 border-[#f0e4d3] bg-white p-7 transition-all hover:border-[#C4552D] hover:shadow-xl hover:shadow-orange-900/10">
                <span className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${pastel[i % 4]}`}>
                  <Icon name={s.icon} className="h-8 w-8" />
                </span>
                <div>
                  <h2 className="mb-2 text-xl font-extrabold text-[#3d3229]">{item.title}</h2>
                  <p className="text-[#8a7961]">{item.desc}</p>
                  <Link href={`${BASE}/contact#book`} className="mt-3 inline-block font-extrabold text-[#C4552D] underline decoration-wavy underline-offset-4">
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
