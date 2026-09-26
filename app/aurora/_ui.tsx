"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Menu, X, Sparkle, ChevronDown, Star, MapPin } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { clinic } from "@/lib/config";
import { faqs } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/aurora";

export function MeshBg() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <div className="absolute -top-40 left-[-10%] h-[480px] w-[480px] rounded-full bg-teal-500/25 blur-3xl" />
      <div className="absolute right-[-15%] top-64 h-[560px] w-[560px] rounded-full bg-indigo-600/25 blur-3xl" />
      <div className="absolute bottom-[-10%] left-[20%] h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-3xl" />
    </div>
  );
}

export function FadeIn({ children, delay = 0, y = 28, className }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [text, setText] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const m = value.match(/([\d,.]+)/);
    if (!m) { setText(value); return; }
    const num = parseFloat(m[1].replace(/,/g, ""));
    const prefix = value.slice(0, m.index);
    const suffix = value.slice((m.index ?? 0) + m[1].length);
    const decimals = m[1].includes(".") ? 1 : 0;
    const grouped = m[1].includes(",");
    const controls = animate(0, num, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (v) => {
        const s = decimals ? v.toFixed(decimals) : grouped ? Math.round(v).toLocaleString("en-IN") : String(Math.round(v));
        setText(prefix + s + suffix);
      },
    });
    return () => controls.stop();
  }, [inView, value]);
  return <span ref={ref}>{text}</span>;
}

export function Nav() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { href: BASE, label: t.nav.home },
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/services`, label: t.nav.services },
    { href: `${BASE}/doctors`, label: t.nav.doctors },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <header className="fixed inset-x-0 top-4 z-40 px-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/15 bg-white/10 px-5 py-2.5 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <Link href={BASE} className="flex items-center gap-2 font-extrabold text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-indigo-500">
            <Sparkle className="h-4 w-4 text-white" />
          </span>
          {clinic.shortName}
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-slate-300 transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/" className="text-xs text-slate-400 hover:text-white">← All demos</Link>
          <LangToggle className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-white hover:bg-white/10" />
          <Link href={`${BASE}/contact#book`} className="rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 px-5 py-2 text-sm font-bold text-white shadow-lg shadow-indigo-500/40 transition-transform hover:scale-105">
            {t.nav.book}
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="text-white lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/15 bg-[#0b1024]/95 p-4 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-3 font-medium text-slate-200">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <LangToggle className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white" />
            <Link href={`${BASE}/contact#book`} onClick={() => setOpen(false)} className="flex-1 rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 px-5 py-2 text-center font-bold text-white">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function GradientText({ children }: { children: React.ReactNode }) {
  return <span className="bg-gradient-to-r from-teal-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">{children}</span>;
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-400">{eyebrow}</p>}
      <h2 className="text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-slate-400">{sub}</p>}
    </FadeIn>
  );
}

export function Glass({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.08] ${className}`}>
      {children}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="px-4 pb-10 pt-36 text-center">
      <FadeIn>
        <h1 className="text-4xl font-extrabold text-white md:text-5xl">
          <GradientText>{title}</GradientText>
        </h1>
        {sub && <p className="mx-auto mt-4 max-w-xl text-slate-400">{sub}</p>}
      </FadeIn>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-amber-400 text-amber-400" : "fill-slate-700 text-slate-700"}`} />
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
          <FadeIn key={i} delay={i * 0.05}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white">
                {item.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-teal-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <p className="border-t border-white/10 px-5 py-4 text-slate-400">{item.a}</p>}
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <Glass className="p-6 lg:col-span-2">
        <h3 className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
          <MapPin className="h-5 w-5 text-teal-400" /> {lang === "en" ? clinic.name : clinic.nameHi}
        </h3>
        <p className="mb-4 text-sm text-slate-400">{lang === "en" ? clinic.address : clinic.addressHi}</p>
        <div className="mb-5 space-y-1 text-sm text-slate-400">
          {clinic.timings[lang].map((tm) => (
            <p key={tm.days}><span className="font-semibold text-slate-200">{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={clinic.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/30">
          {t.misc.getDirections} →
        </a>
      </Glass>
      <div className="overflow-hidden rounded-2xl border border-white/10 lg:col-span-3">
        <iframe src={clinic.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Clinic location map" style={{ filter: "invert(90%) hue-rotate(180deg)" }} />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="px-4 py-20">
      <FadeIn className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-gradient-to-br from-teal-500/20 via-indigo-500/20 to-violet-500/20 p-10 text-center backdrop-blur-xl md:p-14">
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-slate-300">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact#book`} className="rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 px-8 py-3.5 font-bold text-white shadow-xl shadow-indigo-500/40 transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${clinic.phoneRaw}`} className="rounded-full border border-white/25 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
            📞 {t.hero.cta2}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="relative border-t border-white/10 bg-[#05070f]/80 pt-14 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2 font-extrabold text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-indigo-500"><Sparkle className="h-4 w-4" /></span>
            {lang === "en" ? clinic.name : clinic.nameHi}
          </div>
          <p className="text-sm text-slate-500">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href={BASE} className="hover:text-teal-300">{t.nav.home}</Link></li>
            <li><Link href={`${BASE}/about`} className="hover:text-teal-300">{t.nav.about}</Link></li>
            <li><Link href={`${BASE}/services`} className="hover:text-teal-300">{t.nav.services}</Link></li>
            <li><Link href={`${BASE}/doctors`} className="hover:text-teal-300">{t.nav.doctors}</Link></li>
            <li><Link href={`${BASE}/contact`} className="hover:text-teal-300">{t.nav.contact}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>{lang === "en" ? clinic.address : clinic.addressHi}</li>
            <li><a href={`tel:${clinic.phoneRaw}`} className="hover:text-teal-300">{clinic.phone}</a></li>
            <li><a href={`mailto:${clinic.email}`} className="hover:text-teal-300">{clinic.email}</a></li>
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
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {clinic.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl sm:p-8",
  label: "mb-1.5 block text-sm font-semibold text-slate-200",
  input: "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-white outline-none transition-colors placeholder:text-slate-500 focus:border-teal-400 focus:bg-white/10",
  select: "w-full rounded-xl border border-white/15 bg-[#0b1024] px-4 py-2.5 text-white outline-none focus:border-teal-400",
  dayBtn: "rounded-xl border border-white/10 py-2 text-center text-slate-400 transition-colors hover:border-teal-400/60 hover:text-white",
  dayBtnActive: "rounded-xl border border-teal-400 bg-gradient-to-b from-teal-400/30 to-indigo-500/30 py-2 text-center text-white shadow-lg shadow-teal-500/20",
  slotBtn: "rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-400 transition-colors hover:border-teal-400/60 hover:text-white",
  slotBtnActive: "rounded-full border border-teal-400 bg-gradient-to-r from-teal-400 to-indigo-500 px-3 py-1.5 text-sm font-semibold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-slate-500",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-xl shadow-green-500/30 transition-transform hover:scale-[1.02]",
  success: "rounded-xl border border-teal-400/40 bg-teal-400/10 px-4 py-3 text-sm font-semibold text-teal-300",
  error: "rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm font-semibold text-red-300",
};
