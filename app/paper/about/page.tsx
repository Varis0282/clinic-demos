"use client";

import { useLang, pick } from "@/lib/lang";
import { stats } from "@/lib/content";
import { img } from "@/lib/config";
import { PageHero, SectionHead, Micro, CTABand } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero num="About — 01" title={a.title} sub={a.sub} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <img src={img.about} alt="Our clinic team" className="h-72 w-full object-cover md:h-[440px]" />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <p className="font-display text-2xl leading-relaxed md:text-3xl">{a.story1}</p>
          <div className="space-y-5 text-black/55">
            <p>{a.story2}</p>
            <p className="font-semibold text-black">{a.story3}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-2 divide-x divide-black/15 border-y border-black/15 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="p-8 text-center">
              <p className="font-display text-4xl font-semibold text-[#D62828]">{s.value}</p>
              <Micro className="mt-2 text-black/45">{pick(s, lang)}</Micro>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="02 — Mission" title={a.missionTitle} sub={a.mission} />
        <div className="grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2">
          {a.values.map((v, i) => (
            <div key={v.title} className="bg-white p-9">
              <p className="mb-5 text-xs font-bold text-[#D62828]">0{i + 1}</p>
              <h3 className="mb-2 font-display text-2xl font-medium">{v.title}</h3>
              <p className="text-black/50">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
