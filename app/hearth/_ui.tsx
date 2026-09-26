"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Menu, X, ChevronDown, Star, MapPin, Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { clinic } from "@/lib/config";
import { faqs } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/hearth";
export const TERRA = "#C4552D";
export const GREEN = "#3F6B4F";

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={className} aria-hidden>
      <path d="M2 8 C 20 2, 32 12, 50 7 S 84 2, 118 7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Blob({ className = "" }: { className?: string }) {
  return <div className={`pointer-events-none absolute rounded-[42%_58%_55%_45%/55%_45%_60%_40%] blur-2xl ${className}`} aria-hidden />;
}

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
    <header className="sticky top-0 z-40 border-b-2 border-[#f0e4d3] bg-[#FBF6EE]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <Link href={BASE} className="flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C4552D] text-white shadow-md shadow-orange-900/20 transition-transform hover:rotate-6">
            <Heart className="h-6 w-6 fill-white" />
          </span>
          <span className="text-lg font-extrabold leading-tight text-[#3d3229]">
            {lang === "en" ? clinic.name : clinic.nameHi}
          </span>
        </Link>
        <nav className="hidden items-center gap-6 font-bold text-[#7a6a58] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-[#C4552D]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs font-semibold text-[#b3a18c] hover:text-[#C4552D]">← All demos</Link>
          <LangToggle className="rounded-full border-2 border-[#3F6B4F] px-4 py-1 text-sm font-extrabold text-[#3F6B4F] transition-colors hover:bg-[#3F6B4F] hover:text-white" />
          <Link href={`${BASE}/contact#book`} className="rounded-full bg-[#C4552D] px-6 py-2.5 text-white shadow-lg shadow-orange-900/20 transition-transform hover:scale-105">
            {t.nav.book} 🧡
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>
      {open && (
        <nav className="border-t-2 border-[#f0e4d3] bg-[#FBF6EE] px-4 pb-5 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#f0e4d3] py-3 font-bold text-[#5d4f40]">
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex gap-3">
            <LangToggle className="rounded-full border-2 border-[#3F6B4F] px-4 py-2 font-extrabold text-[#3F6B4F]" />
            <Link href={`${BASE}/contact#book`} onClick={() => setOpen(false)} className="flex-1 rounded-full bg-[#C4552D] px-6 py-2.5 text-center font-bold text-white">
              {t.nav.book} 🧡
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ emoji, title, sub }: { emoji?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {emoji && <p className="mb-2 text-3xl">{emoji}</p>}
      <h2 className="inline-block text-3xl font-extrabold text-[#3d3229] md:text-4xl">{title}</h2>
      <Squiggle className="mx-auto mt-2 w-32 text-[#C4552D]" />
      {sub && <p className="mt-3 text-lg text-[#8a7961]">{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub, emoji }: { title: string; sub?: string; emoji?: string }) {
  return (
    <section className="relative overflow-hidden py-16 text-center">
      <Blob className="-left-20 -top-20 h-72 w-72 bg-orange-200/60" />
      <Blob className="-right-20 top-10 h-72 w-72 bg-green-200/50" />
      <div className="relative">
        {emoji && <p className="mb-3 text-5xl">{emoji}</p>}
        <h1 className="text-4xl font-extrabold text-[#3d3229] md:text-5xl">{title}</h1>
        <Squiggle className="mx-auto mt-3 w-40 text-[#C4552D]" />
        {sub && <p className="mx-auto mt-4 max-w-xl px-4 text-lg text-[#8a7961]">{sub}</p>}
      </div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-amber-400 text-amber-400" : "fill-[#e8dcc9] text-[#e8dcc9]"}`} />
      ))}
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className={`overflow-hidden rounded-3xl border-2 transition-colors ${isOpen ? "border-[#C4552D] bg-white" : "border-[#f0e4d3] bg-white/70"}`}>
            <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-extrabold text-[#3d3229]">
              {item.q}
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all ${isOpen ? "rotate-180 bg-[#C4552D] text-white" : "bg-[#f5ead9] text-[#C4552D]"}`}>
                <ChevronDown className="h-5 w-5" />
              </span>
            </button>
            {isOpen && <p className="px-6 pb-5 text-[#7a6a58]">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <div className="rounded-3xl border-2 border-[#f0e4d3] bg-white p-7 lg:col-span-2">
        <h3 className="mb-3 flex items-center gap-2 text-xl font-extrabold text-[#3d3229]">
          <MapPin className="h-6 w-6 text-[#C4552D]" /> {lang === "en" ? clinic.name : clinic.nameHi}
        </h3>
        <p className="mb-4 text-[#7a6a58]">{lang === "en" ? clinic.address : clinic.addressHi}</p>
        <div className="mb-5 space-y-1 text-sm text-[#7a6a58]">
          {clinic.timings[lang].map((tm) => (
            <p key={tm.days}><span className="font-extrabold text-[#3d3229]">{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={clinic.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-[#3F6B4F] px-6 py-3 font-bold text-white shadow-lg shadow-green-900/20 transition-transform hover:scale-105">
          {t.misc.getDirections} 🗺️
        </a>
      </div>
      <div className="overflow-hidden rounded-3xl border-2 border-[#f0e4d3] lg:col-span-3">
        <iframe src={clinic.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Clinic location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden px-4 py-16">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-[#C4552D] px-8 py-12 text-center text-white md:py-16">
        <Blob className="-left-10 -top-16 h-56 w-56 bg-orange-400/40" />
        <Blob className="-bottom-16 -right-10 h-56 w-56 bg-amber-300/30" />
        <div className="relative">
          <h2 className="text-3xl font-extrabold md:text-4xl">{t.sections.ctaTitle}</h2>
          <p className="mt-3 text-lg text-orange-100">{t.sections.ctaSub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={`${BASE}/contact#book`} className="rounded-full bg-white px-8 py-3.5 font-extrabold text-[#C4552D] shadow-xl transition-transform hover:scale-105">
              {t.hero.cta1} 🧡
            </Link>
            <a href={`tel:${clinic.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-3.5 font-extrabold text-white transition-colors hover:bg-white/10">
              <Phone className="h-5 w-5" /> {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="bg-[#3F6B4F] pt-14 text-green-50">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#C4552D]"><Heart className="h-5 w-5 fill-current" /></span>
            <span className="font-extrabold text-white">{lang === "en" ? clinic.name : clinic.nameHi}</span>
          </div>
          <p className="text-sm text-green-200">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-extrabold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm text-green-200">
            <li><Link href={BASE} className="hover:text-white">{t.nav.home}</Link></li>
            <li><Link href={`${BASE}/about`} className="hover:text-white">{t.nav.about}</Link></li>
            <li><Link href={`${BASE}/services`} className="hover:text-white">{t.nav.services}</Link></li>
            <li><Link href={`${BASE}/doctors`} className="hover:text-white">{t.nav.doctors}</Link></li>
            <li><Link href={`${BASE}/contact`} className="hover:text-white">{t.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-extrabold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-green-200">
            <li>{lang === "en" ? clinic.address : clinic.addressHi}</li>
            <li><a href={`tel:${clinic.phoneRaw}`} className="hover:text-white">{clinic.phone}</a></li>
            <li><a href={`mailto:${clinic.email}`} className="hover:text-white">{clinic.email}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-extrabold text-white">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-green-200">
            {clinic.timings[lang].map((tm) => (
              <li key={tm.days}><span className="text-white">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-green-600/50 py-5 text-center text-xs text-green-300">
        © {new Date().getFullYear()} {clinic.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-[2rem] border-2 border-[#f0e4d3] bg-white p-6 shadow-xl shadow-orange-900/5 sm:p-8",
  label: "mb-1.5 block font-extrabold text-[#5d4f40]",
  input: "w-full rounded-2xl border-2 border-[#f0e4d3] bg-[#FDFBF7] px-4 py-2.5 text-[#3d3229] outline-none transition-colors placeholder:text-[#c4b39a] focus:border-[#C4552D]",
  select: "w-full rounded-2xl border-2 border-[#f0e4d3] bg-[#FDFBF7] px-4 py-2.5 text-[#3d3229] outline-none focus:border-[#C4552D]",
  dayBtn: "rounded-2xl border-2 border-[#f0e4d3] py-2 text-center text-[#8a7961] transition-colors hover:border-[#C4552D]",
  dayBtnActive: "rounded-2xl border-2 border-[#C4552D] bg-[#C4552D] py-2 text-center text-white shadow-lg shadow-orange-900/20",
  slotBtn: "rounded-full border-2 border-[#f0e4d3] px-3 py-1.5 text-sm font-bold text-[#8a7961] transition-colors hover:border-[#3F6B4F]",
  slotBtnActive: "rounded-full border-2 border-[#3F6B4F] bg-[#3F6B4F] px-3 py-1.5 text-sm font-bold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-extrabold uppercase tracking-wider text-[#b3a18c]",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 text-lg font-extrabold text-white shadow-xl shadow-green-600/25 transition-transform hover:scale-[1.02]",
  success: "rounded-2xl bg-green-100 px-4 py-3 font-bold text-green-800",
  error: "rounded-2xl bg-red-100 px-4 py-3 font-bold text-red-700",
};
