"use client";

import Link from "next/link";
import { useLang, pick } from "@/lib/lang";
import { services, doctors, reviews, stats, whyUs } from "@/lib/content";
import { clinic, img } from "@/lib/config";
import Icon from "@/components/Icon";
import { BASE, Eyebrow, SectionHead, GoldStars, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <Eyebrow>{t.hero.badge}</Eyebrow>
            <h1 className="font-display text-5xl leading-[1.1] text-stone-100 md:text-6xl">
              {t.hero.title}
              <br />
              <em className="text-[#C9A96A]">{t.hero.titleAccent}</em>
            </h1>
            <p className="mt-6 max-w-md leading-relaxed text-stone-500">{t.hero.sub}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact`} className="bg-[#C9A96A] px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0B0E13] transition-opacity hover:opacity-85">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${clinic.phoneRaw}`} className="border border-white/25 px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-200 transition-colors hover:border-[#C9A96A] hover:text-[#C9A96A]">
                {t.hero.cta2}
              </a>
            </div>
            <div className="mt-12 flex divide-x divide-white/10 border-t border-white/10 pt-8">
              {stats.slice(0, 3).map((s) => (
                <div key={s.value} className="pr-8 [&:not(:first-child)]:pl-8">
                  <p className="font-display text-3xl text-[#C9A96A]">{s.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-stone-600">{pick(s, lang)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-[#C9A96A]/40" aria-hidden />
            <img src={img.heroAlt} alt="Specialist consultation" className="relative w-full object-cover" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((s, i) => {
              const item = pick(s, lang);
              return (
                <div key={s.icon} className="group bg-[#0B0E13] p-8 transition-colors hover:bg-[#12161e]">
                  <p className="mb-6 font-display text-sm italic text-stone-700">0{i + 1}</p>
                  <Icon name={s.icon} className="mb-5 h-7 w-7 text-[#C9A96A]" />
                  <h3 className="mb-3 font-display text-lg text-stone-100">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10">
            <Link href={`${BASE}/services`} className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A96A] hover:underline">
              {t.misc.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="✦" title={t.sections.whyTitle} sub={t.sections.whySub} center />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const item = pick(w, lang);
              return (
                <div key={w.icon} className="text-center">
                  <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A96A]/50 text-[#C9A96A]">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <p className="mb-2 font-display text-sm italic text-stone-700">0{i + 1}</p>
                  <h3 className="mb-3 font-display text-lg text-stone-100">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-stone-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.nav.doctors} title={t.sections.doctorsTitle} sub={t.sections.doctorsSub} />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d) => {
              const doc = pick(d, lang);
              return (
                <div key={d.id} className="group">
                  <div className="relative mb-5 overflow-hidden">
                    <img src={img.doctors[d.photo]} alt={doc.name} className="h-72 w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
                    <div className="absolute inset-0 border border-white/10 transition-colors group-hover:border-[#C9A96A]/60" />
                  </div>
                  <h3 className="font-display text-xl text-stone-100">{doc.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#C9A96A]">{doc.spec}</p>
                  <p className="mt-2 text-xs text-stone-600">{doc.qual} · {doc.exp}</p>
                  <Link href={`${BASE}/contact`} className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-stone-400 underline decoration-[#C9A96A] underline-offset-8 hover:text-[#C9A96A]">
                    {t.nav.book}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="❝" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} center />
          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="bg-[#0B0E13] p-8">
                <GoldStars n={r.stars} />
                <p className="mt-4 font-display text-base italic leading-relaxed text-stone-300">“{pick(r, lang)}”</p>
                <p className="mt-5 text-sm font-semibold text-stone-100">{r.name}</p>
                <p className="text-xs text-stone-600">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="—" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <div key={g} className="overflow-hidden bg-[#0B0E13]">
                <img src={g} alt={`Clinic photo ${i + 1}`} className="h-48 w-full object-cover opacity-80 grayscale-[40%] transition-all duration-500 hover:scale-105 hover:opacity-100 hover:grayscale-0 md:h-60" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="?" title={t.sections.faqTitle} sub={t.sections.faqSub} center />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="✦" title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
