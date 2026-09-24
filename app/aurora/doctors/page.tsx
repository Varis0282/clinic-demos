"use client";

import Link from "next/link";
import { Clock, GraduationCap } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { doctors } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, PageHero, FadeIn, Glass, CTABand } from "../_ui";

export default function Doctors() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.doctorsTitle} sub={t.sections.doctorsSub} />
      <section className="px-4 py-12">
        <div className="mx-auto max-w-5xl space-y-6">
          {doctors.map((d, i) => {
            const doc = pick(d, lang);
            return (
              <FadeIn key={d.id} delay={0.05}>
                <Glass className={`grid items-center gap-8 p-6 md:grid-cols-5 md:p-8 ${i % 2 ? "md:[&>img]:order-last" : ""}`}>
                  <img src={img.doctors[d.photo]} alt={doc.name} className="h-64 w-full rounded-2xl border border-white/10 object-cover md:col-span-2" />
                  <div className="md:col-span-3">
                    <h2 className="text-2xl font-extrabold text-white">{doc.name}</h2>
                    <p className="font-bold text-teal-300">{doc.spec}</p>
                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5"><GraduationCap className="h-4 w-4" /> {doc.qual}</span>
                      <span className="flex items-center gap-1.5">⭐ {doc.exp}</span>
                    </div>
                    <p className="mt-4 text-slate-400">{doc.bio}</p>
                    <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-slate-300">
                      <Clock className="h-4 w-4 text-teal-400" /> {d.slots}
                    </p>
                    <Link href={`${BASE}/contact`} className="mt-5 inline-block rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 px-6 py-2.5 font-bold text-white shadow-lg shadow-indigo-500/30 transition-transform hover:scale-105">
                      {t.misc.bookWith} {doc.name} →
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
