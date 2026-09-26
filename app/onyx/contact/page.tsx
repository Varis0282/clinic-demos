"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLang } from "@/lib/lang";
import { clinic } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, bookingStyles } from "../_ui";

export default function Contact() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero eyebrow={t.nav.contact} title={t.booking.title} sub={t.booking.sub} />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div id="book" className="scroll-mt-28"><BookingForm styles={bookingStyles} /></div>
          </div>
          <div className="space-y-px border border-white/10 bg-white/10 self-start lg:col-span-2">
            {[
              { icon: <MapPin className="h-5 w-5" />, title: t.sections.visitTitle, body: lang === "en" ? clinic.address : clinic.addressHi },
              { icon: <Phone className="h-5 w-5" />, title: t.hero.cta2, body: clinic.phone, href: `tel:${clinic.phoneRaw}` },
              { icon: <Mail className="h-5 w-5" />, title: "Email", body: clinic.email, href: `mailto:${clinic.email}` },
            ].map((c) => (
              <div key={c.title} className="flex gap-5 bg-[#0B0E13] p-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#C9A96A]/50 text-[#C9A96A]">{c.icon}</span>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96A]">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-stone-300 hover:text-[#C9A96A]">{c.body}</a>
                  ) : (
                    <p className="mt-1 text-stone-400">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="bg-[#0B0E13] p-6">
              <h3 className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#C9A96A]"><Clock className="h-4 w-4" /> {t.footer.hours}</h3>
              {clinic.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-stone-500"><span className="text-stone-200">{tm.days}:</span> {tm.hours}</p>
              ))}
            </div>
            <div className="bg-[#0B0E13] p-6 text-sm text-red-400">
              🚨 {t.misc.emergency}: <a href={`tel:${clinic.phoneRaw}`} className="underline">{clinic.phone}</a>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-white/10">
        <iframe src={clinic.mapEmbed} className="h-96 w-full" loading="lazy" title="Clinic location map" style={{ filter: "grayscale(1) invert(90%)" }} />
      </section>
    </>
  );
}
