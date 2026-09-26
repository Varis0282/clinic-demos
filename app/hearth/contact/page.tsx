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
      <PageHero emoji="🗓️" title={t.booking.title} sub={t.booking.sub} />
      <section className="py-10">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div id="book" className="scroll-mt-28"><BookingForm styles={bookingStyles} /></div>
          </div>
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: <MapPin className="h-6 w-6" />, title: t.sections.visitTitle, body: lang === "en" ? clinic.address : clinic.addressHi, color: "bg-orange-100 text-[#C4552D]" },
              { icon: <Phone className="h-6 w-6" />, title: t.hero.cta2, body: clinic.phone, href: `tel:${clinic.phoneRaw}`, color: "bg-green-100 text-[#3F6B4F]" },
              { icon: <Mail className="h-6 w-6" />, title: "Email", body: clinic.email, href: `mailto:${clinic.email}`, color: "bg-amber-100 text-amber-700" },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 rounded-[2rem] border-2 border-[#f0e4d3] bg-white p-6">
                <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${c.color}`}>{c.icon}</span>
                <div>
                  <h3 className="font-extrabold text-[#3d3229]">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="font-bold text-[#7a6a58] hover:text-[#C4552D]">{c.body}</a>
                  ) : (
                    <p className="text-[#7a6a58]">{c.body}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="rounded-[2rem] border-2 border-[#f0e4d3] bg-white p-6">
              <h3 className="mb-2 flex items-center gap-2 font-extrabold text-[#3d3229]"><Clock className="h-5 w-5 text-[#3F6B4F]" /> {t.footer.hours}</h3>
              {clinic.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-[#7a6a58]"><span className="font-extrabold">{tm.days}:</span> {tm.hours}</p>
              ))}
            </div>
            <div className="rounded-[2rem] bg-rose-100 p-6 font-extrabold text-rose-700">
              🚨 {t.misc.emergency}: <a href={`tel:${clinic.phoneRaw}`} className="underline">{clinic.phone}</a>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border-4 border-white shadow-xl shadow-orange-900/10">
          <iframe src={clinic.mapEmbed} className="h-96 w-full" loading="lazy" title="Clinic location map" />
        </div>
      </section>
    </>
  );
}
