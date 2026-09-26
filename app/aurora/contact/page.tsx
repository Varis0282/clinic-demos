"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/lib/lang";
import { clinic } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, FadeIn, Glass, bookingStyles } from "../_ui";

export default function Contact() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.booking.title} sub={t.booking.sub} />
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <div id="book" className="scroll-mt-28"><BookingForm styles={bookingStyles} /></div>
          </FadeIn>
          <FadeIn delay={0.15} className="space-y-4 lg:col-span-2">
            {[
              { icon: <MapPin className="h-5 w-5" />, title: t.sections.visitTitle, body: lang === "en" ? clinic.address : clinic.addressHi },
              { icon: <Phone className="h-5 w-5" />, title: t.hero.cta2, body: clinic.phone, href: `tel:${clinic.phoneRaw}` },
              { icon: <Mail className="h-5 w-5" />, title: "Email", body: clinic.email, href: `mailto:${clinic.email}` },
            ].map((c) => (
              <Glass key={c.title} className="flex gap-4 p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400/25 to-indigo-500/25 text-teal-300">{c.icon}</span>
                <div>
                  <h3 className="font-bold text-white">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-slate-400 hover:text-teal-300">{c.body}</a>
                  ) : (
                    <p className="text-slate-400">{c.body}</p>
                  )}
                </div>
              </Glass>
            ))}
            <Glass className="p-5">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-white"><Clock className="h-5 w-5 text-teal-400" /> {t.footer.hours}</h3>
              {clinic.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-slate-400"><span className="font-semibold text-slate-200">{tm.days}:</span> {tm.hours}</p>
              ))}
            </Glass>
            <div className="rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-sm font-semibold text-red-300">
              🚨 {t.misc.emergency}: <a href={`tel:${clinic.phoneRaw}`} className="underline">{clinic.phone}</a>
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10">
          <iframe src={clinic.mapEmbed} className="h-96 w-full" loading="lazy" title="Clinic location map" style={{ filter: "invert(90%) hue-rotate(180deg)" }} />
        </div>
      </section>
    </>
  );
}
