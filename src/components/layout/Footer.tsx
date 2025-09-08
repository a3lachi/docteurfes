import Container from "./Container";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div>{site.name} — {site.address.street}, {site.address.city} {site.address.postalCode}</div>
        <div>Tél: <a className="muted" href={`tel:${site.phone}`}>{site.phone}</a> · Email: <a className="muted" href={`mailto:${site.email}`}>{site.email}</a></div>
        <small>© {new Date().getFullYear()} · <a className="muted" href="#accueil">Retour en haut</a></small>
      </Container>
    </footer>
  );
}
