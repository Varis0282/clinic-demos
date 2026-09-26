"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { services, doctors, reviews, stats, whyUs } from "@/lib/content";
import { clinic, img } from "@/lib/config";
import Icon from "@/components/Icon";
import { BASE, Blob, Squiggle, SectionHead, Stars, FAQList, MapBlock, CTABand } from "./_ui";

const pastel = ["bg-orange-100 text-[#C4552D]", "bg-green-100 text-[#3F6B4F]", "bg-amber-100 text-amber-700", "bg-rose-100 text-rose-600"];

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <Blob className="-left-24 top-10 h-96 w-96 bg-orange-200/70" />
        <Blob className="-right-24 top-52 h-96 w-96 bg-green-200/60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 font-extrabold text-[#3F6B4F]">
              🌿 {t.hero.badge}
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-[#3d3229] md:text-5xl">
              {t.hero.title}
              <br />
              <span className="text-[#C4552D]">{t.hero.titleAccent}</span>
            </h1>
            <Squiggle className="mt-3 w-44 text-[#3F6B4F]" />
            <p className="mt-5 max-w-lg text-lg text-[#8a7961]">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact#book`} className="rounded-full bg-[#C4552D] px-8 py-4 text-lg font-extrabold text-white shadow-xl shadow-orange-900/20 transition-transform hover:scale-105">
                {t.hero.cta1} 🧡
              </Link>
              <a href={`tel:${clinic.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-[#3F6B4F] px-8 py-4 text-lg font-extrabold text-[#3F6B4F] transition-colors hover:bg-[#3F6B4F] hover:text-white">
                <Phone className="h-5 w-5" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[3rem] bg-[#3F6B4F]/20" />
            <img src={img.hero} alt="Friendly doctor with a patient" className="relative w-full rounded-[3rem] border-4 border-white object-cover shadow-2xl shadow-orange-900/10" />
            <div className="absolute -bottom-6 -left-4 rounded-3xl border-2 border-[#f0e4d3] bg-white px-6 py-4 shadow-xl sm:-left-8">
              <p className="text-2xl">😊</p>
              <p className="text-xl font-extrabold text-[#3d3229]">50,000+</p>
              <p className="text-xs font-bold text-[#8a7961]">{pick(stats[0], lang)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.value} className={`rounded-3xl p-6 text-center ${pastel[i % 4]} bg-opacity-60`}>
              <p className="text-3xl font-extrabold md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-extrabold opacity-80">{pick(s, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead emoji="🩺" title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((s, i) => {
              const item = pick(s, lang);
              return (
                <div key={s.icon} className="group rounded-[2rem] border-2 border-[#f0e4d3] bg-white p-6 transition-all hover:-translate-y-1.5 hover:border-[#C4552D] hover:shadow-xl hover:shadow-orange-900/10">
                  <span className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:-rotate-6 ${pastel[i % 4]}`}>
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mb-2 text-lg font-extrabold text-[#3d3229]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#8a7961]">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/services`} className="text-lg font-extrabold text-[#C4552D] underline decoration-wavy underline-offset-4 hover:text-[#a3441f]">
              {t.misc.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden py-14">
        <Blob className="-right-32 top-0 h-96 w-96 bg-amber-200/50" />
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHead emoji="🏡" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const item = pick(w, lang);
              return (
                <div key={w.icon} className={`rounded-[2rem] p-7 text-center ${i % 2 ? "bg-green-50" : "bg-orange-50"}`}>
                  <span className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg ${i % 2 ? "bg-[#3F6B4F] shadow-green-900/20" : "bg-[#C4552D] shadow-orange-900/20"}`}>
                    <Icon name={w.icon} className="h-8 w-8" />
                  </span>
                  <h3 className="mb-2 text-lg font-extrabold text-[#3d3229]">{item.title}</h3>
                  <p className="text-sm text-[#8a7961]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead emoji="👨‍⚕️" title={t.sections.doctorsTitle} sub={t.sections.doctorsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d, i) => {
              const doc = pick(d, lang);
              return (
                <div key={d.id} className="group text-center">
                  <div className={`mx-auto mb-4 overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl shadow-orange-900/10 transition-transform group-hover:scale-105 ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                    <img src={img.doctors[d.photo]} alt={doc.name} className="h-60 w-full object-cover" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#3d3229]">{doc.name}</h3>
                  <p className="font-bold text-[#C4552D]">{doc.spec}</p>
                  <p className="text-xs font-bold text-[#b3a18c]">{doc.exp}</p>
                  <Link href={`${BASE}/contact#book`} className="mt-3 inline-block rounded-full bg-[#3F6B4F] px-6 py-2 text-sm font-extrabold text-white transition-transform hover:scale-105">
                    {t.nav.book}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="relative overflow-hidden py-14">
        <Blob className="-left-32 bottom-0 h-96 w-96 bg-rose-200/40" />
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHead emoji="💬" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={r.name} className={`rounded-[2rem] border-2 border-[#f0e4d3] bg-white p-6 shadow-sm ${i % 3 === 1 ? "md:translate-y-3" : ""}`}>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C4552D] font-extrabold text-white">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-extrabold text-[#3d3229]">{r.name}</p>
                    <p className="text-xs font-bold text-[#b3a18c]">{r.area}</p>
                  </div>
                </div>
                <div className="mt-3"><Stars n={r.stars} /></div>
                <p className="mt-2 text-sm leading-relaxed text-[#7a6a58]">“{pick(r, lang)}”</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead emoji="📸" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Clinic photo ${i + 1}`} className={`h-44 w-full rounded-[2rem] border-4 border-white object-cover shadow-lg shadow-orange-900/10 transition-transform hover:scale-[1.03] md:h-52 ${i % 2 ? "rotate-1" : "-rotate-1"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead emoji="🙋" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead emoji="📍" title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
