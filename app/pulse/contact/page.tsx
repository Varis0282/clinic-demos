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
      <PageHero title={t.booking.title} sub={t.booking.sub} />
      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div id="book" className="scroll-mt-28"><BookingForm styles={bookingStyles} /></div>
          </div>
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: <MapPin className="h-5 w-5" />, title: t.sections.visitTitle, body: lang === "en" ? clinic.address : clinic.addressHi },
              { icon: <Phone className="h-5 w-5" />, title: t.hero.cta2, body: clinic.phone, href: `tel:${clinic.phoneRaw}` },
              { icon: <Mail className="h-5 w-5" />, title: "Email", body: clinic.email, href: `mailto:${clinic.email}` },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">{c.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-900">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-slate-600 hover:text-blue-700">{c.body}</a>
                  ) : (
                    <p className="text-slate-600">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-slate-200 bg-white p-5">
              <h3 className="mb-2 flex items-center gap-2 font-bold text-slate-900"><Clock className="h-5 w-5 text-blue-700" /> {t.footer.hours}</h3>
              {clinic.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-slate-600"><span className="font-semibold">{tm.days}:</span> {tm.hours}</p>
              ))}
            </div>
            <div className="rounded-2xl bg-red-50 p-5 text-sm font-semibold text-red-700">
              🚨 {t.misc.emergency}: <a href={`tel:${clinic.phoneRaw}`} className="underline">{clinic.phone}</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <iframe src={clinic.mapEmbed} className="h-96 w-full" loading="lazy" title="Clinic location map" />
      </section>
    </>
  );
}
