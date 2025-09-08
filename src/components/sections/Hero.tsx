import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <div className="hero">
      <Section id="accueil">
        <div style={{textAlign:"center"}}>
          <h1 className="hero__title">Médecin à Fès — <span style={{color:"var(--c-primary)"}}>prise de RDV le jour même</span></h1>
          <p className="hero__subtitle">Consultations générales, certificats et suivi. Cabinet moderne, accueil attentif.</p>
          <div className="hero__ctas">
            <Button href="#rdv">Prendre rendez-vous</Button>
            <a href={site.whatsapp} className="btn btn--outline">WhatsApp</a>
            <a href={`tel:${site.phone}`} className="btn btn--ghost">Appeler</a>
          </div>
        </div>
      </Section>
    </div>
  );
}
