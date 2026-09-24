"use client";

import { useLang, pick } from "@/lib/lang";
import { stats } from "@/lib/content";
import { img } from "@/lib/config";
import { PageHero, SectionHead, Blob, CTABand } from "../_ui";

const valueEmojis = ["🤝", "⏰", "💰", "📚"];

export default function About() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero emoji="🏡" title={a.title} sub={a.sub} />
      <section className="relative overflow-hidden py-12">
        <Blob className="-right-24 top-10 h-80 w-80 bg-green-200/50" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[3rem] bg-[#C4552D]/15" />
            <img src={img.about} alt="Our clinic team" className="relative w-full rounded-[3rem] border-4 border-white shadow-2xl shadow-orange-900/10" />
          </div>
          <div className="space-y-4 text-lg text-[#7a6a58]">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className="font-extrabold text-[#3d3229]">{a.story3}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.value} className={`rounded-3xl p-6 text-center ${i % 2 ? "bg-green-100 text-[#3F6B4F]" : "bg-orange-100 text-[#C4552D]"}`}>
              <p className="text-3xl font-extrabold">{s.value}</p>
              <p className="mt-1 text-sm font-extrabold opacity-80">{pick(s, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead emoji="🎯" title={a.missionTitle} sub={a.mission} />
          <div className="grid gap-5 sm:grid-cols-2">
            {a.values.map((v, i) => (
              <div key={v.title} className="flex gap-5 rounded-[2rem] border-2 border-[#f0e4d3] bg-white p-7">
                <span className="text-4xl">{valueEmojis[i % 4]}</span>
                <div>
                  <h3 className="mb-1 text-lg font-extrabold text-[#3d3229]">{v.title}</h3>
                  <p className="text-[#8a7961]">{v.desc}</p>
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
