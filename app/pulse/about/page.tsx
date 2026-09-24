"use client";

import { useLang, pick } from "@/lib/lang";
import { stats } from "@/lib/content";
import { img } from "@/lib/config";
import { CheckCircle2 } from "lucide-react";
import { PageHero, SectionHead, CTABand } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <img src={img.about} alt="Our clinic team" className="w-full rounded-2xl shadow-xl" />
          <div className="space-y-4 text-slate-600">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className="font-semibold text-slate-800">{a.story3}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-blue-700">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="text-center text-white">
              <p className="text-3xl font-extrabold md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-semibold text-blue-200">{pick(s, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="🎯" title={a.missionTitle} sub={a.mission} />
          <div className="grid gap-5 sm:grid-cols-2">
            {a.values.map((v) => (
              <div key={v.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <CheckCircle2 className="h-7 w-7 shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">{v.title}</h3>
                  <p className="text-sm text-slate-500">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
