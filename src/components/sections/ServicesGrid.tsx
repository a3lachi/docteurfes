import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <Section id="services" title="Services" subtitle="Quelques actes pris en charge au cabinet">
      <div className="grid grid--3">
        {services.map((s) => (
          <Card key={s.slug} title={s.title}>
            <p>{s.excerpt}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
