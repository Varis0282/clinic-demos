"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang, pick } from "@/lib/lang";
import { services, doctors, reviews, stats, whyUs } from "@/lib/content";
import { clinic, img } from "@/lib/config";
import Icon from "@/components/Icon";
import { BASE, FadeIn, Counter, GradientText, SectionHead, Glass, Stars, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="px-4 pb-16 pt-40 text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-5 py-2 text-sm font-semibold text-teal-300"
        >
          <span className="h-2 w-2 animate-pulseSoft rounded-full bg-teal-400" /> {t.hero.badge}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl"
        >
          {t.hero.title} <GradientText>{t.hero.titleAccent}</GradientText>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
        >
          {t.hero.sub}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-9 flex flex-wrap justify-center gap-4"
        >
          <Link href={`${BASE}/contact`} className="rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 px-8 py-4 font-bold text-white shadow-2xl shadow-indigo-500/50 transition-transform hover:scale-105">
            {t.hero.cta1} ✨
          </Link>
          <a href={`tel:${clinic.phoneRaw}`} className="rounded-full border border-white/25 px-8 py-4 font-bold text-white backdrop-blur transition-colors hover:bg-white/10">
            📞 {t.hero.cta2}
          </a>
        </motion.div>
        {/* floating hero image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative mx-auto mt-14 max-w-4xl"
        >
          <img src={img.heroAlt} alt="Modern clinic consultation" className="w-full rounded-3xl border border-white/15 shadow-2xl shadow-indigo-950" />
          <div className="absolute -left-3 -top-5 animate-float rounded-2xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-xl sm:-left-8">
            <p className="text-2xl font-extrabold text-white">4.9★</p>
            <p className="text-xs text-slate-300">1,200+ reviews</p>
          </div>
          <div className="absolute -bottom-5 -right-3 animate-float rounded-2xl border border-white/15 bg-white/10 px-5 py-3 backdrop-blur-xl [animation-delay:1.5s] sm:-right-8">
            <p className="text-2xl font-extrabold text-white">30s</p>
            <p className="text-xs text-slate-300">WhatsApp booking</p>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.value} delay={i * 0.1}>
              <Glass className="p-6 text-center">
                <p className="text-3xl font-extrabold text-white md:text-4xl">
                  <Counter value={s.value} />
                </p>
                <p className="mt-1 text-sm text-slate-400">{pick(s, lang)}</p>
              </Glass>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.nav.services} title={t.sections.servicesTitle} sub={t.sections.servicesSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 8).map((s, i) => {
              const item = pick(s, lang);
              return (
                <FadeIn key={s.icon} delay={(i % 4) * 0.08}>
                  <Glass className="h-full p-6">
                    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/25 to-indigo-500/25 text-teal-300">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                  </Glass>
                </FadeIn>
              );
            })}
          </div>
          <FadeIn className="mt-10 text-center">
            <Link href={`${BASE}/services`} className="font-bold text-teal-300 hover:underline">{t.misc.viewAll} →</Link>
          </FadeIn>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="⭐" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const item = pick(w, lang);
              return (
                <FadeIn key={w.icon} delay={i * 0.08}>
                  <div className="h-full rounded-2xl bg-gradient-to-b from-white/10 to-transparent p-[1px]">
                    <div className="h-full rounded-2xl bg-[#0b1024]/80 p-6 text-center backdrop-blur">
                      <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-indigo-500 text-white shadow-lg shadow-indigo-500/40">
                        <Icon name={w.icon} className="h-7 w-7" />
                      </span>
                      <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.nav.doctors} title={t.sections.doctorsTitle} sub={t.sections.doctorsSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d, i) => {
              const doc = pick(d, lang);
              return (
                <FadeIn key={d.id} delay={i * 0.08}>
                  <Glass className="h-full overflow-hidden">
                    <img src={img.doctors[d.photo]} alt={doc.name} className="h-52 w-full object-cover" />
                    <div className="p-5">
                      <h3 className="font-bold text-white">{doc.name}</h3>
                      <p className="text-sm font-semibold text-teal-300">{doc.spec}</p>
                      <p className="mt-1 text-xs text-slate-500">{doc.qual} · {doc.exp}</p>
                      <Link href={`${BASE}/contact`} className="mt-4 block rounded-full border border-teal-400/50 py-2 text-center text-sm font-bold text-teal-300 transition-colors hover:bg-teal-400/10">
                        {t.nav.book}
                      </Link>
                    </div>
                  </Glass>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* REVIEWS MARQUEE */}
      <section className="py-16">
        <SectionHead eyebrow="❤️" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <div className="overflow-hidden" style={{ maskImage: "linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)" }}>
          <div className="flex w-max animate-marquee gap-5 pr-5 hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="w-80 shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <Stars n={r.stars} />
                <p className="mt-3 text-sm leading-relaxed text-slate-300">“{pick(r, lang)}”</p>
                <p className="mt-4 font-bold text-white">{r.name}</p>
                <p className="text-xs text-slate-500">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="📸" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <FadeIn key={g} delay={(i % 3) * 0.08}>
                <img src={g} alt={`Clinic photo ${i + 1}`} className="h-44 w-full rounded-2xl border border-white/10 object-cover transition-all duration-300 hover:scale-[1.03] hover:border-white/30 md:h-52" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="?" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* MAP */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="📍" title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <FadeIn><MapBlock /></FadeIn>
        </div>
      </section>

      <CTABand />
    </>
  );
}
