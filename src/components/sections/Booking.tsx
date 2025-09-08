import Section from "@/components/ui/Section";
import { site } from "@/data/site";
import CalEmbed from "@/features/booking/CalEmbed";

export default function Booking() {
  return (
    <Section id="rdv" title="Prendre rendez-vous" subtitle="Choisissez un créneau — confirmation instantanée">
      <div className="card">
        <CalEmbed url={site.booking.url} height={640} />
      </div>
      <p className="muted" style={{marginTop:"8px"}}>
        Ou contactez-nous sur <a href={site.whatsapp} style={{textDecoration:"underline"}}>WhatsApp</a>.
      </p>
    </Section>
  );
}
