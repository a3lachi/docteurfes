import Section from "@/components/ui/Section";
import { site } from "@/data/site";
import GoogleMapEmbed from "@/features/map/GoogleMapEmbed";

export default function MapHours() {
  return (
    <Section id="contact" title="Nous trouver">
      <div className="grid" style={{gridTemplateColumns:"1fr",gap:"16px"}}>
        <div className="card">
          <h3 className="card__title">Adresse</h3>
          <p className="muted">{site.address.street}, {site.address.city} {site.address.postalCode}</p>
          <p className="muted">Tél: <a href={`tel:${site.phone}`} style={{textDecoration:"underline"}}>{site.phone}</a></p>
          <p className="muted">Email: <a href={`mailto:${site.email}`} style={{textDecoration:"underline"}}>{site.email}</a></p>
        </div>
        <GoogleMapEmbed src={site.mapEmbed} title="Localisation du cabinet" />
      </div>
    </Section>
  );
}
