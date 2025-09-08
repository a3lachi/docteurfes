export type Address = { street: string; city: string; postalCode: string; country: string };
export type Hours = { days: ("Mon"|"Tue"|"Wed"|"Thu"|"Fri"|"Sat"|"Sun")[]; opens: string; closes: string }[];
export type Doctor = { name: string; title?: string; years?: number; specialties?: string[]; photo?: string };
export type Service = { slug: string; title: string; excerpt: string };
export type FAQ = { question: string; answer: string };
export type Review = { name: string; rating: number; text: string; source?: string; date?: string };
export type SiteConfig = {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: Address;
  mapEmbed: string;
  hours: Hours;
  nav: { href: string; label: string }[];
  booking: { url: string };
  usps: string[];
  doctor: Doctor;
};
