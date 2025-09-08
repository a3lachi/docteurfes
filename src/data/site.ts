import type { SiteConfig } from "@/types";

export const site: SiteConfig = {
  name: "Cabinet Dr [Nom]",
  phone: "+2125XXXXXXXX",
  whatsapp: "https://wa.me/2126XXXXXXXX",
  email: "contact@exemple.com",
  address: { street: "Rue …", city: "Fès", postalCode: "30000", country: "MA" },
  mapEmbed: "https://www.google.com/maps/embed?pb=...",
  hours: [
    { days: ["Mon","Tue","Wed","Thu","Fri"], opens: "09:00", closes: "19:00" },
    { days: ["Sat"], opens: "09:00", closes: "13:00" }
  ],
  nav: [
    { href: "#accueil",  label: "Accueil" },
    { href: "#services", label: "Services" },
    { href: "#docteur",  label: "Docteur" },
    { href: "#avis",     label: "Avis" },
    { href: "#rdv",      label: "Prendre RDV" },
    { href: "#faq",      label: "FAQ" },
    { href: "#contact",  label: "Contact" }
  ],
  booking: { url: "https://cal.com/votre-lien" },
  usps: ["Soins sans douleur", "Mutuelles acceptées", "Cabinet moderne"],
  doctor: { name: "Dr [Nom]", title: "Médecin généraliste", years: 10 }
};
