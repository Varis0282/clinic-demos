"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { doctors } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, PageHero, Micro, CTABand } from "../_ui";

export default function Doctors() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero num="Team — 01" title={t.sections.doctorsTitle} sub={t.sections.doctorsSub} />
      <section className="mx-auto max-w-6xl space-y-0 px-4 py-10 pb-20">
        {doctors.map((d, i) => {
          const doc = pick(d, lang);
          return (
            <div key={d.id} className={`grid items-center gap-10 border-t border-black/15 py-14 lg:grid-cols-2 ${i === doctors.length - 1 ? "border-b" : ""}`}>
              <img
                src={img.doctors[d.photo]}
                alt={doc.name}
                className={`h-[400px] w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 ${i % 2 ? "lg:order-last" : ""}`}
              />
              <div>
                <Micro className="mb-3 text-[#D62828]">0{i + 1} — {doc.spec}</Micro>
                <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{doc.name}</h2>
                <p className="mt-3 text-sm text-black/45">{doc.qual} · {doc.exp}</p>
                <p className="mt-6 max-w-md leading-relaxed text-black/60">{doc.bio}</p>
                <p className="mt-4 text-sm font-bold">{d.slots}</p>
                <Link href={`${BASE}/contact#book`} className="mt-7 inline-flex items-center gap-1.5 bg-[#111] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#D62828]">
                  {t.misc.bookWith} {doc.name} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>
      <CTABand />
    </>
  );
}
