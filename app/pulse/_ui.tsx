"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Clock, HeartPulse, Menu, X, ChevronDown, Star, MapPin } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { clinic } from "@/lib/config";
import { faqs } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/pulse";

export function Nav() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { href: BASE, label: t.nav.home },
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/services`, label: t.nav.services },
    { href: `${BASE}/doctors`, label: t.nav.doctors },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* top bar */}
      <div className="bg-blue-700 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 text-xs sm:text-[13px]">
          <div className="flex items-center gap-4">
            <a href={`tel:${clinic.phoneRaw}`} className="flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5" /> {clinic.phone}
            </a>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5" /> {t.hero.open}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="opacity-80 hover:opacity-100">← All demos</Link>
            <LangToggle className="rounded-full bg-white/15 px-3 py-0.5 font-semibold hover:bg-white/25" />
          </div>
        </div>
      </div>
      {/* main nav */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={BASE} className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white">
            <HeartPulse className="h-6 w-6" />
          </span>
          <span className="text-lg font-extrabold leading-tight text-slate-900">
            {lang === "en" ? clinic.name : clinic.nameHi}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-blue-700">
              {l.label}
            </Link>
          ))}
          <Link
            href={`${BASE}/contact#book`}
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-white shadow-md shadow-blue-700/25 transition-all hover:bg-blue-800"
          >
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 font-semibold text-slate-700">
              {l.label}
            </Link>
          ))}
          <Link href={`${BASE}/contact#book`} onClick={() => setOpen(false)} className="mt-3 block rounded-lg bg-blue-700 px-5 py-3 text-center font-semibold text-white">
            {t.nav.book}
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub, light = false }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-widest text-blue-600">{eyebrow}</p>}
      <h2 className={`text-3xl font-extrabold md:text-4xl ${light ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {sub && <p className={`mt-3 ${light ? "text-blue-100" : "text-slate-500"}`}>{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-16 text-center text-white">
      <h1 className="text-4xl font-extrabold md:text-5xl">{title}</h1>
      {sub && <p className="mx-auto mt-3 max-w-xl px-4 text-blue-100">{sub}</p>}
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`} />
      ))}
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-slate-800"
            >
              {item.q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-blue-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p className="border-t border-slate-100 px-5 py-4 text-slate-600">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
            <MapPin className="h-5 w-5 text-blue-600" /> {lang === "en" ? clinic.name : clinic.nameHi}
          </h3>
          <p className="mb-4 text-slate-600">{lang === "en" ? clinic.address : clinic.addressHi}</p>
          <div className="mb-4 space-y-1 text-sm text-slate-600">
            {clinic.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-semibold text-slate-800">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a href={clinic.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-800">
            {t.misc.getDirections} →
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:col-span-3">
        <iframe src={clinic.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Clinic location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="text-3xl font-extrabold md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-blue-100">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact#book`} className="rounded-lg bg-white px-8 py-3.5 font-bold text-blue-700 shadow-lg transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${clinic.phoneRaw}`} className="rounded-lg border-2 border-white/60 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
            📞 {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="bg-slate-900 pt-14 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white"><HeartPulse className="h-5 w-5" /></span>
            <span className="font-extrabold text-white">{lang === "en" ? clinic.name : clinic.nameHi}</span>
          </div>
          <p className="text-sm text-slate-400">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={BASE} className="hover:text-white">{t.nav.home}</Link></li>
            <li><Link href={`${BASE}/about`} className="hover:text-white">{t.nav.about}</Link></li>
            <li><Link href={`${BASE}/services`} className="hover:text-white">{t.nav.services}</Link></li>
            <li><Link href={`${BASE}/doctors`} className="hover:text-white">{t.nav.doctors}</Link></li>
            <li><Link href={`${BASE}/contact`} className="hover:text-white">{t.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>{lang === "en" ? clinic.address : clinic.addressHi}</li>
            <li><a href={`tel:${clinic.phoneRaw}`} className="hover:text-white">{clinic.phone}</a></li>
            <li><a href={`mailto:${clinic.email}`} className="hover:text-white">{clinic.email}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            {clinic.timings[lang].map((tm) => (
              <li key={tm.days}><span className="text-slate-200">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {clinic.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8",
  label: "mb-1.5 block text-sm font-semibold text-slate-700",
  input: "w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100",
  select: "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100",
  dayBtn: "rounded-lg border border-slate-200 py-2 text-center text-slate-600 transition-colors hover:border-blue-400",
  dayBtnActive: "rounded-lg border border-blue-700 bg-blue-700 py-2 text-center text-white shadow-md shadow-blue-700/25",
  slotBtn: "rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 transition-colors hover:border-blue-400",
  slotBtnActive: "rounded-lg border border-blue-700 bg-blue-700 px-3 py-1.5 text-sm font-semibold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-slate-400",
  submit: "flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.02]",
  success: "rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700",
  error: "rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600",
};
