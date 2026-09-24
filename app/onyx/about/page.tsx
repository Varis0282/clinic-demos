"use client";

import { useLang, pick } from "@/lib/lang";
import { stats } from "@/lib/content";
import { img } from "@/lib/config";
import { PageHero, SectionHead, CTABand } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero eyebrow="✦" title={a.title} sub={a.sub} />
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 border border-[#C9A96A]/40" aria-hidden />
            <img src={img.about} alt="Our clinic team" className="relative w-full object-cover" />
          </div>
          <div className="space-y-5 leading-relaxed text-stone-500">
            <p className="font-display text-xl italic text-stone-300">{a.story1}</p>
            <p>{a.story2}</p>
            <p className="text-stone-300">{a.story3}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="p-10 text-center">
              <p className="font-display text-4xl text-[#C9A96A]">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-600">{pick(s, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="✦" title={a.missionTitle} sub={a.mission} center />
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {a.values.map((v, i) => (
              <div key={v.title} className="bg-[#0B0E13] p-10">
                <p className="mb-4 font-display text-sm italic text-stone-700">0{i + 1}</p>
                <h3 className="mb-3 font-display text-xl text-stone-100">{v.title}</h3>
                <p className="text-sm leading-relaxed text-stone-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
