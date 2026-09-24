"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight, MapPin } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { clinic } from "@/lib/config";
import { faqs } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/paper";
export const RED = "#D62828";

export function Micro({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-[11px] font-bold uppercase tracking-[0.22em] ${className}`}>{children}</p>;
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
    <header className="sticky top-0 z-40 border-b border-black/15 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={BASE} className="text-lg font-black uppercase tracking-tight">
          {lang === "en" ? clinic.shortName : "आरोग्यम"}<span className="text-[#D62828]">.</span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="underline-offset-4 hover:underline hover:decoration-[#D62828] hover:decoration-2">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs text-black/40 hover:text-black">← All demos</Link>
          <LangToggle className="border border-black px-3 py-1 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-black hover:text-white" />
          <Link href={`${BASE}/contact`} className="bg-[#D62828] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-black">
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-black/15 bg-white px-4 pb-5 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-black/10 py-3.5 font-semibold">
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex gap-3">
            <LangToggle className="border border-black px-4 py-2 text-xs font-bold uppercase tracking-wider" />
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="flex-1 bg-[#D62828] px-5 py-2.5 text-center font-bold text-white">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ num, title, sub }: { num: string; title: string; sub?: string }) {
  return (
    <div className="mb-12 border-t-2 border-black pt-6 md:flex md:items-end md:justify-between md:gap-10">
      <div>
        <Micro className="mb-3 text-[#D62828]">{num}</Micro>
        <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      </div>
      {sub && <p className="mt-3 max-w-sm text-black/50 md:mt-0 md:text-right">{sub}</p>}
    </div>
  );
}

export function PageHero({ num, title, sub }: { num: string; title: string; sub?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 md:pt-24">
      <Micro className="mb-4 text-[#D62828]">{num}</Micro>
      <h1 className="font-display text-5xl font-semibold tracking-tight md:text-7xl">{title}</h1>
      {sub && <p className="mt-5 max-w-xl text-lg text-black/50">{sub}</p>}
    </section>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-black/15 border-y border-black/15">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i}>
            <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-baseline justify-between gap-6 py-5 text-left">
              <span className="flex items-baseline gap-5">
                <span className="text-xs font-bold text-[#D62828]">0{i + 1}</span>
                <span className="font-display text-xl font-medium">{item.q}</span>
              </span>
              <span className="text-2xl font-light leading-none">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="max-w-3xl pb-6 pl-9 text-black/55">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid border border-black/15 lg:grid-cols-5">
      <div className="border-b border-black/15 p-8 lg:col-span-2 lg:border-b-0 lg:border-r">
        <h3 className="mb-4 flex items-center gap-2 font-display text-2xl font-semibold">
          <MapPin className="h-5 w-5 text-[#D62828]" /> {lang === "en" ? clinic.name : clinic.nameHi}
        </h3>
        <p className="mb-5 text-black/55">{lang === "en" ? clinic.address : clinic.addressHi}</p>
        <div className="mb-6 space-y-1.5 text-sm text-black/55">
          {clinic.timings[lang].map((tm) => (
            <p key={tm.days}><span className="font-bold text-black">{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={clinic.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold underline decoration-[#D62828] decoration-2 underline-offset-4 hover:text-[#D62828]">
          {t.misc.getDirections} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="lg:col-span-3">
        <iframe src={clinic.mapEmbed} className="h-72 w-full grayscale lg:h-full" loading="lazy" title="Clinic location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="border-t-2 border-black bg-[#111] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 md:flex md:items-center md:justify-between md:gap-10">
        <div>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">{t.sections.ctaTitle}</h2>
          <p className="mt-3 text-white/50">{t.sections.ctaSub}</p>
        </div>
        <div className="mt-8 flex shrink-0 flex-wrap gap-4 md:mt-0">
          <Link href={`${BASE}/contact`} className="bg-[#D62828] px-8 py-4 font-bold transition-colors hover:bg-white hover:text-black">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${clinic.phoneRaw}`} className="border border-white/40 px-8 py-4 font-bold transition-colors hover:bg-white hover:text-black">
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
    <footer className="border-t border-black/15 pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 md:grid-cols-4">
        <div>
          <p className="mb-3 text-xl font-black uppercase tracking-tight">
            {lang === "en" ? clinic.shortName : "आरोग्यम"}<span className="text-[#D62828]">.</span>
          </p>
          <p className="text-sm text-black/50">{t.footer.tagline}</p>
        </div>
        <div>
          <Micro className="mb-4 text-black/40">{t.footer.quick}</Micro>
          <ul className="space-y-2 text-sm font-semibold">
            <li><Link href={BASE} className="hover:text-[#D62828]">{t.nav.home}</Link></li>
            <li><Link href={`${BASE}/about`} className="hover:text-[#D62828]">{t.nav.about}</Link></li>
            <li><Link href={`${BASE}/services`} className="hover:text-[#D62828]">{t.nav.services}</Link></li>
            <li><Link href={`${BASE}/doctors`} className="hover:text-[#D62828]">{t.nav.doctors}</Link></li>
            <li><Link href={`${BASE}/contact`} className="hover:text-[#D62828]">{t.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <Micro className="mb-4 text-black/40">{t.footer.contact}</Micro>
          <ul className="space-y-2 text-sm text-black/60">
            <li>{lang === "en" ? clinic.address : clinic.addressHi}</li>
            <li><a href={`tel:${clinic.phoneRaw}`} className="font-semibold text-black hover:text-[#D62828]">{clinic.phone}</a></li>
            <li><a href={`mailto:${clinic.email}`} className="hover:text-[#D62828]">{clinic.email}</a></li>
          </ul>
        </div>
        <div>
          <Micro className="mb-4 text-black/40">{t.footer.hours}</Micro>
          <ul className="space-y-2 text-sm text-black/60">
            {clinic.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-semibold text-black">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-black/15 py-5 text-center text-xs text-black/40">
        © {new Date().getFullYear()} {clinic.name} — {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-6 border border-black/15 p-6 sm:p-10",
  label: "mb-2 block text-[11px] font-bold uppercase tracking-[0.22em] text-black/60",
  input: "w-full border-b-2 border-black/20 bg-transparent px-0 py-2.5 outline-none transition-colors placeholder:text-black/30 focus:border-[#D62828]",
  select: "w-full border-b-2 border-black/20 bg-transparent px-0 py-2.5 outline-none focus:border-[#D62828]",
  dayBtn: "border border-black/15 py-2 text-center text-black/50 transition-colors hover:border-black",
  dayBtnActive: "border border-black bg-black py-2 text-center text-white",
  slotBtn: "border border-black/15 px-3 py-1.5 text-sm text-black/50 transition-colors hover:border-black hover:text-black",
  slotBtnActive: "border border-[#D62828] bg-[#D62828] px-3 py-1.5 text-sm font-bold text-white",
  groupTitle: "mb-2 mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-black/35",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 font-bold text-white transition-colors hover:bg-black",
  success: "border-l-4 border-green-600 bg-green-50 px-4 py-3 text-sm font-semibold text-green-800",
  error: "border-l-4 border-[#D62828] bg-red-50 px-4 py-3 text-sm font-semibold text-[#D62828]",
};
