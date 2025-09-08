import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLdPhysician from "@/features/schema/JsonLdPhysician";

export const metadata: Metadata = {
  title: "Dr [Nom] | Médecin à Fès",
  description: "Cabinet médical à Fès : consultations, certificats, suivi. Prise de rendez-vous en ligne ou WhatsApp.",
  openGraph: { title: "Dr [Nom] | Médecin à Fès", description: "Cabinet médical moderne à Fès.", type: "website" },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <a href="#accueil" className="sr-only">Aller au contenu</a>
        <Header />
        <JsonLdPhysician />
        {children}
        <Footer />
      </body>
    </html>
  );
}
