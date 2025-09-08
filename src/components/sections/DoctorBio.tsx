import Section from "@/components/ui/Section";
import { site } from "@/data/site";

export default function DoctorBio() {
  const d = site.doctor;
  return (
    <Section id="docteur" title={d.name} subtitle={d.title}>
      <div className="grid" style={{gridTemplateColumns:"1fr",gap:"24px"}}>
        <div className="card">
          <h3 className="card__title">À propos</h3>
          <p className="muted">[Bio courte du docteur… {d.years ?? 0} ans d’expérience.]</p>
          <ul className="muted" style={{marginTop:"8px"}}>
            <li>Soins sans douleur</li>
            <li>Hygiène & stérilisation strictes</li>
            <li>Mutuelles acceptées</li>
          </ul>
        </div>
        <div className="card">
          <h3 className="card__title">Horaires & Adresse</h3>
          <p className="muted">{site.address.street}, {site.address.city} {site.address.postalCode}</p>
          <p className="muted">Lun–Ven 09:00–19:00 · Sam 09:00–13:00</p>
        </div>
      </div>
    </Section>
  );
}
