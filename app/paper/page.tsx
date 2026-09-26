"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { services, doctors, reviews, stats, whyUs } from "@/lib/content";
import { clinic, img } from "@/lib/config";
import { BASE, Micro, SectionHead, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
        <Micro className="mb-6 text-[#D62828]">{t.hero.badge}</Micro>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-8xl">
          {t.hero.title}
          <br />
          <em className="text-[#D62828]">{t.hero.titleAccent}</em>
        </h1>
        <div className="mt-10 grid gap-8 border-t border-black/15 pt-8 md:grid-cols-2">
          <p className="max-w-md text-lg leading-relaxed text-black/55">{t.hero.sub}</p>
          <div className="flex flex-wrap items-start gap-4 md:justify-end">
            <Link href={`${BASE}/contact#book`} className="bg-[#D62828] px-8 py-4 font-bold text-white transition-colors hover:bg-black">
              {t.hero.cta1}
            </Link>
            <a href={`tel:${clinic.phoneRaw}`} className="border border-black px-8 py-4 font-bold transition-colors hover:bg-black hover:text-white">
              {t.hero.cta2}
            </a>
          </div>
        </div>
        <img src={img.hero} alt="Doctor with a patient" className="mt-12 h-72 w-full object-cover md:h-[480px]" />
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid grid-cols-2 divide-x divide-black/15 border-y border-black/15 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="p-7 text-center md:p-9">
              <p className="font-display text-4xl font-semibold text-[#D62828] md:text-5xl">{s.value}</p>
              <Micro className="mt-2 text-black/45">{pick(s, lang)}</Micro>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="01 — Services" title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
        <div className="divide-y divide-black/15 border-b border-black/15">
          {services.slice(0, 8).map((s, i) => {
            const item = pick(s, lang);
            return (
              <Link key={s.icon} href={`${BASE}/services`} className="group grid gap-2 py-6 transition-colors hover:bg-[#faf7f2] md:grid-cols-12 md:items-baseline">
                <span className="text-xs font-bold text-[#D62828] md:col-span-1">0{i + 1}</span>
                <h3 className="font-display text-2xl font-medium md:col-span-4">{item.title}</h3>
                <p className="text-sm text-black/50 md:col-span-6">{item.desc}</p>
                <span className="hidden justify-end md:col-span-1 md:flex">
                  <ArrowUpRight className="h-5 w-5 text-black/30 transition-all group-hover:translate-x-1 group-hover:text-[#D62828]" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="02 — Promise" title={t.sections.whyTitle} sub={t.sections.whySub} />
        <div className="grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => {
            const item = pick(w, lang);
            return (
              <div key={w.icon} className="bg-white p-8">
                <p className="mb-6 text-xs font-bold text-[#D62828]">0{i + 1}</p>
                <h3 className="mb-3 font-display text-xl font-medium">{item.title}</h3>
                <p className="text-sm leading-relaxed text-black/50">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* DOCTORS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="03 — Team" title={t.sections.doctorsTitle} sub={t.sections.doctorsSub} />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d) => {
            const doc = pick(d, lang);
            return (
              <Link key={d.id} href={`${BASE}/doctors`} className="group">
                <img src={img.doctors[d.photo]} alt={doc.name} className="h-72 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                <h3 className="mt-4 font-display text-xl font-medium group-hover:text-[#D62828]">{doc.name}</h3>
                <Micro className="mt-1 text-black/45">{doc.spec}</Micro>
                <p className="mt-1.5 text-xs text-black/40">{doc.qual} · {doc.exp}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="04 — Reviews" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <div className="grid gap-px border border-black/15 bg-black/15 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="flex flex-col bg-white p-8">
              <p className="text-sm tracking-[0.2em] text-[#D62828]">{"★".repeat(r.stars)}</p>
              <p className="mt-4 flex-1 font-display text-lg leading-relaxed">“{pick(r, lang)}”</p>
              <p className="mt-5 text-sm font-bold">{r.name}</p>
              <Micro className="mt-0.5 text-black/40">{r.area}</Micro>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="05 — Clinic" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {img.gallery.map((g, i) => (
            <img key={g} src={g} alt={`Clinic photo ${i + 1}`} className="h-44 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 md:h-56" />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="06 — FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
        <FAQList />
      </section>

      {/* MAP */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="07 — Visit" title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>

      <CTABand />
    </>
  );
}
