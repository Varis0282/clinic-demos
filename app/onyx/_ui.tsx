"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Plus, Minus, MapPin } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { clinic } from "@/lib/config";
import { faqs } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/onyx";
export const GOLD = "#C9A96A";

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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0E13]/90 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={BASE} className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-[#C9A96A] text-[#C9A96A]">
            <span className="font-display text-xl italic">A</span>
          </span>
          <span className="font-display text-lg tracking-wide text-stone-100">
            {lang === "en" ? clinic.name : clinic.nameHi}
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-[#C9A96A]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="normal-case tracking-normal text-stone-600 hover:text-stone-300">← All demos</Link>
          <LangToggle className="border border-white/20 px-3 py-1.5 text-stone-200 transition-colors hover:border-[#C9A96A] hover:text-[#C9A96A]" />
          <Link href={`${BASE}/contact`} className="border border-[#C9A96A] px-6 py-2.5 text-[#C9A96A] transition-all hover:bg-[#C9A96A] hover:text-[#0B0E13]">
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="text-stone-200 lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-[#0B0E13] px-4 pb-5 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3.5 text-sm uppercase tracking-[0.18em] text-stone-300">
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex gap-3">
            <LangToggle className="border border-white/20 px-4 py-2 text-sm text-stone-200" />
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="flex-1 border border-[#C9A96A] px-6 py-2 text-center text-sm uppercase tracking-[0.18em] text-[#C9A96A]">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A96A]">
      <span className="h-px w-10 bg-[#C9A96A]" /> {children}
    </p>
  );
}

