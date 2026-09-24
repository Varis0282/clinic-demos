"use client";

import { useLang, pick } from "@/lib/lang";
import { stats } from "@/lib/content";
import { img } from "@/lib/config";
import { CheckCircle2 } from "lucide-react";
import { PageHero, SectionHead, FadeIn, Glass, Counter, CTABand } from "../_ui";

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <FadeIn>
            <img src={img.about} alt="Our clinic team" className="w-full rounded-3xl border border-white/15 shadow-2xl" />
          </FadeIn>
          <FadeIn delay={0.15} className="space-y-4 text-slate-400">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className="font-semibold text-slate-200">{a.story3}</p>
          </FadeIn>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.value} delay={i * 0.1}>
              <Glass className="p-6 text-center">
                <p className="text-3xl font-extrabold text-white"><Counter value={s.value} /></p>
                <p className="mt-1 text-sm text-slate-400">{pick(s, lang)}</p>
              </Glass>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="🎯" title={a.missionTitle} sub={a.mission} />
          <div className="grid gap-5 sm:grid-cols-2">
            {a.values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <Glass className="flex gap-4 p-6">
                  <CheckCircle2 className="h-7 w-7 shrink-0 text-teal-400" />
                  <div>
                    <h3 className="mb-1 font-bold text-white">{v.title}</h3>
                    <p className="text-sm text-slate-400">{v.desc}</p>
                  </div>
                </Glass>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
