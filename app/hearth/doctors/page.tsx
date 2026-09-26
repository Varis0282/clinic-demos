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
      <PageHero emoji="👨‍⚕️" title={t.sections.doctorsTitle} sub={t.sections.doctorsSub} />
      <section className="py-12">
        <div className="mx-auto max-w-5xl space-y-8 px-4">
          {doctors.map((d, i) => {
            const doc = pick(d, lang);
            return (
              <div key={d.id} className={`grid items-center gap-8 rounded-[2.5rem] border-2 border-[#f0e4d3] bg-white p-6 md:grid-cols-5 md:p-8 ${i % 2 ? "md:[&>div:first-child]:order-last" : ""}`}>
                <div className="relative md:col-span-2">
                  <div className={`absolute inset-0 rounded-[2rem] ${i % 2 ? "bg-green-200/50 -rotate-2" : "bg-orange-200/50 rotate-2"}`} />
                  <img src={img.doctors[d.photo]} alt={doc.name} className="relative h-64 w-full rounded-[2rem] border-4 border-white object-cover shadow-lg" />
                </div>
                <div className="md:col-span-3">
                  <h2 className="text-2xl font-extrabold text-[#3d3229]">{doc.name}</h2>
                  <p className="text-lg font-extrabold text-[#C4552D]">{doc.spec}</p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm font-bold text-[#8a7961]">
                    <span className="flex items-center gap-1.5"><GraduationCap className="h-4 w-4" /> {doc.qual}</span>
                    <span>⭐ {doc.exp}</span>
                  </div>
                  <p className="mt-4 text-[#7a6a58]">{doc.bio}</p>
                  <p className="mt-3 flex items-center gap-1.5 text-sm font-extrabold text-[#3F6B4F]">
                    <Clock className="h-4 w-4" /> {d.slots}
                  </p>
                  <Link href={`${BASE}/contact#book`} className="mt-5 inline-block rounded-full bg-[#C4552D] px-7 py-3 font-extrabold text-white shadow-lg shadow-orange-900/20 transition-transform hover:scale-105">
                    {t.misc.bookWith} {doc.name} 🧡
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
