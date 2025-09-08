"use client";
import Link from "next/link";
import Container from "./Container";
import { site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";

export default function Header() {
  const ids = site.nav.map((n) => n.href.replace("#",""));
  const active = useActiveSection(ids);

  return (
    <header className="header" style={{ height: "var(--header-h)" }}>
      <Container className="header__inner">
        <Link href="#accueil" className="brand">{site.name}</Link>
        <nav className="nav">
          {site.nav.map((i) => {
            const id = i.href.replace("#","");
            const cls = active === id ? "nav__link nav__link--active" : "nav__link";
            return <a key={i.href} href={i.href} className={cls}>{i.label}</a>;
          })}
        </nav>
        <a href="#rdv" className="btn btn--primary" aria-label="Prendre rendez-vous (mobile)">Prendre RDV</a>
      </Container>
    </header>
  );
}
