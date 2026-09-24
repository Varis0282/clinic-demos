"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { doctors } from "@/lib/content";
import { img } from "@/lib/config";
import { BASE, PageHero, CTABand } from "../_ui";

export default function Doctors() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={t.nav.doctors} title={t.sections.doctorsTitle} sub={t.sections.doctorsSub} />
      <section className="py-20">
        <div className="mx-auto max-w-6xl space-y-20 px-4">
          {doctors.map((d, i) => {
            const doc = pick(d, lang);
            return (
              <div key={d.id} className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-last" : ""}`}>
                <div className="relative">
                  <div className="absolute -inset-4 border border-[#C9A96A]/40" aria-hidden />
                  <img src={img.doctors[d.photo]} alt={doc.name} className="relative h-[420px] w-full object-cover" />
                </div>
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A96A]">{doc.spec}</p>
                  <h2 className="font-display text-4xl text-stone-100">{doc.name}</h2>
                  <p className="mt-3 text-sm text-stone-600">{doc.qual} · {doc.exp}</p>
                  <div className="my-6 h-px w-16 bg-[#C9A96A]" />
                  <p className="leading-relaxed text-stone-500">{doc.bio}</p>
                  <p className="mt-5 text-sm text-stone-400"><span className="text-[#C9A96A]">✦</span> {d.slots}</p>
                  <Link href={`${BASE}/contact`} className="mt-8 inline-block border border-[#C9A96A] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A96A] transition-all hover:bg-[#C9A96A] hover:text-[#0B0E13]">
                    {t.misc.bookWith} {doc.name}
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
