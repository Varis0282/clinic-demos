"use client";

import { useLang } from "@/lib/lang";
import { clinic } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, Micro, bookingStyles } from "../_ui";

export default function Contact() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero num="Contact — 01" title={t.booking.title} sub={t.booking.sub} />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="self-start border border-black/15 lg:col-span-2">
            <div className="border-b border-black/15 p-7">
              <Micro className="mb-2 text-[#D62828]">{t.sections.visitTitle}</Micro>
              <p className="text-black/60">{lang === "en" ? clinic.address : clinic.addressHi}</p>
            </div>
            <div className="border-b border-black/15 p-7">
              <Micro className="mb-2 text-[#D62828]">{t.hero.cta2}</Micro>
              <a href={`tel:${clinic.phoneRaw}`} className="font-display text-2xl font-medium hover:text-[#D62828]">{clinic.phone}</a>
              <p className="mt-1 text-sm text-black/45"><a href={`mailto:${clinic.email}`} className="hover:text-[#D62828]">{clinic.email}</a></p>
            </div>
            <div className="border-b border-black/15 p-7">
              <Micro className="mb-2 text-[#D62828]">{t.footer.hours}</Micro>
              {clinic.timings[lang].map((tm) => (
                <p key={tm.days} className="text-sm text-black/60"><span className="font-bold text-black">{tm.days}:</span> {tm.hours}</p>
              ))}
            </div>
            <div className="bg-[#111] p-7 text-white">
              <Micro className="mb-2 text-[#D62828]">{t.misc.emergency}</Micro>
              <a href={`tel:${clinic.phoneRaw}`} className="font-display text-2xl font-medium">{clinic.phone}</a>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-6">
        <iframe src={clinic.mapEmbed} className="h-96 w-full border border-black/15 grayscale" loading="lazy" title="Clinic location map" />
      </section>
    </>
  );
}
