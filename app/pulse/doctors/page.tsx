"use client";

import Link from "next/link";
import { Clock, GraduationCap } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { doctors } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, PageHero, CTABand } from "../_ui";

export default function Doctors() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.doctorsTitle} sub={t.sections.doctorsSub} />
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl space-y-8 px-4">
          {doctors.map((d, i) => {
            const doc = pick(d, lang);
            return (
              <div key={d.id} className={`grid items-center gap-8 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:grid-cols-5 md:p-8 ${i % 2 ? "md:[&>img]:order-last" : ""}`}>
                <img src={img.doctors[d.photo]} alt={doc.name} className="h-64 w-full rounded-2xl object-cover md:col-span-2" />
                <div className="md:col-span-3">
                  <h2 className="text-2xl font-extrabold text-slate-900">{doc.name}</h2>
                  <p className="font-bold text-blue-700">{doc.spec}</p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5"><GraduationCap className="h-4 w-4" /> {doc.qual}</span>
                    <span className="flex items-center gap-1.5">⭐ {doc.exp}</span>
                  </div>
                  <p className="mt-4 text-slate-600">{doc.bio}</p>
                  <p className="mt-3 flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                    <Clock className="h-4 w-4 text-blue-600" /> {d.slots}
                  </p>
                  <Link href={`${BASE}/contact`} className="mt-5 inline-block rounded-lg bg-blue-700 px-6 py-2.5 font-bold text-white shadow-md shadow-blue-700/25 hover:bg-blue-800">
                    {t.misc.bookWith} {doc.name} →
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
