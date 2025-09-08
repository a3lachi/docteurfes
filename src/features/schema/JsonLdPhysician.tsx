"use client";
import Script from "next/script";
import { site } from "@/data/site";

export default function JsonLdPhysician() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: site.name,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country
    },
    openingHoursSpecification: site.hours.map(h=>({
      "@type":"OpeningHoursSpecification",
      dayOfWeek: h.days.map(d=>({Mon:"Monday",Tue:"Tuesday",Wed:"Wednesday",Thu:"Thursday",Fri:"Friday",Sat:"Saturday",Sun:"Sunday"} as any)[d]),
      opens: h.opens, closes: h.closes
    })),
    url: "https://www.exemple-docteur-fes.com"
  };
  return <Script id="ld-physician" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />;
}