export function SectionHead({ eyebrow, title, sub, center = false }: { eyebrow?: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A96A] ${center ? "justify-center" : ""}`}>
          {!center && <span className="h-px w-10 bg-[#C9A96A]" />}
          {eyebrow}
          {center && <span className="h-px w-10 bg-[#C9A96A]" />}
        </p>
      )}
      <h2 className="font-display text-4xl text-stone-100 md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 leading-relaxed text-stone-500">{sub}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="border-b border-white/10 py-20 text-center">
      <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A96A]">
        <span className="h-px w-10 bg-[#C9A96A]" /> {eyebrow} <span className="h-px w-10 bg-[#C9A96A]" />
      </p>
      <h1 className="font-display text-4xl text-stone-100 md:text-6xl">{title}</h1>
      {sub && <p className="mx-auto mt-5 max-w-xl px-4 text-stone-500">{sub}</p>}
    </section>
  );
}

export function GoldStars({ n }: { n: number }) {
  return <p className="tracking-[0.3em] text-[#C9A96A]">{"★".repeat(n)}{"☆".repeat(5 - n)}</p>;
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i}>
            <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-display text-lg text-stone-100">
              {item.q}
              {isOpen ? <Minus className="h-5 w-5 shrink-0 text-[#C9A96A]" /> : <Plus className="h-5 w-5 shrink-0 text-[#C9A96A]" />}
            </button>
            {isOpen && <p className="pb-6 leading-relaxed text-stone-500">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-px border border-white/10 bg-white/10 lg:grid-cols-5">
      <div className="bg-[#0B0E13] p-8 lg:col-span-2">
        <h3 className="mb-4 flex items-center gap-2 font-display text-xl text-stone-100">
          <MapPin className="h-5 w-5 text-[#C9A96A]" /> {lang === "en" ? clinic.name : clinic.nameHi}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-stone-500">{lang === "en" ? clinic.address : clinic.addressHi}</p>
        <div className="mb-6 space-y-2 text-sm text-stone-500">
          {clinic.timings[lang].map((tm) => (
            <p key={tm.days}><span className="text-stone-200">{tm.days}</span><br />{tm.hours}</p>
          ))}
        </div>
        <a href={clinic.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block border border-[#C9A96A] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96A] transition-all hover:bg-[#C9A96A] hover:text-[#0B0E13]">
          {t.misc.getDirections}
        </a>
      </div>
      <div className="lg:col-span-3">
        <iframe src={clinic.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Clinic location map" style={{ filter: "grayscale(1) invert(90%)" }} />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="border-t border-white/10 py-24 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <p className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#C9A96A]">
          <span className="h-px w-10 bg-[#C9A96A]" /> ✦ <span className="h-px w-10 bg-[#C9A96A]" />
        </p>
        <h2 className="font-display text-4xl text-stone-100 md:text-5xl">{t.sections.ctaTitle}</h2>
        <p className="mt-4 text-stone-500">{t.sections.ctaSub}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="bg-[#C9A96A] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0B0E13] transition-opacity hover:opacity-85">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${clinic.phoneRaw}`} className="border border-white/25 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] text-stone-200 transition-colors hover:border-[#C9A96A] hover:text-[#C9A96A]">
            {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="border-t border-white/10 bg-[#080a0e] pt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center border border-[#C9A96A] font-display text-lg italic text-[#C9A96A]">A</span>
            <span className="font-display text-stone-100">{lang === "en" ? clinic.name : clinic.nameHi}</span>
          </div>
          <p className="text-sm leading-relaxed text-stone-600">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A96A]">{t.footer.quick}</h4>
          <ul className="space-y-2.5 text-sm text-stone-500">
            <li><Link href={BASE} className="hover:text-stone-200">{t.nav.home}</Link></li>
            <li><Link href={`${BASE}/about`} className="hover:text-stone-200">{t.nav.about}</Link></li>
            <li><Link href={`${BASE}/services`} className="hover:text-stone-200">{t.nav.services}</Link></li>
            <li><Link href={`${BASE}/doctors`} className="hover:text-stone-200">{t.nav.doctors}</Link></li>
            <li><Link href={`${BASE}/contact`} className="hover:text-stone-200">{t.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A96A]">{t.footer.contact}</h4>
          <ul className="space-y-2.5 text-sm text-stone-500">
            <li>{lang === "en" ? clinic.address : clinic.addressHi}</li>
            <li><a href={`tel:${clinic.phoneRaw}`} className="hover:text-stone-200">{clinic.phone}</a></li>
            <li><a href={`mailto:${clinic.email}`} className="hover:text-stone-200">{clinic.email}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A96A]">{t.footer.hours}</h4>
          <ul className="space-y-2.5 text-sm text-stone-500">
            {clinic.timings[lang].map((tm) => (
              <li key={tm.days}><span className="text-stone-300">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs tracking-wider text-stone-700">
        © {new Date().getFullYear()} {clinic.name} · {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-6 border border-white/10 bg-white/[0.03] p-6 sm:p-10",
  label: "mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96A]",
  input: "w-full border border-white/15 bg-transparent px-4 py-3 text-stone-100 outline-none transition-colors placeholder:text-stone-600 focus:border-[#C9A96A]",
  select: "w-full border border-white/15 bg-[#0B0E13] px-4 py-3 text-stone-100 outline-none focus:border-[#C9A96A]",
  dayBtn: "border border-white/10 py-2 text-center text-stone-500 transition-colors hover:border-[#C9A96A]/60",
  dayBtnActive: "border border-[#C9A96A] bg-[#C9A96A]/10 py-2 text-center text-[#C9A96A]",
  slotBtn: "border border-white/10 px-3.5 py-1.5 text-sm text-stone-500 transition-colors hover:border-[#C9A96A]/60 hover:text-stone-200",
  slotBtnActive: "border border-[#C9A96A] bg-[#C9A96A] px-3.5 py-1.5 text-sm font-semibold text-[#0B0E13]",
  groupTitle: "mb-2 mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-stone-600",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90",
  success: "border border-[#C9A96A]/40 bg-[#C9A96A]/10 px-4 py-3 text-sm text-[#C9A96A]",
  error: "border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-400",
};
