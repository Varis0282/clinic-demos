"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { services, doctors, reviews, stats, whyUs } from "@/lib/content";
import { clinic, img } from "@/lib/config";
import Icon from "@/components/Icon";
import { BASE, SectionHead, Stars, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-sky-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
              <span className="h-2 w-2 animate-pulseSoft rounded-full bg-green-500" /> {t.hero.badge}
            </p>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
              {t.hero.title} <span className="text-blue-700">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-slate-600">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact#book`} className="rounded-lg bg-blue-700 px-7 py-3.5 font-bold text-white shadow-lg shadow-blue-700/25 transition-all hover:bg-blue-800">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${clinic.phoneRaw}`} className="rounded-lg border-2 border-blue-700 px-7 py-3.5 font-bold text-blue-700 transition-colors hover:bg-blue-50">
                📞 {t.hero.cta2}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-slate-600">
              {whyUs.slice(0, 3).map((w) => (
                <span key={w.icon} className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-green-600" /> {pick(w, lang).title}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={img.hero} alt="Doctor consulting a patient at Arogyam Clinic" className="w-full rounded-2xl shadow-2xl" />
            <div className="absolute -bottom-5 left-5 rounded-xl bg-white px-5 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-extrabold text-slate-900">4.9</span>
                <div>
                  <Stars n={5} />
                  <p className="text-xs text-slate-500">1,200+ Google reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <p className="text-3xl font-extrabold text-blue-700 md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">{pick(s, lang)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((s) => {
              const item = pick(s, lang);
              return (
                <div key={s.icon} className="group rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mb-2 font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/services`} className="font-bold text-blue-700 hover:underline">
              {t.misc.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="⭐" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => {
              const item = pick(w, lang);
              return (
                <div key={w.icon} className="rounded-2xl bg-gradient-to-b from-blue-50 to-white p-6 text-center">
                  <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-white shadow-lg shadow-blue-700/30">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mb-2 font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.doctors} title={t.sections.doctorsTitle} sub={t.sections.doctorsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d) => {
              const doc = pick(d, lang);
              return (
                <div key={d.id} className="overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                  <img src={img.doctors[d.photo]} alt={doc.name} className="h-56 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900">{doc.name}</h3>
                    <p className="text-sm font-semibold text-blue-700">{doc.spec}</p>
                    <p className="mt-1 text-xs text-slate-500">{doc.qual} · {doc.exp}</p>
                    <Link href={`${BASE}/contact#book`} className="mt-4 block rounded-lg border border-blue-700 py-2 text-center text-sm font-bold text-blue-700 transition-colors hover:bg-blue-700 hover:text-white">
                      {t.nav.book}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="❤️" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <Stars n={r.stars} />
                <p className="mt-3 text-sm leading-relaxed text-slate-600">“{pick(r, lang)}”</p>
                <p className="mt-4 font-bold text-slate-900">{r.name}</p>
                <p className="text-xs text-slate-400">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="📸" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Clinic photo ${i + 1}`} className="h-44 w-full rounded-xl object-cover shadow-sm transition-transform hover:scale-[1.03] md:h-52" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="?" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="📍" title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
